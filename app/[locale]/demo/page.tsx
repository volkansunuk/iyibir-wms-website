import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoCta from "@/components/sections/DemoCta";

export const metadata = { title: "Demo Talebi | iyibir WMS" };

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <DemoCta />
      </main>
      <Footer />
    </>
  );
}
