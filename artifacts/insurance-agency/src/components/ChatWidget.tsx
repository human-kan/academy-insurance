import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! 👋 I'm the Academy Insurance assistant. Ask me anything about our coverage options, Florida insurance requirements, or how to get a free quote!",
    },
  ]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || streaming) return;

    const userMessage: Message = { role: "user", content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setStreaming(true);

    const assistantPlaceholder: Message = { role: "assistant", content: "" };
    setMessages([...newMessages, assistantPlaceholder]);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response body");

      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const raw = line.slice(6).trim();
          if (!raw) continue;

          try {
            const parsed = JSON.parse(raw);
            if (parsed.content) {
              accumulated += parsed.content;
              setMessages((prev) => {
                const next = [...prev];
                next[next.length - 1] = { role: "assistant", content: accumulated };
                return next;
              });
            }
          } catch {
            // ignore parse errors
          }
        }
      }
    } catch {
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please call us at (727) 343-0419 or email accountadvisor@academyagents.com.",
        };
        return next;
      });
    } finally {
      setStreaming(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[360px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
            style={{ maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="bg-secondary/30 p-1.5 rounded-full">
                  <Bot className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-none">Academy Assistant</p>
                  <p className="text-white/60 text-xs mt-0.5">Ask me anything about insurance</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0" style={{ maxHeight: "340px" }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`shrink-0 h-7 w-7 rounded-full flex items-center justify-center mt-0.5 ${
                      msg.role === "assistant"
                        ? "bg-primary text-secondary"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot className="h-4 w-4" />
                    ) : (
                      <User className="h-3.5 w-3.5" />
                    )}
                  </div>
                  <div
                    className={`max-w-[78%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "assistant"
                        ? "bg-muted text-foreground rounded-tl-sm"
                        : "bg-primary text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.content === "" && streaming ? (
                      <span className="inline-flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:0ms]" />
                        <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:150ms]" />
                        <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:300ms]" />
                      </span>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-3 flex gap-2 items-end shrink-0">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message…"
                rows={1}
                disabled={streaming}
                className="flex-1 resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm leading-relaxed focus:outline-none focus:ring-1 focus:ring-primary/50 disabled:opacity-50 max-h-24 overflow-y-auto"
                style={{ minHeight: "40px" }}
                data-testid="chat-input"
              />
              <Button
                size="sm"
                onClick={sendMessage}
                disabled={!input.trim() || streaming}
                className="h-10 w-10 p-0 bg-primary hover:bg-primary/90 shrink-0"
                aria-label="Send message"
                data-testid="chat-send"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-14 rounded-full bg-secondary text-primary shadow-xl hover:shadow-2xl flex items-center justify-center transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open live chat"
        data-testid="chat-toggle"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {!open && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute bottom-16 right-0 bg-white rounded-xl shadow-lg border px-3 py-2 text-xs font-medium text-primary whitespace-nowrap pointer-events-none"
        >
          Chat with us! 💬
        </motion.div>
      )}
    </div>
  );
}
