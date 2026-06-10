"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "iyibir-kvkk-consent";

export default function CookieConsent() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShow(true);
    } catch {
      /* localStorage erişilemezse banner'ı gösterme */
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* yok say */
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 140, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 140, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 sm:px-6"
          role="dialog"
          aria-live="polite"
        >
          <div
            className="max-w-3xl mx-auto rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--bg-border)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.18), 0 0 0 1px rgba(11,121,208,0.08)",
            }}
          >
            <p className="text-xs sm:text-sm flex-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {t("kvkk_notice")}{" "}
              <Link href={`/${locale}/privacy`} className="underline" style={{ color: "#0B79D0" }}>
                {t("links.kvkk")}
              </Link>
            </p>
            <button
              onClick={accept}
              className="shrink-0 px-6 py-2 text-sm font-semibold text-white rounded-full bg-[#0B79D0] hover:bg-[#28A8F4] transition-colors active:scale-95"
            >
              {t("kvkk_accept")}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
