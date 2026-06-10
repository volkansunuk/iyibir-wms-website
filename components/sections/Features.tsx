"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { PackageCheck, Boxes, Truck, ClipboardList, Factory, Scissors, ShoppingCart, Check } from "lucide-react";

const CATEGORIES = [
  { key: "mal_kabul", color: "#4F46E5", bg: "rgba(79,70,229,0.08)", border: "rgba(79,70,229,0.2)", Icon: PackageCheck },
  { key: "malzeme", color: "#2563EB", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)", Icon: Boxes },
  { key: "sevkiyat", color: "#16A34A", bg: "rgba(22,163,74,0.08)", border: "rgba(22,163,74,0.2)", Icon: Truck },
  { key: "sayim", color: "#D97706", bg: "rgba(217,119,6,0.08)", border: "rgba(217,119,6,0.2)", Icon: ClipboardList },
  { key: "uretim", color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)", Icon: Factory },
  { key: "fason", color: "#0891B2", bg: "rgba(8,145,178,0.08)", border: "rgba(8,145,178,0.2)", Icon: Scissors },
  { key: "talep", color: "#E11D48", bg: "rgba(225,29,72,0.08)", border: "rgba(225,29,72,0.2)", Icon: ShoppingCart },
];

export default function Features() {
  const t = useTranslations("features");
  const locale = useLocale();

  return (
    <section id="features" className="py-24 relative" style={{ background: "var(--bg-base)" }}>
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(11,121,208,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,121,208,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.Icon;
            const name = t(`categories.${cat.key}.name`);
            const desc = t(`categories.${cat.key}.desc`);
            const ops: string[] = t.raw(`categories.${cat.key}.ops`) as string[];

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl p-6 cursor-default overflow-hidden"
                style={{ background: cat.bg, border: `1px solid ${cat.border}` }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
                >
                  <Icon className="w-5 h-5" style={{ color: cat.color }} />
                </div>

                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}
                >
                  {name}
                </h3>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  {desc}
                </p>

                <ul className="space-y-1.5">
                  {ops.map((op) => (
                    <li key={op} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: cat.color }} />
                      <span>{op}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10 rounded-tl-3xl" style={{ background: cat.color }} />
              </motion.div>
            );
          })}

          {/* "And more" card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: CATEGORIES.length * 0.07 }}
            className="rounded-2xl p-6 border-dashed flex flex-col items-center justify-center text-center gap-3"
            style={{ border: "1px dashed var(--bg-border)" }}
          >
            <div className="text-3xl font-extrabold gradient-text" style={{ fontFamily: "var(--font-jetbrains)" }}>
              18+
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {locale === "tr"
                ? "Toplam operasyon tipi ve sürekli büyüyen özellik seti"
                : "Total operation types and continuously growing feature set"}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
