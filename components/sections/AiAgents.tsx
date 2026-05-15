"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Bot, Boxes, ShoppingBag, ShoppingCart, Factory, TrendingUp, ClipboardList, Scissors, Cpu, MessageSquare, User } from "lucide-react";

const AGENT_ICONS = {
  inventory: Boxes,
  sales: ShoppingBag,
  purchase: ShoppingCart,
  production: Factory,
  demand: TrendingUp,
  counting: ClipboardList,
  outsource: Scissors,
};

const AGENT_COLORS = ["#4F46E5", "#16A34A", "#2563EB", "#7C3AED", "#E11D48", "#D97706", "#0891B2"];

export default function AiAgents() {
  const t = useTranslations("ai");

  const agents = Object.entries(AGENT_ICONS).map(([key, Icon], i) => ({
    key, Icon, color: AGENT_COLORS[i],
    name: t(`agents.${key}.name`),
    desc: t(`agents.${key}.desc`),
  }));

  return (
    <section id="ai" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full text-xs text-[#C084FC] uppercase tracking-wider"
            style={{ border: "1px solid rgba(124,58,237,0.25)", background: "rgba(124,58,237,0.08)" }}
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
          {/* Agents grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {agents.map((agent, i) => {
              const Icon = agent.Icon;
              return (
                <motion.div
                  key={agent.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-xl transition-colors group"
                  style={{
                    border: "1px solid var(--bg-border)",
                    background: "var(--bg-card)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${agent.color}15`, border: `1px solid ${agent.color}35` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: agent.color }} />
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}
                    >
                      {agent.name}
                    </div>
                    <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {agent.desc}
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
              style={{ border: "1px solid rgba(124,58,237,0.25)", background: "rgba(124,58,237,0.08)" }}
            >
              <Cpu className="w-5 h-5 text-[#C084FC] flex-shrink-0" />
              <p className="text-sm text-[#C084FC]">{t("protocol")}</p>
            </div>

            {/* Chat window */}
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
                  iyibir AI Agent
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
                    <div className="bg-[#512BD4] text-white text-xs p-3 rounded-2xl rounded-br-sm leading-relaxed">
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
                      style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
                    >
                      <Bot className="w-3.5 h-3.5 text-[#C084FC]" />
                    </div>
                    <div
                      className="text-xs p-3 rounded-2xl rounded-bl-sm leading-relaxed"
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
                    style={{ background: "rgba(124,58,237,0.2)" }}
                  >
                    <MessageSquare className="w-3 h-3 text-[#C084FC]" />
                  </div>
                  <div className="flex gap-1">
                    {[0, 0.2, 0.4].map((d) => (
                      <motion.div
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"
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
