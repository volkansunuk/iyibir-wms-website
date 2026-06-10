"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MapPin, Mail, Phone, Globe, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("contact");

  const items = [
    { Icon: MapPin, value: t("address"), color: "#0B79D0", href: null },
    { Icon: Mail, value: t("email"), color: "#2563EB", href: `mailto:${t("email")}` },
    { Icon: Phone, value: t("phone"), color: "#16A34A", href: `tel:${t("phone")}` },
    { Icon: Globe, value: t("website"), color: "#0891B2", href: "https://www.iyibiryazilim.com.tr", external: true },
  ];

  return (
    <section
      id="contact"
      className="py-20"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full text-xs uppercase tracking-wider"
            style={{ border: "1px solid var(--bg-border)", color: "var(--text-muted)" }}
          >
            {t("badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-extrabold mb-2"
            style={{ fontFamily: "var(--font-poppins)", color: "var(--text-primary)" }}
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: "var(--text-secondary)" }}
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {items.map(({ Icon, value, color, href, external }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08 }}
            >
              {href ? (
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex flex-col items-center p-5 rounded-xl transition-colors group text-center"
                  style={{ border: "1px solid var(--bg-border)", background: "var(--bg-card)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--bg-border-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--bg-border)")}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                    style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color }} />
                  </div>
                  <span className="text-sm transition-colors flex items-center gap-1" style={{ color: "var(--text-secondary)" }}>
                    {value}
                    {external && <ExternalLink className="w-3 h-3 opacity-50" />}
                  </span>
                </a>
              ) : (
                <div
                  className="flex flex-col items-center p-5 rounded-xl text-center"
                  style={{ border: "1px solid var(--bg-border)", background: "var(--bg-card)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                    style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color }} />
                  </div>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{value}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
