"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as Array<{ q: string; a: string }>;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full text-xs text-[#0B79D0] uppercase tracking-wider"
            style={{ border: "1px solid rgba(11,121,208,0.25)", background: "rgba(11,121,208,0.07)" }}
          >
            <HelpCircle className="w-3 h-3" />
            {t("badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold mb-4"
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

        {/* Accordion */}
        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl overflow-hidden"
                style={{
                  border: isOpen ? "1px solid rgba(11,121,208,0.4)" : "1px solid var(--bg-border)",
                  background: isOpen ? "rgba(11,121,208,0.04)" : "var(--bg-card)",
                  transition: "border-color 0.2s, background 0.2s",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className="text-sm font-semibold leading-snug"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-poppins)" }}
                  >
                    {item.q}
                  </span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{
                      background: isOpen ? "rgba(11,121,208,0.2)" : "var(--bg-base)",
                      border: `1px solid ${isOpen ? "rgba(11,121,208,0.4)" : "var(--bg-border)"}`,
                      color: isOpen ? "#0B79D0" : "var(--text-muted)",
                    }}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-5">
                        <div
                          className="h-px mb-4"
                          style={{ background: "rgba(11,121,208,0.15)" }}
                        />
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
