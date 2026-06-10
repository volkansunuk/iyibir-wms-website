"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useInView } from "framer-motion";

function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplay(String(v)));
    return () => { controls.stop(); unsubscribe(); };
  }, [inView, count, rounded, target]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

export default function StatsBar() {
  const t = useTranslations("stats");

  const stats = [
    { value: 53, suffix: "", label: t("customers"), color: "#0B79D0" },
    { value: 1000, suffix: "+", label: t("daily_ops"), color: "#2563EB" },
    { value: 18, suffix: "+", label: t("op_types"), color: "#16A34A" },
    { value: 6, suffix: "", label: t("ai_agents"), color: "#0B79D0" },
    { value: 99, suffix: ".9%", label: t("uptime"), color: "#0891B2" },
    { value: 8, suffix: "+", label: t("cargo"), color: "#D97706" },
  ];

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--bg-border)",
        borderBottom: "1px solid var(--bg-border)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B79D0]/5 via-transparent to-[#2563EB]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          {t("title")}
        </motion.p>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px"
          style={{ background: "var(--bg-border)" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 flex flex-col items-center text-center group transition-colors"
              style={{ background: "var(--bg-surface)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-surface)")}
            >
              <div
                className="text-3xl lg:text-4xl font-bold tabular-nums mb-2"
                style={{ fontFamily: "var(--font-jetbrains)", color: stat.color }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs leading-tight transition-colors" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
