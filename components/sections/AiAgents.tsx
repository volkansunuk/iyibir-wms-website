"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Bot, FileSearch2, Wand2, MessageCircle, ShoppingBag, BarChart3, Mic, Cpu, User } from "lucide-react";

const CAPABILITY_ICONS: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  document: FileSearch2,
  demand: Wand2,
  query: MessageCircle,
  sales: ShoppingBag,
  analysis: BarChart3,
  voice: Mic,
};

const CAPABILITY_COLORS: Record<string, string> = {
  document: "#2563EB",
  demand: "#7C3AED",
  query: "#16A34A",
  sales: "#D97706",
  analysis: "#0891B2",
  voice: "#6B7280",
};

type Capability = {
  key: string;
  area: string;
  name: string;
  desc: string;
};

export default function AiAgents() {
  const t = useTranslations("ai");
  const capabilities = t.raw("capabilities") as Capability[];

  return (
    <section id="ai" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #0B79D0 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full text-xs text-[#38BDF8] uppercase tracking-wider"
            style={{ border: "1px solid rgba(11,121,208,0.25)", background: "rgba(11,121,208,0.08)" }}
          >
            <Cpu className="w-3 h-3" />
            {t("badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Capability cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map((cap, i) => {
              const Icon = CAPABILITY_ICONS[cap.key] ?? Cpu;
              const color = CAPABILITY_COLORS[cap.key] ?? "#6B7280";
              const isVoice = cap.key === "voice";

              return (
                <motion.div
                  key={cap.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="relative flex flex-col gap-3 p-4 rounded-xl"
                  style={{
                    border: `1px solid ${isVoice ? "var(--bg-border)" : `${color}28`}`,
                    background: isVoice ? "transparent" : `${color}07`,
                    opacity: isVoice ? 0.6 : 1,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: isVoice ? "rgba(107,114,128,0.12)" : `${color}15`,
                        color: isVoice ? "#9CA3AF" : color,
                      }}
                    >
                      {cap.area}
                    </span>
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}
                    >
                      {cap.name}
                    </div>
                    <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {cap.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Chat demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div
              className="p-4 rounded-xl flex items-center gap-3"
              style={{ border: "1px solid rgba(11,121,208,0.25)", background: "rgba(11,121,208,0.08)" }}
            >
              <Cpu className="w-5 h-5 text-[#38BDF8] flex-shrink-0" />
              <p className="text-sm text-[#38BDF8]">{t("protocol")}</p>
            </div>

            <div
              className="flex-1 rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--bg-border)", background: "var(--bg-base)" }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: "1px solid var(--bg-border)", background: "var(--bg-card)" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#E11D48]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#D97706]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#16A34A]/60" />
                </div>
                <span className="text-xs ml-2 flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                  <Bot className="w-3.5 h-3.5" />
                  iyibir AI
                </span>
              </div>

              <div className="p-4 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-end"
                >
                  <div className="flex items-end gap-2 max-w-[85%]">
                    <div className="bg-[#0B79D0] text-white text-xs p-3 rounded-2xl rounded-br-sm leading-relaxed">
                      {t("chat_example.user")}
                    </div>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--bg-border)" }}
                    >
                      <User className="w-3.5 h-3.5" style={{ color: "var(--text-secondary)" }} />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-start"
                >
                  <div className="flex items-end gap-2 max-w-[90%]">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(11,121,208,0.2)", border: "1px solid rgba(11,121,208,0.3)" }}
                    >
                      <Bot className="w-3.5 h-3.5 text-[#38BDF8]" />
                    </div>
                    <div
                      className="text-xs p-3 rounded-2xl rounded-bl-sm leading-relaxed whitespace-pre-line"
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--bg-border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {t("chat_example.agent")}
                    </div>
                  </div>
                </motion.div>

                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(11,121,208,0.2)" }}
                  >
                    <Bot className="w-3 h-3 text-[#38BDF8]" />
                  </div>
                  <div className="flex gap-1">
                    {[0, 0.2, 0.4].map((d) => (
                      <motion.div
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-[#0B79D0]"
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, delay: d, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
