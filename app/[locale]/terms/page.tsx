import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Kullanım Koşulları | iyibir WMS" };

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isTr = locale === "tr";

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white mb-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {isTr ? "Kullanım Koşulları" : "Terms of Service"}
          </h1>
          <p className="text-sm text-[#50506A] mb-10">
            {isTr ? "Son güncelleme: Ocak 2025" : "Last updated: January 2025"}
          </p>

          <div className="space-y-8 text-[#9090B0] leading-relaxed">
            {isTr ? (
              <>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">1. Kabul</h2>
                  <p>Bu web sitesini ziyaret ederek aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.</p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">2. Hizmet Kapsamı</h2>
                  <p>
                    iyibir WMS Platform, kurumsal depo yönetim yazılımı hizmeti sunan bir B2B ürünüdür.
                    Hizmet detayları ayrıca sözleşme kapsamında belirlenir.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">3. Fikri Mülkiyet</h2>
                  <p>
                    Bu web sitesindeki tüm içerik, tasarım ve yazılım iyibir Yazılım&apos;ın mülkiyetindedir.
                    İzinsiz kopyalanması ve dağıtılması yasaktır.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">4. Sorumluluk Sınırlaması</h2>
                  <p>
                    iyibir Yazılım, web sitesi içeriğinin doğruluğu konusunda makul özen göstermektedir.
                    Ancak herhangi bir hata veya eksiklik nedeniyle doğabilecek zararlardan sorumlu tutulamaz.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">5. İletişim</h2>
                  <p>
                    Sorularınız için:{" "}
                    <a href="mailto:info@iyibiryazilim.com.tr" className="text-[#A78BFA] hover:underline">
                      info@iyibiryazilim.com.tr
                    </a>
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance</h2>
                  <p>By visiting this website, you are deemed to have accepted the following terms of use.</p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">2. Service Scope</h2>
                  <p>
                    iyibir WMS Platform is a B2B product offering enterprise warehouse management software.
                    Service details are determined separately by contract.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">3. Intellectual Property</h2>
                  <p>
                    All content, design, and software on this website is the property of iyibir Yazılım.
                    Unauthorized copying and distribution is prohibited.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">4. Limitation of Liability</h2>
                  <p>
                    iyibir Yazılım exercises reasonable care regarding the accuracy of website content.
                    However, it cannot be held responsible for damages arising from any errors or omissions.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">5. Contact</h2>
                  <p>
                    For questions:{" "}
                    <a href="mailto:info@iyibiryazilim.com.tr" className="text-[#A78BFA] hover:underline">
                      info@iyibiryazilim.com.tr
                    </a>
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
