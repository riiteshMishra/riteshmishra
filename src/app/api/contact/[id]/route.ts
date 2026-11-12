import { NextResponse } from "next/server";
import mongoose from "mongoose";

import connectDB from "@/lib/mongodb";
import ContactMessage from "@/lib/models/ContactMessage";
import { isAdminRequest } from "@/lib/auth";

async function updateResolved(id: string, resolve: boolean) {
  await connectDB();
  const updated = await ContactMessage.findByIdAndUpdate(
    id,
    {
      isResolved: resolve,
      resolvedAt: resolve ? new Date() : null,
    },
    { returnDocument: "after" }
  ).lean();

  if (!updated) return null;
  return {
    id: (updated._id as { toString: () => string }).toString(),
    name: updated.name,
    email: updated.email,
    phone: updated.phone,
    subject: updated.subject,
    message: updated.message,
    isResolved: updated.isResolved,
    resolvedAt: updated.resolvedAt,
    createdAt: updated.createdAt,
  };
}

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await ctx.params;
  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid id." }, { status: 400 });
  }
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  let resolve: boolean;
  if (typeof body.isResolved === "boolean") {
    resolve = body.isResolved;
  } else if (body.action === "resolve") {
    resolve = true;
  } else if (body.action === "reopen") {
    resolve = false;
  } else {
    // toggle? default resolve true if not specified
    resolve = true;
  }

  try {
    const updated = await updateResolved(id, resolve);
    if (!updated) {
      return NextResponse.json({ error: "Message not found." }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: updated });
  } catch (err) {
    console.error("Contact update error:", err);
    return NextResponse.json({ error: "Failed to update message." }, { status: 500 });
  }
}

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
  return PATCH(req, ctx);
}

export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await ctx.params;
  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid id." }, { status: 400 });
  }
  try {
    await connectDB();
    const m = await ContactMessage.findById(id).lean();
    if (!m) return NextResponse.json({ error: "Message not found." }, { status: 404 });
    return NextResponse.json({
      message: {
        id: (m._id as { toString: () => string }).toString(),
        name: m.name,
        email: m.email,
        phone: m.phone,
        subject: m.subject,
        message: m.message,
        isResolved: m.isResolved,
        resolvedAt: m.resolvedAt,
        createdAt: m.createdAt,
      },
    });
  } catch (err) {
    console.error("Contact get error:", err);
    return NextResponse.json({ error: "Failed to load message." }, { status: 500 });
  }
}