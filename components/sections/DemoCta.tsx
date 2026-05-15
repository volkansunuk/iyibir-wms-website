"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export default function DemoCta() {
  const t = useTranslations("demo");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  return (
    <section id="demo" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(81,43,212,0.08) 0%, transparent 60%)" }}
      />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(81,43,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(81,43,212,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full text-xs text-[#7B6CF0] uppercase tracking-wider"
            style={{ border: "1px solid rgba(81,43,212,0.3)", background: "rgba(81,43,212,0.07)" }}
          >
            {t("badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 whitespace-pre-line"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl p-8"
          style={{ border: "1px solid var(--bg-border)", background: "var(--bg-card)" }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(22,163,74,0.15)", border: "1px solid rgba(22,163,74,0.3)" }}
              >
                <CheckCircle2 className="w-8 h-8 text-[#4ADE80]" />
              </div>
              <p
                className="text-lg font-semibold text-center"
                style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}
              >
                {t("form.success")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "name", label: t("form.name"), placeholder: t("form.name_placeholder"), type: "text", required: true },
                { name: "company", label: t("form.company"), placeholder: t("form.company_placeholder"), type: "text", required: true },
                { name: "email", label: t("form.email"), placeholder: t("form.email_placeholder"), type: "email", required: true },
                { name: "phone", label: t("form.phone"), placeholder: t("form.phone_placeholder"), type: "tel", required: false },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2.5 text-sm rounded-lg focus:outline-none transition-colors"
                    style={{
                      background: "var(--bg-base)",
                      border: "1px solid var(--bg-border)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#512BD4")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--bg-border)")}
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  {t("form.message")}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder={t("form.message_placeholder")}
                  className="w-full px-3 py-2.5 text-sm rounded-lg focus:outline-none transition-colors resize-none"
                  style={{
                    background: "var(--bg-base)",
                    border: "1px solid var(--bg-border)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#512BD4")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--bg-border)")}
                />
              </div>

              <div className="sm:col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center gap-2 px-8 py-3 text-base font-semibold text-white bg-[#512BD4] hover:bg-[#6B46E0] rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 disabled:opacity-70 active:scale-95"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      {t("form.submit")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
