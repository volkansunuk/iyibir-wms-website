"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Sparkles, Wifi, BatteryFull, Package, Brain, Truck, ScanLine, type LucideIcon } from "lucide-react";

const OP_COLORS = ["#4F46E5", "#2563EB", "#16A34A", "#D97706", "#7C3AED", "#0891B2", "#E11D48"];

const OP_GRID = [
  { color: "#4F46E5", name: "Mal Kabul" },
  { color: "#2563EB", name: "Malzeme" },
  { color: "#16A34A", name: "Sevkiyat" },
  { color: "#D97706", name: "Sayım" },
  { color: "#7C3AED", name: "Üretim" },
  { color: "#0891B2", name: "Fason" },
];

const DOTS = [
  { id: 0, color: "#4F46E5", startX: 1, startY: 6 },
  { id: 1, color: "#2563EB", startX: 5, startY: 2 },
  { id: 2, color: "#16A34A", startX: 7, startY: 1 },
  { id: 3, color: "#D97706", startX: 0, startY: 1 },
  { id: 4, color: "#7C3AED", startX: 1, startY: 3 },
  { id: 5, color: "#0891B2", startX: 3, startY: 2 },
];

function WarehouseGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0B79D0" strokeWidth="1" />
          </pattern>
          <radialGradient id="grid-fade" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#grid-mask)" />
      </svg>
      {DOTS.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{ background: dot.color, boxShadow: `0 0 12px ${dot.color}80`, left: `${(dot.startX / 12) * 100}%`, top: `${(dot.startY / 8) * 100}%` }}
          animate={{ x: [0, 120, 60, 180, 0], y: [0, 60, 120, 60, 0], opacity: [0, 0.9, 0.9, 0.9, 0], scale: [0, 1, 1, 1, 0] }}
          transition={{ duration: 8 + dot.id * 1.5, repeat: Infinity, delay: dot.id * 1.2, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function TooltipCard({ icon: Icon, color, label, value, sub, delay }: {
  icon: LucideIcon; color: string; label: string; value: string; sub: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.78, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ delay: delay + 0.6, duration: 3.5 + delay * 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-start gap-3 px-3.5 py-3 rounded-2xl w-[180px]"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--bg-border)",
          boxShadow: `0 12px 32px rgba(0,0,0,0.14), 0 0 0 1px ${color}15, 0 0 20px ${color}10`,
        }}
      >
        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}18`, border: `1px solid ${color}28` }}>
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[12px] font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-poppins)" }}>{label}</span>
            <motion.span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: color, boxShadow: `0 0 6px ${color}` }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </div>
          <div className="text-[12px] font-bold leading-tight" style={{ color }}>{value}</div>
          <div className="text-[10px] mt-0.5 leading-tight" style={{ color: "var(--text-muted)" }}>{sub}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeroPhone() {
  return (
    <div
      style={{
        width: "252px",
        borderRadius: "44px",
        overflow: "hidden",
        background: "var(--bg-card)",
        border: "2.5px solid var(--bg-border)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 120px rgba(11,121,208,0.35), 0 0 60px rgba(37,99,235,0.15), 0 40px 100px rgba(0,0,0,0.3)",
        transform: "perspective(1200px) rotateY(-5deg) rotateX(1deg)",
      }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2" style={{ background: "var(--bg-card)" }}>
        <span className="text-[11px] font-medium tabular-nums" style={{ color: "var(--text-muted)", fontFamily: "var(--font-jetbrains)" }}>9:41</span>
        <div className="w-14 h-4 rounded-full" style={{ background: "var(--bg-base)", border: "1px solid var(--bg-border)" }} />
        <div className="flex items-center gap-1">
          <Wifi className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
          <BatteryFull className="w-3.5 h-3" style={{ color: "var(--text-muted)" }} />
        </div>
      </div>

      {/* App header */}
      <div className="px-4 py-3 flex items-center justify-between" style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--bg-border)" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#0B79D0] to-[#2563EB] flex items-center justify-center" style={{ boxShadow: "0 4px 12px rgba(11,121,208,0.5)" }}>
            <span className="text-[9px] font-black text-white">W</span>
          </div>
          <span className="text-[13px] font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-poppins)" }}>iyibir WMS</span>
        </div>
        <div className="w-6 h-6 rounded-lg flex flex-col items-center justify-center gap-[3px]" style={{ background: "var(--bg-card)", border: "1px solid var(--bg-border)" }}>
          <div className="w-3 h-[1.5px] rounded-full" style={{ background: "var(--text-muted)" }} />
          <div className="w-3 h-[1.5px] rounded-full" style={{ background: "var(--text-muted)" }} />
        </div>
      </div>

      {/* Operation grid */}
      <div className="p-3 grid grid-cols-2 gap-2" style={{ background: "var(--bg-base)" }}>
        {OP_GRID.map((op, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.35, ease: "backOut" }}
            className="p-3 rounded-2xl flex flex-col gap-2"
            style={{ background: `${op.color}12`, border: `1px solid ${op.color}25` }}
          >
            <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: `${op.color}28` }}>
              <div className="w-3 h-3 rounded-md" style={{ background: op.color }} />
            </div>
            <span className="text-[10px] font-semibold leading-tight" style={{ color: op.color, fontFamily: "var(--font-poppins)" }}>{op.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Barcode section */}
      <div className="mx-3 mb-1 rounded-2xl p-3" style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}>
        <div className="flex items-center gap-2 mb-2.5">
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background: "#16A34A" }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
          <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>Barkod Tarama</span>
        </div>
        <div className="flex gap-[2px] justify-center items-end" style={{ height: "30px" }}>
          {Array.from({ length: 28 }, (_, i) => (
            <div key={i} style={{ width: "2px", height: `${45 + Math.sin(i * 0.72) * 42}%`, borderRadius: "1px", background: i % 3 === 0 ? "var(--text-muted)" : "var(--bg-border)" }} />
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="px-3 pt-2 pb-2 flex items-center justify-around" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}>
        {["#0B79D0", "#6B7280", "#6B7280", "#6B7280"].map((c, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-5 h-5 rounded-lg" style={{ background: i === 0 ? `${c}25` : "var(--bg-border)" }}>
              <div className="w-full h-full rounded-lg flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-sm" style={{ background: i === 0 ? c : "var(--text-muted)", opacity: i === 0 ? 1 : 0.4 }} />
              </div>
            </div>
            {i === 0 && <div className="w-1 h-1 rounded-full" style={{ background: c }} />}
          </div>
        ))}
      </div>

      {/* Home indicator */}
      <div className="flex justify-center py-2.5" style={{ background: "var(--bg-base)" }}>
        <div className="w-14 h-1 rounded-full" style={{ background: "var(--bg-border)" }} />
      </div>

      {/* Screen gloss */}
      <div className="absolute inset-0 pointer-events-none" style={{ borderRadius: "44px", background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 55%)" }} />
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const stats = [
    { value: "50+", label: t("stat_customers") },
    { value: "99.9%", label: t("stat_uptime") },
    { value: "18+", label: t("stat_operations") },
    { value: "6", label: t("stat_agents") },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "var(--bg-base)" }}>
      <WarehouseGrid />

      <div className="absolute top-1/3 right-1/4 w-[800px] h-[600px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #0B79D0 0%, #2563EB 45%, transparent 70%)", filter: "blur(90px)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #0891B2 0%, transparent 70%)", filter: "blur(70px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid items-center gap-12 lg:gap-6" style={{ gridTemplateColumns: "1.1fr 1fr" }}>

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full text-sm text-[#0B79D0]"
              style={{ border: "1px solid rgba(11,121,208,0.35)", background: "rgba(11,121,208,0.08)" }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 leading-none tracking-tight" style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span className="block text-5xl sm:text-6xl lg:text-5xl xl:text-[3.75rem] font-extrabold" style={{ color: "var(--text-primary)" }}>{t("title_1")}</span>
              <span className="block text-5xl sm:text-6xl lg:text-5xl xl:text-[3.75rem] font-extrabold"
                style={{ background: "linear-gradient(135deg, #38BDF8 0%, #28A8F4 60%, #0B79D0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t("title_2")}
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-5xl xl:text-[3.75rem] font-extrabold" style={{ color: "var(--text-primary)" }}>{t("title_3")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "var(--text-secondary)" }}
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-12"
            >
              <a href={`/${locale}/demo`}
                className="group flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#0B79D0] hover:bg-[#28A8F4] rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/30 active:scale-95">
                {t("cta_demo")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex flex-col p-3 rounded-xl" style={{ border: "1px solid var(--bg-border)", background: "var(--bg-card)" }}>
                  <span className="text-2xl font-bold tabular-nums" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--text-primary)" }}>{stat.value}</span>
                  <span className="text-xs mt-0.5 leading-tight" style={{ color: "var(--text-muted)" }}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Phone + tooltips */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:block relative"
            style={{ height: "720px", overflow: "visible" }}
          >
            {/* Animated glow */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{ width: "520px", height: "520px", background: "radial-gradient(circle, rgba(11,121,208,0.28) 0%, rgba(37,99,235,0.12) 40%, transparent 70%)", filter: "blur(70px)" }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Phone */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <HeroPhone />
            </div>

            {/* Left tooltips */}
            <div className="absolute z-20" style={{ right: "calc(50% + 142px)", top: "110px" }}>
              <TooltipCard icon={Brain} color="#0B79D0" label="AI Asistanı" value="6 yetenek aktif" sub="MCP · canlı bağlantı" delay={1.0} />
            </div>
            <div className="absolute z-20" style={{ right: "calc(50% + 142px)", top: "340px" }}>
              <TooltipCard icon={ScanLine} color="#0891B2" label="Barkod" value="LOT-A-0042" sub="Tarama başarılı" delay={1.8} />
            </div>

            {/* Right tooltips */}
            <div className="absolute z-20" style={{ left: "calc(50% + 142px)", top: "90px" }}>
              <TooltipCard icon={Package} color="#4F46E5" label="Mal Kabul" value="+240 adet" sub="Teslim alındı · az önce" delay={0.7} />
            </div>
            <div className="absolute z-20" style={{ left: "calc(50% + 142px)", top: "320px" }}>
              <TooltipCard icon={Truck} color="#16A34A" label="Sevkiyat" value="#ORD-2847" sub="18 kalem · hazır" delay={1.4} />
            </div>

            {/* Connector lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: "visible" }}>
              <motion.line x1="calc(50% - 142px)" y1="138px" x2="calc(50% - 126px)" y2="200px" stroke="#0B79D0" strokeWidth="1" strokeDasharray="3 5" initial={{ opacity: 0 }} animate={{ opacity: 0.28 }} transition={{ delay: 1.3 }} />
              <motion.line x1="calc(50% - 142px)" y1="368px" x2="calc(50% - 126px)" y2="430px" stroke="#0891B2" strokeWidth="1" strokeDasharray="3 5" initial={{ opacity: 0 }} animate={{ opacity: 0.28 }} transition={{ delay: 2.1 }} />
              <motion.line x1="calc(50% + 142px)" y1="118px" x2="calc(50% + 126px)" y2="180px" stroke="#4F46E5" strokeWidth="1" strokeDasharray="3 5" initial={{ opacity: 0 }} animate={{ opacity: 0.28 }} transition={{ delay: 1.0 }} />
              <motion.line x1="calc(50% + 142px)" y1="348px" x2="calc(50% + 126px)" y2="410px" stroke="#16A34A" strokeWidth="1" strokeDasharray="3 5" initial={{ opacity: 0 }} animate={{ opacity: 0.28 }} transition={{ delay: 1.7 }} />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Operation color strip */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 flex">
        {OP_COLORS.map((color) => (
          <div key={color} className="flex-1" style={{ background: color }} />
        ))}
      </div>
    </section>
  );
}
