import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Features from "@/components/sections/Features";
import AiAgents from "@/components/sections/AiAgents";
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

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <AiAgents />
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
