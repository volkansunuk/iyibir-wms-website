"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Check, Link2, ShieldCheck, Zap, Truck, FileCheck, type LucideIcon } from "lucide-react";

type Slide = {
  key: string;
  short: string;
  name: string;
  color: string;
  accent: string;
  Icon: LucideIcon;
  logoSrc?: string;
};

const SLIDES: Slide[] = [
  { key: "logo",    short: "LT", name: "Logo Tiger", color: "#2563EB", accent: "#28A8F4", Icon: Zap, logoSrc: "/integrations/logo-tiger.png" },
  { key: "geliver", short: "G",  name: "Geliver.io", color: "#0891B2", accent: "#38BDF8", Icon: Truck },
  { key: "uetds",   short: "U",  name: "UETDS",      color: "#16A34A", accent: "#4ADE80", Icon: FileCheck },
];

const ROTATE_MS = 6000;

export default function LogoIntegration() {
  const t = useTranslations();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), ROTATE_MS);
    return () => clearTimeout(id);
  }, [index, paused]);

  const slide = SLIDES[index];
  const features = t.raw(`${slide.key}.features`) as string[];

  return (
    <section id="integration" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-700"
        style={{ background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${slide.color}0F 0%, transparent 60%)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Integration tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {SLIDES.map((s, i) => {
            const active = i === index;
            return (
              <button
                key={s.key}
                onClick={() => setIndex(i)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  border: `1px solid ${active ? s.color : "var(--bg-border)"}`,
                  background: active ? `${s.color}14` : "var(--bg-card)",
                  color: active ? s.accent : "var(--text-secondary)",
                }}
              >
                {s.logoSrc ? (
                  <img src={s.logoSrc} alt={s.name} className="h-4 w-auto object-contain" />
                ) : (
                  <s.Icon className="w-3.5 h-3.5" />
                )}
                {s.name}
              </button>
            );
          })}
        </div>

        <div
          className="rounded-3xl overflow-hidden transition-colors duration-700"
          style={{ border: `1px solid ${slide.color}26`, background: "var(--bg-surface)" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-0"
            >
              {/* Left: visual */}
              <div
                className="p-10 lg:p-14 flex flex-col justify-center items-center"
                style={{
                  background: `linear-gradient(135deg, ${slide.color}10 0%, transparent 100%)`,
                  borderBottom: "1px solid var(--bg-border)",
                }}
              >
                <div className="relative flex items-center justify-center gap-6 w-full max-w-xs">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden"
                      style={{ background: slide.logoSrc ? "#FFFFFF" : `${slide.color}1A`, border: `1px solid ${slide.color}40` }}
                    >
                      {slide.logoSrc ? (
                        <img src={slide.logoSrc} alt={slide.name} className="w-10 h-10 object-contain" />
                      ) : (
                        <span className="text-lg font-black" style={{ fontFamily: "var(--font-poppins)", color: slide.accent }}>
                          {slide.short}
                        </span>
                      )}
                    </div>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{slide.name}</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <motion.div animate={{ x: [-4, 4, -4] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                      <Link2 className="w-6 h-6" style={{ color: slide.color }} />
                    </motion.div>
                    <div className="relative w-16 h-2 overflow-hidden">
                      {[0, 0.5, 1].map((delay) => (
                        <motion.div
                          key={delay}
                          className="absolute top-0 w-2 h-2 rounded-full"
                          style={{ left: 0, background: slide.color }}
                          animate={{ x: [0, 56, 0] }}
                          transition={{ duration: 2, delay, repeat: Infinity, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: "rgba(11,121,208,0.1)", border: "1px solid rgba(11,121,208,0.25)" }}
                    >
                      <span className="text-sm font-black text-[#38BDF8] text-center leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>WMS</span>
                    </div>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>iyibir WMS</span>
                  </div>
                </div>

                <div
                  className="mt-8 flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ border: "1px solid rgba(22,163,74,0.25)", background: "rgba(22,163,74,0.08)" }}
                >
                  <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
                  <span className="text-xs text-[#4ADE80]">{t(`${slide.key}.note`)}</span>
                </div>
              </div>

              {/* Right: content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full text-xs uppercase tracking-wider w-fit"
                  style={{ border: `1px solid ${slide.color}40`, background: `${slide.color}14`, color: slide.accent }}
                >
                  <slide.Icon className="w-3 h-3" />
                  {t(`${slide.key}.badge`)}
                </div>

                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}
                >
                  {t(`${slide.key}.title`)}
                </h2>

                <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                  {t(`${slide.key}.subtitle`)}
                </p>

                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${slide.color}26`, border: `1px solid ${slide.color}4D` }}
                      >
                        <Check className="w-3 h-3" style={{ color: slide.accent }} />
                      </div>
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {SLIDES.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setIndex(i)}
              aria-label={s.name}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === index ? 24 : 8,
                background: i === index ? slide.color : "var(--bg-border)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
