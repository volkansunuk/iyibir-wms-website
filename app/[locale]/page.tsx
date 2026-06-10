import { setRequestLocale, getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Features from "@/components/sections/Features";
import AiAgents from "@/components/sections/AiAgents";
import Marketplace from "@/components/sections/Marketplace";
import LogoIntegration from "@/components/sections/LogoIntegration";
import DeviceMockups from "@/components/sections/DeviceMockups";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import DemoCta from "@/components/sections/DemoCta";
import ContactSection from "@/components/sections/ContactSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tFaq = await getTranslations({ locale, namespace: "faq" });
  const faqItems = tFaq.raw("items") as Array<{ q: string; a: string }>;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "iyibir WMS Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android, Web",
    offers: { "@type": "Offer", price: "4900", priceCurrency: "TRY" },
    description:
      locale === "tr"
        ? "Logo ERP entegrasyonlu, yapay zeka destekli kurumsal depo yönetim sistemi."
        : "AI-powered, Logo ERP integrated enterprise warehouse management system.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <AiAgents />
        <Marketplace />
        <LogoIntegration />
        <DeviceMockups />
        <TechStack />
        <Testimonials />
        <Pricing />
        <FAQ />
        <DemoCta />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
