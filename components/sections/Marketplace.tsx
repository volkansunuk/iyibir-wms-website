"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Package, ShoppingCart, Clock } from "lucide-react";

const PLATFORMS = [
  { name: "Trendyol", short: "TY", color: "#F27A1A" },
  { name: "Hepsiburada", short: "HB", color: "#FF6000" },
  { name: "n11", short: "n11", color: "#6F42C1" },
  { name: "Amazon TR", short: "AMZ", color: "#FF9900" },
];

type Feature = { name: string; desc: string };

export default function Marketplace() {
  const t = useTranslations("marketplace");
  const features = t.raw("features") as Feature[];

  return (
    <section id="marketplace" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(242,122,26,0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className="rounded-3xl overflow-hidden"
          style={{ border: "1px solid rgba(242,122,26,0.15)", background: "var(--bg-surface)" }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 lg:p-14 flex flex-col justify-center items-center gap-8"
              style={{
                background: "linear-gradient(135deg, rgba(242,122,26,0.05) 0%, transparent 100%)",
                borderBottom: "1px solid var(--bg-border)",
              }}
            >
              {/* Platform → WMS flow */}
              <div className="w-full max-w-xs flex flex-col gap-3">
                {PLATFORMS.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-black"
                      style={{
                        background: `${p.color}18`,
                        border: `1px solid ${p.color}35`,
                        color: p.color,
                        fontFamily: "var(--font-poppins)",
                      }}
                    >
                      {p.short}
                    </div>
                    <div className="flex-1 relative h-2 overflow-hidden">
                      {[0, 0.4, 0.8].map((delay) => (
                        <motion.div
                          key={delay}
                          className="absolute top-0 w-2 h-2 rounded-full"
                          style={{ background: p.color, left: 0 }}
                          initial={{ opacity: 0, x: 0 }}
                          animate={{ x: [0, 140, 0], opacity: [0, 1, 0] }}
                          transition={{ duration: 2.4, delay: delay + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                        />
                      ))}
                      <div
                        className="absolute inset-y-0 left-0 right-0 top-[3px] h-px opacity-20"
                        style={{ background: p.color }}
                      />
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg flex-shrink-0"
                      style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.25)" }}
                    >
                      <Package className="w-3.5 h-3.5 text-[#60A5FA]" />
                      <span className="text-xs text-[#60A5FA] font-medium" style={{ fontFamily: "var(--font-poppins)" }}>
                        WMS
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-6">
                {[
                  { val: t("stat_1"), label: t("stat_1_label") },
                  { val: t("stat_2"), label: t("stat_2_label") },
                  { val: t("stat_3"), label: t("stat_3_label") },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <div
                      className="text-2xl font-bold text-[#F59E0B] tabular-nums"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {val}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 lg:p-14 flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-[#FB923C] uppercase tracking-wider w-fit"
                  style={{ border: "1px solid rgba(242,122,26,0.3)", background: "rgba(242,122,26,0.08)" }}
                >
                  <ShoppingCart className="w-3 h-3" />
                  {t("badge")}
                </div>
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium"
                  style={{ background: "rgba(245,158,11,0.12)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.25)" }}
                >
                  <Clock className="w-3 h-3" />
                  {t("coming_soon")}
                </div>
              </div>

              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight"
                style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}
              >
                {t("title")}
              </h2>

              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                {t("subtitle")}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ border: "1px solid var(--bg-border)", background: "var(--bg-card)" }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(242,122,26,0.15)", border: "1px solid rgba(242,122,26,0.3)" }}
                    >
                      <Check className="w-3 h-3 text-[#FB923C]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}>
                        {feature.name}
                      </div>
                      <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {feature.desc}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
