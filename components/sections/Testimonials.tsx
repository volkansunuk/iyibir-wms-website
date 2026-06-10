"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Array<{ company: string; sector: string; text: string; author: string; role: string }>;

  const SECTOR_COLORS: Record<string, string> = {
    "Tekstil Sektörü": "#4F46E5",
    "Textile Industry": "#4F46E5",
    "3PL Lojistik": "#16A34A",
    "3PL Logistics": "#16A34A",
    "Otomotiv Yan Sanayi": "#D97706",
    "Automotive Supply": "#D97706",
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(11,121,208,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full text-xs text-[#0B79D0] uppercase tracking-wider"
            style={{ border: "1px solid rgba(11,121,208,0.25)", background: "rgba(11,121,208,0.07)" }}
          >
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

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const accentColor = SECTOR_COLORS[item.sector] ?? "#0B79D0";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative rounded-2xl p-6 transition-colors group overflow-hidden flex flex-col"
                style={{
                  border: "1px solid var(--bg-border)",
                  background: "var(--bg-card)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
                  style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
                />

                <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: accentColor }} />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                  ))}
                </div>

                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--text-secondary)" }}>
                  &ldquo;{item.text}&rdquo;
                </p>

                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid var(--bg-border)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: `${accentColor}30`, border: `1px solid ${accentColor}40` }}
                  >
                    {item.author.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{item.author}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {item.role} · {item.company}
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-4 right-4 text-[10px] px-2 py-0.5 rounded-full"
                  style={{ background: `${accentColor}12`, color: accentColor, border: `1px solid ${accentColor}25` }}
                >
                  {item.sector}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
