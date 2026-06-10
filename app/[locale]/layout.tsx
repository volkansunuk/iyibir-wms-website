import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import CookieConsent from "@/components/layout/CookieConsent";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === "tr";
  const title = isTr
    ? "iyibir WMS Platform | Akıllı Depo Yönetim Sistemi"
    : "iyibir WMS Platform | Smart Warehouse Management System";
  const description = isTr
    ? "Logo ERP entegrasyonlu, yapay zeka destekli mobil ve web tabanlı kurumsal depo yönetim sistemi (WMS). Mal kabul, sevkiyat, sayım ve barkodlu operasyonlar."
    : "AI-powered, Logo ERP integrated warehouse management system (WMS) for mobile and web. Goods receipt, dispatch, counting, and barcode operations.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { tr: "/tr", en: "/en", "x-default": "/tr" },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: "iyibir WMS Platform",
      locale: isTr ? "tr_TR" : "en_US",
      type: "website",
      images: ["/og.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        {children}
        <CookieConsent />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
