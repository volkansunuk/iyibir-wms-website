"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Check, Zap, ArrowRight } from "lucide-react";

export default function Pricing() {
  const t = useTranslations("pricing");
  const locale = useLocale();
  const plans = t.raw("plans") as Array<{
    name: string;
    price: string | null;
    desc: string;
    users: string;
    features: string[];
    cta: string;
    highlighted: boolean;
  }>;

  return (
    <section id="pricing" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(rgba(11,121,208,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(11,121,208,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(11,121,208,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full text-xs text-[#7B6CF0] uppercase tracking-wider"
            style={{ border: "1px solid rgba(11,121,208,0.25)", background: "rgba(11,121,208,0.07)" }}
          >
            <Zap className="w-3 h-3" />
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

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl p-8 flex flex-col"
              style={
                plan.highlighted
                  ? {
                      background: "linear-gradient(135deg, rgba(11,121,208,0.12) 0%, rgba(37,99,235,0.08) 100%)",
                      border: "2px solid rgba(11,121,208,0.5)",
                    }
                  : {
                      background: "var(--bg-card)",
                      border: "1px solid var(--bg-border)",
                    }
              }
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-semibold text-white bg-[#0B79D0] shadow-lg shadow-sky-500/30">
                    {t("most_popular")}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.price ? (
                  <div className="flex items-end gap-2">
                    <span
                      className="text-4xl font-extrabold"
                      style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm mb-1.5" style={{ color: "var(--text-muted)" }}>
                      {t("monthly")}
                    </span>
                  </div>
                ) : (
                  <span
                    className="text-3xl font-extrabold"
                    style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}
                  >
                    {t("custom")}
                  </span>
                )}
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  {plan.users} {t("per_user")}
                </p>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px" style={{ background: "var(--bg-border)" }} />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: plan.highlighted ? "rgba(11,121,208,0.2)" : "rgba(11,121,208,0.1)",
                        border: "1px solid rgba(11,121,208,0.3)",
                      }}
                    >
                      <Check className="w-2.5 h-2.5 text-[#7B6CF0]" />
                    </div>
                    <span style={{ color: "var(--text-secondary)" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`/${locale}/demo`}
                className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={
                  plan.highlighted
                    ? { background: "#0B79D0", color: "white" }
                    : { background: "var(--bg-base)", border: "1px solid var(--bg-border)", color: "var(--text-secondary)" }
                }
                onMouseEnter={(e) => {
                  if (plan.highlighted) {
                    e.currentTarget.style.background = "#28A8F4";
                    (e.currentTarget.style as CSSStyleDeclaration).boxShadow = "0 8px 24px rgba(11,121,208,0.35)";
                  } else {
                    e.currentTarget.style.borderColor = "#0B79D0";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlighted) {
                    e.currentTarget.style.background = "#0B79D0";
                    (e.currentTarget.style as CSSStyleDeclaration).boxShadow = "";
                  } else {
                    e.currentTarget.style.borderColor = "var(--bg-border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }
                }}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm mt-10"
          style={{ color: "var(--text-muted)" }}
        >
          {t("note")}
        </motion.p>
      </div>
    </section>
  );
}
