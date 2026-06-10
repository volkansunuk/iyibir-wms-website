"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Monitor, Smartphone, Check, Wifi, BatteryFull } from "lucide-react";

function WebMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-[#2A2A3A] bg-[#0A0A0F] shadow-2xl shadow-black/50">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#16161E] border-b border-[#2A2A3A]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E11D48]/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#D97706]/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A]/60" />
        </div>
        <div className="flex-1 mx-2 bg-[#0A0A0F] rounded px-2 py-0.5">
          <span className="text-xs text-[#50506A]">wms.iyibiryazilim.com.tr</span>
        </div>
      </div>

      {/* App content */}
      <div className="p-3 space-y-2.5">
        {/* Top nav */}
        <div className="flex items-center justify-between p-2 bg-[#16161E] rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#0B79D0]/30" />
            <div className="w-20 h-2 bg-[#2A2A3A] rounded" />
          </div>
          <div className="flex gap-1.5">
            <div className="w-16 h-2 bg-[#2A2A3A] rounded" />
            <div className="w-12 h-2 bg-[#0B79D0]/40 rounded" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-1.5">
          {["#4F46E5", "#16A34A", "#D97706", "#7C3AED"].map((c, i) => (
            <div key={i} className="p-2 rounded-lg" style={{ background: `${c}15`, border: `1px solid ${c}25` }}>
              <div className="w-full h-2 rounded mb-1" style={{ background: `${c}40` }} />
              <div className="w-2/3 h-1.5 bg-[#2A2A3A] rounded" />
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-lg border border-[#2A2A3A] overflow-hidden">
          <div className="flex gap-2 p-1.5 bg-[#16161E]">
            {[3, 2, 2, 2].map((w, i) => (
              <div key={i} className={`h-1.5 bg-[#35354A] rounded flex-${w === 3 ? 3 : w === 2 ? 2 : 1}`} style={{ flex: w }} />
            ))}
          </div>
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex gap-2 p-1.5 border-t border-[#1A1A25]">
              {[3, 2, 2, 2].map((w, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded"
                  style={{
                    flex: w,
                    background: i === 0 ? "#2A2A3A" : i === 3 ? `${["#4F46E5","#16A34A","#D97706"][row]}40` : "#1E1E2A",
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Chart placeholder */}
        <div className="h-14 rounded-lg border border-[#2A2A3A] bg-[#0A0A0F] p-2 flex items-end gap-1">
          {[40, 60, 45, 80, 55, 70, 90, 65].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: `${["#4F46E5","#2563EB","#7C3AED","#0891B2","#16A34A","#D97706","#E11D48","#0B79D0"][i]}60`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  const opColors = ["#4F46E5", "#2563EB", "#16A34A", "#D97706", "#7C3AED", "#0891B2"];
  const opNames = ["Mal Kabul", "Malzeme", "Sevkiyat", "Sayım", "Üretim", "Fason"];

  return (
    <div
      className="w-40 rounded-[28px] overflow-hidden border-[3px] border-[#2A2A3A] bg-[#0A0A0F] shadow-2xl shadow-black/60 flex-shrink-0"
      style={{ boxShadow: "0 0 40px rgba(11,121,208,0.2), 0 20px 60px rgba(0,0,0,0.5)" }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-3 pt-2 pb-1">
        <span className="text-[9px] text-[#9090B0]" style={{ fontFamily: "var(--font-jetbrains)" }}>9:41</span>
        <div className="flex items-center gap-1">
          <Wifi className="w-2.5 h-2.5 text-[#9090B0]" />
          <BatteryFull className="w-3 h-2.5 text-[#9090B0]" />
        </div>
      </div>

      {/* App header */}
      <div className="px-3 py-2 flex items-center gap-2 border-b border-[#1A1A25]">
        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#0B79D0] to-[#2563EB]" />
        <span className="text-[9px] font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>
          iyibir WMS
        </span>
      </div>

      {/* Operation grid */}
      <div className="p-2 grid grid-cols-2 gap-1.5">
        {opColors.map((color, i) => (
          <div
            key={i}
            className="p-2 rounded-lg flex flex-col gap-1"
            style={{ background: `${color}18`, border: `1px solid ${color}30` }}
          >
            <div className="w-4 h-4 rounded" style={{ background: `${color}40` }} />
            <span className="text-[8px] font-medium" style={{ color }}>{opNames[i]}</span>
          </div>
        ))}
      </div>

      {/* Barcode scanner preview */}
      <div className="mx-2 mb-3 rounded-lg bg-[#16161E] border border-[#2A2A3A] p-2">
        <div className="text-[7px] text-[#50506A] mb-1.5 flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
          Barkod Tarama
        </div>
        <div className="flex gap-0.5 justify-center">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="w-0.5 rounded-sm"
              style={{
                height: `${Math.round(8 + Math.sin(i * 0.8) * 4)}px`,
                background: i % 3 === 0 ? "#9090B0" : "#2A2A3A",
              }}
            />
          ))}
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-10 h-1 rounded-full bg-[#2A2A3A]" />
      </div>
    </div>
  );
}

export default function DeviceMockups() {
  const t = useTranslations("mockups");
  const features: string[] = t.raw("features") as string[];

  return (
    <section id="mockups" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full text-xs text-[#67E8F9] uppercase tracking-wider"
            style={{ border: "1px solid rgba(8,145,178,0.3)", background: "rgba(8,145,178,0.1)" }}
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Web mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-5 h-5 text-[#28A8F4]" />
              <div>
                <div className="text-sm font-semibold" style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}>
                  {t("web_title")}
                </div>
                <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{t("web_desc")}</div>
              </div>
            </div>
            <WebMockup />
          </motion.div>

          {/* Mobile mockup + features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-8"
          >
            <MobileMockup />

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-5 h-5 text-[#38BDF8]" />
                <div>
                  <div className="text-sm font-semibold" style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}>
                    {t("mobile_title")}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{t("mobile_desc")}</div>
                </div>
              </div>
              <ul className="space-y-3">
                {features.map((f: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2.5 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Check className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
