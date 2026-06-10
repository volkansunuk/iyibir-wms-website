"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Warehouse, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const otherLocale = locale === "tr" ? "en" : "tr";
  const { theme, toggle } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: t("features") },
    { href: "#integration", label: t("integration") },
    { href: "#ai", label: "AI" },
    { href: "#pricing", label: t("pricing") },
    { href: "#faq", label: t("faq") },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "var(--navbar-bg-scrolled)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--bg-border)",
            }
          : {}
      }
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0B79D0] to-[#2563EB] flex items-center justify-center shadow-lg group-hover:shadow-sky-500/40 transition-shadow">
            <Warehouse className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-poppins)" }}>
            <span style={{ color: "var(--text-primary)" }}>iyibir</span>
            <span className="text-[#7B6CF0]">.WMS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm transition-colors rounded-md"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="p-2 rounded-lg transition-all duration-200"
            style={{
              color: "var(--text-secondary)",
              border: "1px solid var(--bg-border)",
              background: "var(--bg-card)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Locale switcher */}
          <Link
            href={`/${otherLocale}`}
            className="text-xs font-medium transition-colors px-2 py-1 rounded"
            style={{
              color: "var(--text-secondary)",
              border: "1px solid var(--bg-border)",
            }}
          >
            {otherLocale.toUpperCase()}
          </Link>

          <a
            href={`/${locale}/demo`}
            className="px-4 py-1.5 text-sm font-semibold text-white bg-[#0B79D0] hover:bg-[#28A8F4] rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30 active:scale-95"
          >
            {t("demo")}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-lg"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="p-2"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 py-4 flex flex-col gap-2"
          style={{
            background: "var(--bg-surface)",
            borderBottom: "1px solid var(--bg-border)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm rounded-md"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div
            className="mt-2 flex items-center gap-3 pt-2"
            style={{ borderTop: "1px solid var(--bg-border)" }}
          >
            <Link
              href={`/${otherLocale}`}
              className="text-xs px-2 py-1 rounded"
              style={{
                color: "var(--text-secondary)",
                border: "1px solid var(--bg-border)",
              }}
            >
              {otherLocale.toUpperCase()}
            </Link>
            <a
              href={`/${locale}/demo`}
              className="px-4 py-1.5 text-sm font-semibold text-white bg-[#0B79D0] rounded-full"
            >
              {t("demo")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
