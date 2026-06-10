"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const columns = [
    {
      heading: t("product"),
      links: [
        { label: t("links.features"), href: `/${locale}/#features` },
        { label: t("links.integration"), href: `/${locale}/#integration` },
        { label: t("links.mobile"), href: `/${locale}/#mockups` },
        { label: t("links.pricing"), href: `/${locale}/#pricing` },
      ],
    },
    {
      heading: t("company"),
      links: [
        { label: t("links.about"), href: `/${locale}/#` },
        { label: t("links.main_site"), href: "https://www.iyibiryazilim.com.tr", external: true },
      ],
    },
    {
      heading: t("support"),
      links: [
        { label: t("links.demo"), href: `/${locale}/demo` },
        { label: t("links.contact"), href: `/${locale}/contact` },
      ],
    },
    {
      heading: t("legal"),
      links: [
        { label: t("links.privacy"), href: `/${locale}/privacy` },
        { label: t("links.terms"), href: `/${locale}/terms` },
        { label: t("links.kvkk"), href: `/${locale}/privacy` },
      ],
    },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--bg-border)", background: "var(--bg-surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2.5 mb-4">
              <img src="/logo.svg" alt="iyibir WMS" width={32} height={32} className="w-8 h-8 rounded-lg" />
              <span className="text-base font-bold" style={{ fontFamily: "var(--font-poppins)" }}>
                <span style={{ color: "var(--text-primary)" }}>iyibir</span>{" "}
                <span className="text-[#0B79D0]">WMS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              {t("description")}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors flex items-center gap-1"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm transition-colors"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
            {t("copyright")} {t("built_with")}
          </p>
        </div>
      </div>
    </footer>
  );
}
