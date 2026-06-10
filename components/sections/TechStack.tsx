"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const TECH = [
  { name: ".NET 10", color: "#0B79D0", desc: "Backend Framework" },
  { name: "Blazor", color: "#2563EB", desc: "Web Client" },
  { name: ".NET MAUI", color: "#7C3AED", desc: "Mobile Client" },
  { name: "SQL Server", color: "#E11D48", desc: "Database" },
  { name: "Aspire", color: "#0891B2", desc: "Orchestration" },
  { name: "MCP", color: "#16A34A", desc: "AI Protocol" },
  { name: "OpenAI", color: "#D97706", desc: "AI Models" },
  { name: "JWT", color: "#4F46E5", desc: "Auth" },
  { name: "Dapper", color: "#0891B2", desc: "Data Access" },
  { name: "YARP", color: "#0B79D0", desc: "API Gateway" },
];

export default function TechStack() {
  const t = useTranslations("tech");

  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {TECH.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: `${tech.color}10`, borderColor: `${tech.color}30`, border: `1px solid ${tech.color}30` }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: tech.color }} />
              <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{tech.name}</span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>{tech.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
