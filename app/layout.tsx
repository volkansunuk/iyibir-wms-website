import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iyibirwms.io"),
  title: {
    default: "iyibir WMS Platform | Akıllı Depo Yönetim Sistemi",
    template: "%s | iyibir WMS Platform",
  },
  description:
    "Logo ERP entegrasyonlu, yapay zeka destekli, mobil ve web tabanlı kurumsal depo yönetim sistemi (WMS). Mal kabul, sevkiyat, sayım ve barkodlu operasyonlar.",
  keywords: [
    "depo yönetim sistemi",
    "WMS",
    "Logo entegrasyonu",
    "barkod",
    "mal kabul",
    "sevkiyat",
    "stok yönetimi",
    "ambar sayımı",
    "yapay zeka WMS",
  ],
  openGraph: {
    type: "website",
    siteName: "iyibir WMS Platform",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${poppins.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent theme flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased" style={{ background: "var(--bg-base)", color: "var(--text-primary)" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "iyibir Yazılım",
                  alternateName: "iyibir WMS",
                  url: "https://www.iyibirwms.io",
                  logo: "https://www.iyibirwms.io/logo.svg",
                  email: "destek@iyibiryazilim.com.tr",
                  telephone: "+908508082881",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Nilüfer",
                    addressRegion: "Bursa",
                    addressCountry: "TR",
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/iyibiryazilim",
                    "https://www.instagram.com/iyibiryazilim",
                    "https://www.facebook.com/iyibiryazilim",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "iyibir WMS Platform",
                  url: "https://www.iyibirwms.io",
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
