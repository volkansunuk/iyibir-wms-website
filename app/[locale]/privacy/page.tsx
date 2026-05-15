import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Gizlilik Politikası | iyibir WMS" };

export default async function PrivacyPage({
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
            {isTr ? "Gizlilik Politikası" : "Privacy Policy"}
          </h1>
          <p className="text-sm text-[#50506A] mb-10">
            {isTr ? "Son güncelleme: Ocak 2025" : "Last updated: January 2025"}
          </p>

          <div className="space-y-8 text-[#9090B0] leading-relaxed">
            {isTr ? (
              <>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">1. Veri Sorumlusu</h2>
                  <p>
                    iyibir Yazılım olarak, kişisel verilerinizin işlenmesinde 6698 sayılı Kişisel Verilerin
                    Korunması Kanunu (KVKK) kapsamındaki yükümlülüklerimize uymayı taahhüt ediyoruz.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">2. Toplanan Veriler</h2>
                  <p>
                    Demo talebi formu aracılığıyla ad, soyad, şirket adı, e-posta ve telefon bilgilerinizi
                    toplayabiliriz. Bu veriler yalnızca iletişim amacıyla kullanılır.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">3. Verilerin Kullanımı</h2>
                  <p>
                    Toplanan veriler, demo talebinizi karşılamak ve sizinle iletişime geçmek amacıyla
                    kullanılır. Üçüncü taraflarla paylaşılmaz.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">4. Çerezler</h2>
                  <p>
                    Bu web sitesi, temel işlevsellik için çerezler kullanabilir. Tarayıcı ayarlarınızdan
                    çerez kullanımını kontrol edebilirsiniz.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">5. Haklarınız</h2>
                  <p>
                    KVKK kapsamında kişisel verilerinize erişim, düzeltme, silme ve işlemeyi kısıtlama
                    haklarına sahipsiniz. Talepleriniz için:{" "}
                    <a href="mailto:info@iyibiryazilim.com.tr" className="text-[#A78BFA] hover:underline">
                      info@iyibiryazilim.com.tr
                    </a>
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">1. Data Controller</h2>
                  <p>
                    iyibir Yazılım is committed to complying with obligations under the Turkish Personal
                    Data Protection Law (KVKK) regarding the processing of your personal data.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">2. Data Collected</h2>
                  <p>
                    Through the demo request form, we may collect your name, company name, email, and phone
                    number. This data is used only for communication purposes.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">3. Use of Data</h2>
                  <p>
                    Collected data is used to fulfill your demo request and contact you. It is not shared
                    with third parties.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">4. Cookies</h2>
                  <p>
                    This website may use cookies for basic functionality. You can control cookie usage
                    through your browser settings.
                  </p>
                </section>
                <section>
                  <h2 className="text-lg font-semibold text-white mb-3">5. Your Rights</h2>
                  <p>
                    You have the right to access, correct, delete, and restrict processing of your personal
                    data. For requests:{" "}
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
