import { NextResponse } from "next/server";
import crypto from "node:crypto";

import connectDB from "@/lib/mongodb";
import ContactMessage from "@/lib/models/ContactMessage";
import SubmissionLock from "@/lib/models/SubmissionLock";
import { isAdminRequest } from "@/lib/auth";
import { contactSchema, normalizePhone, normalizeEmail } from "@/lib/validators/contact";
import { checkIpRateLimit, getClientIp } from "@/lib/rateLimit";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json(
      { error: first?.message || "Invalid input." },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const email = normalizeEmail(data.email);
  const phone = normalizePhone(data.phone);
  const name = data.name.trim();
  const subject = data.subject.trim();
  const message = data.message.trim();

  // IP rate limit (Upstash Redis, shared across instances)
  const ip = getClientIp(req);
  if (!(await checkIpRateLimit(ip))) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // identical submission hash
  const hash = crypto
    .createHash("sha256")
    .update(`${name}|${email}|${phone}|${subject}|${message}`)
    .digest("hex");

  try {
    await connectDB();

    // Atomic, cross-instance cooldown/duplicate protection via short-lived locks.
    const lockKeys = [`email:${email}`];
    if (phone) lockKeys.push(`phone:${phone}`);
    lockKeys.push(`content:${hash}`);

    const acquired: string[] = [];
    for (const key of lockKeys) {
      const result = await SubmissionLock.updateOne(
        { key },
        { $setOnInsert: { createdAt: new Date() } },
        { upsert: true }
      );
      if (result.upsertedCount === 1) {
        acquired.push(key);
      } else {
        // Lock already exists (within TTL) -> cooldown active.
        // Release any locks acquired in this attempt.
        if (acquired.length) {
          await SubmissionLock.deleteMany({ key: { $in: acquired } });
        }
        return NextResponse.json(
          { error: "You recently submitted a request. Please wait a few minutes before trying again." },
          { status: 429 }
        );
      }
    }

    const created = await ContactMessage.create({
      name,
      email,
      phone: data.phone?.trim() || "",
      normalizedPhone: phone,
      subject,
      message,
      contentHash: hash,
    });

    return NextResponse.json(
      { success: true, id: created._id.toString() },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact create error:", err);
    return NextResponse.json(
      { error: "Failed to save your message. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    await connectDB();
    const url = new URL(req.url);
    const status = url.searchParams.get("status") || "all";
    const search = (url.searchParams.get("search") || "").trim();

    const filter: Record<string, unknown> = {};
    if (status === "pending") filter.isResolved = false;
    if (status === "resolved") filter.isResolved = true;

    if (search) {
      const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      filter.$or = [
        { name: regex },
        { email: regex },
        { phone: regex },
        { normalizedPhone: regex },
      ];
    }

    const messages = await ContactMessage.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    const data = messages.map((m) => ({
      id: (m._id as { toString: () => string }).toString(),
      name: m.name,
      email: m.email,
      phone: m.phone,
      subject: m.subject,
      message: m.message,
      isResolved: m.isResolved,
      resolvedAt: m.resolvedAt,
      createdAt: m.createdAt,
    }));

    return NextResponse.json({ messages: data });
  } catch (err) {
    console.error("Contact list error:", err);
    return NextResponse.json({ error: "Failed to load messages." }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }
  const url = new URL(req.url);
  const id = (body.id as string) || url.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id." }, { status: 400 });
  }

  let resolve: boolean;
  if (typeof body.isResolved === "boolean") resolve = body.isResolved;
  else if (body.action === "resolve") resolve = true;
  else if (body.action === "reopen") resolve = false;
  else resolve = true;

  try {
    await connectDB();
    const updated = await ContactMessage.findByIdAndUpdate(
      id,
      { isResolved: resolve, resolvedAt: resolve ? new Date() : null },
      { returnDocument: "after" }
    ).lean();
    if (!updated) {
      return NextResponse.json({ error: "Message not found." }, { status: 404 });
    }
    return NextResponse.json({
      success: true,
      message: {
        id: (updated._id as { toString: () => string }).toString(),
        name: updated.name,
        email: updated.email,
        phone: updated.phone,
        subject: updated.subject,
        message: updated.message,
        isResolved: updated.isResolved,
        resolvedAt: updated.resolvedAt,
        createdAt: updated.createdAt,
      },
    });
  } catch (err) {
    console.error("Contact update error:", err);
    return NextResponse.json({ error: "Failed to update message." }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  return PATCH(req);
}