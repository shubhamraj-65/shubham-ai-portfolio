"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };
const suggestions = ["What skills does Shubham have?", "Tell me about the Digital Payment project", "Which projects use Python?", "How can I contact Shubham?"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I'm Shubham AI. Ask me anything about Shubham's skills, projects, experience or education." },
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, open, loading]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function send(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages(next); setInput(""); setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply ?? "Something went wrong. Please try again." }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "I couldn't reach the server. Please try again." }]);
    } finally { setLoading(false); }
  }

  return (
    <>
      {open && (
        <section role="dialog" aria-label="Shubham AI chat"
          className="fixed inset-x-3 bottom-24 top-20 z-50 flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl sm:inset-x-auto sm:right-6 sm:top-auto sm:h-[560px] sm:w-[380px]">
          <header className="flex items-center justify-between border-b border-line px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-signal"><Sparkles size={18} /></span>
              <div><p className="font-display font-semibold leading-tight">Shubham AI</p><p className="text-xs text-muted">AI Portfolio Assistant</p></div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-2 text-muted hover:text-paper"><X size={18} /></button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : ""}`}>
                <p className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm ${m.role === "user" ? "bg-signal text-white" : "bg-surface-2 text-paper"}`}>{m.content}</p>
              </div>
            ))}
            {loading && <p className="text-sm text-muted">Thinking…</p>}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((s) => <button key={s} onClick={() => send(s)} className="rounded-full border border-line px-3 py-1.5 text-left text-xs text-muted hover:border-signal hover:text-paper">{s}</button>)}
              </div>
            )}
            <div ref={endRef} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 border-t border-line p-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about Shubham…" aria-label="Your question"
              className="min-w-0 flex-1 rounded-full border border-line bg-ink px-4 py-2 text-sm text-paper placeholder:text-muted" />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send" className="grid h-10 w-10 place-items-center rounded-full bg-signal disabled:opacity-40"><Send size={16} /></button>
          </form>
        </section>
      )}
      <button onClick={() => setOpen(!open)} aria-label={open ? "Close AI assistant" : "Open AI assistant"} aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-signal shadow-[0_0_30px_rgba(224,20,44,.45)] transition hover:scale-105">
        {open ? <X /> : <MessageCircle />}
      </button>
    </>
  );
}
