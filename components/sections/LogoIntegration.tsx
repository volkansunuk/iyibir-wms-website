"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Link2, ShieldCheck, Zap } from "lucide-react";

export default function LogoIntegration() {
  const t = useTranslations("logo");
  const features: string[] = t.raw("features") as string[];

  return (
    <section id="integration" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(37,99,235,0.06) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className="rounded-3xl overflow-hidden"
          style={{ border: "1px solid rgba(37,99,235,0.15)", background: "var(--bg-surface)" }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 lg:p-14 flex flex-col justify-center items-center"
              style={{
                background: "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, transparent 100%)",
                borderBottom: "1px solid var(--bg-border)",
              }}
            >
              {/* Integration diagram */}
              <div className="relative flex items-center justify-center gap-6 w-full max-w-xs">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.25)" }}
                  >
                    <span className="text-xl font-black text-[#60A5FA]" style={{ fontFamily: "var(--font-poppins)" }}>LT</span>
                  </div>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>Logo Tiger</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <motion.div animate={{ x: [-4, 4, -4] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    <Link2 className="w-6 h-6 text-[#2563EB]" />
                  </motion.div>
                  <div className="relative w-16 h-2 overflow-hidden">
                    {[0, 0.5, 1].map((delay) => (
                      <motion.div
                        key={delay}
                        className="absolute top-0 w-2 h-2 rounded-full bg-[#2563EB]"
                        animate={{ x: [0, 56, 0] }}
                        transition={{ duration: 2, delay, repeat: Infinity, ease: "easeInOut" }}
                        style={{ left: 0 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: "rgba(81,43,212,0.1)", border: "1px solid rgba(81,43,212,0.25)" }}
                  >
                    <span className="text-sm font-black text-[#A78BFA] text-center leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>WMS</span>
                  </div>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>iyibir WMS</span>
                </div>
              </div>

              <div
                className="mt-8 flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ border: "1px solid rgba(22,163,74,0.25)", background: "rgba(22,163,74,0.08)" }}
              >
                <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
                <span className="text-xs text-[#4ADE80]">{t("note")}</span>
              </div>

              <div className="mt-6 flex gap-8">
                {[
                  { val: "0ms", label: "Sync Latency" },
                  { val: "RT", label: "Real-Time" },
                  { val: "R/O", label: "Read-Only" },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-bold text-[#60A5FA] tabular-nums" style={{ fontFamily: "var(--font-jetbrains)" }}>
                      {val}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</div>
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
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full text-xs text-[#93C5FD] uppercase tracking-wider w-fit"
                style={{ border: "1px solid rgba(37,99,235,0.25)", background: "rgba(37,99,235,0.08)" }}
              >
                <Zap className="w-3 h-3" />
                {t("badge")}
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

              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)" }}
                    >
                      <Check className="w-3 h-3 text-[#60A5FA]" />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{feature}</span>
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
