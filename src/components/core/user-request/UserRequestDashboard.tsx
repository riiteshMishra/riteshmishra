"use client";

import { useCallback, useEffect, useState } from "react";
import { LoaderCircle, Search, CheckCircle2, RotateCcw, Mail, Phone, Calendar } from "lucide-react";

type Message = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isResolved: boolean;
  resolvedAt: string | null;
  createdAt: string;
};

export default function UserRequestDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "pending" | "resolved">("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Message | null>(null);
  const [actionId, setActionId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (filter !== "all") params.set("status", filter);
      if (search.trim()) params.set("search", search.trim());
      const res = await fetch(`/api/contact?${params.toString()}`, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setMessages(data.messages || []);
    } catch {
      setError("Failed to load contact requests.");
    } finally {
      setLoading(false);
    }
  }, [filter, search]);

  useEffect(() => {
    const t = setTimeout(load, 300);
    return () => clearTimeout(t);
  }, [load]);

  // counts not needed in UI currently

  const toggleResolve = async (m: Message) => {
    setActionId(m.id);
    try {
      const res = await fetch(`/api/contact/${m.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ isResolved: !m.isResolved }),
      });
      if (!res.ok) throw new Error("Failed");
      await load();
      if (selected?.id === m.id) {
        setSelected({ ...m, isResolved: !m.isResolved, resolvedAt: !m.isResolved ? new Date().toISOString() : null });
      }
    } catch {
      setError("Action failed. Please try again.");
    } finally {
      setActionId(null);
    }
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <p className="font-roboto text-sm font-medium text-accent-green">Dashboard</p>
        <h1 className="mt-2 font-headline-mozi text-3xl font-semibold">Contact Requests</h1>
        <p className="mt-2 text-sm text-text-muted font-headline-sans">
          Manage messages submitted through the contact form.
        </p>
      </div>

      {/* Filters + search */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {(["all", "pending", "resolved"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-roboto transition-colors ${
                filter === f
                  ? "bg-accent-green text-black"
                  : "border border-border bg-card text-text-muted hover:text-text-primary"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, phone..."
            className="w-full rounded-full border border-border bg-card py-2 pl-9 pr-4 text-sm font-roboto outline-none focus-visible:border-accent-green/50 sm:w-72"
          />
        </div>
      </div>

      {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <LoaderCircle className="size-6 animate-spin text-accent-green" />
        </div>
      ) : messages.length === 0 ? (
        <div className="rounded-3xl border border-border bg-card p-10 text-center">
          <p className="font-headline-mozi text-lg font-semibold">No contact requests</p>
          <p className="mt-2 text-sm text-text-muted font-headline-sans">
            {filter === "all" ? "No messages submitted yet." : `No ${filter} messages.`}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className="rounded-3xl border border-border bg-card p-5 transition-colors hover:border-accent-green/30"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline-mozi text-base font-semibold truncate">{m.name}</h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-roboto ${
                        m.isResolved
                          ? "bg-accent-green/10 text-accent-green"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {m.isResolved ? "Resolved" : "Pending"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-roboto text-text-muted truncate">{m.subject}</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-text-muted font-roboto">
                    <span className="inline-flex items-center gap-1"><Mail className="size-3" />{m.email}</span>
                    {m.phone && <span className="inline-flex items-center gap-1"><Phone className="size-3" />{m.phone}</span>}
                    <span className="inline-flex items-center gap-1"><Calendar className="size-3" />{new Date(m.createdAt).toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => setSelected(m)}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-roboto hover:border-accent-green/50"
                  >
                    View
                  </button>
                  <button
                    onClick={() => toggleResolve(m)}
                    disabled={actionId === m.id}
                    className={`rounded-full px-3 py-1.5 text-xs font-roboto disabled:opacity-60 ${
                      m.isResolved
                        ? "border border-border hover:border-accent-green/50"
                        : "bg-accent-green text-black"
                    }`}
                  >
                    {actionId === m.id ? (
                      <LoaderCircle className="size-3 animate-spin" />
                    ) : m.isResolved ? (
                      <span className="inline-flex items-center gap-1"><RotateCcw className="size-3" />Reopen</span>
                    ) : (
                      <span className="inline-flex items-center gap-1"><CheckCircle2 className="size-3" />Resolve</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-2xl rounded-3xl border border-border bg-card p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-headline-mozi text-xl font-semibold">{selected.name}</h2>
                <p className="text-sm text-text-muted font-roboto">{selected.subject}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-full border border-border px-3 py-1 text-xs font-roboto"
              >
                Close
              </button>
            </div>
            <div className="mt-4 space-y-2 text-sm font-roboto text-text-muted">
              <p><span className="text-text-primary">Email:</span> {selected.email}</p>
              {selected.phone && <p><span className="text-text-primary">Phone:</span> {selected.phone}</p>}
              <p><span className="text-text-primary">Submitted:</span> {new Date(selected.createdAt).toLocaleString()}</p>
              <p><span className="text-text-primary">Status:</span> {selected.isResolved ? "Resolved" : "Pending"}</p>
              {selected.resolvedAt && <p><span className="text-text-primary">Resolved at:</span> {new Date(selected.resolvedAt).toLocaleString()}</p>}
            </div>
            <div className="mt-4 rounded-2xl border border-border bg-background p-4">
              <p className="whitespace-pre-wrap text-sm font-headline-sans leading-6 text-text-primary">{selected.message}</p>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => toggleResolve(selected)}
                disabled={actionId === selected.id}
                className={`rounded-full px-4 py-2 text-sm font-roboto disabled:opacity-60 ${
                  selected.isResolved ? "border border-border" : "bg-accent-green text-black"
                }`}
              >
                {selected.isResolved ? "Reopen" : "Resolve"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}