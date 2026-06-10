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
            className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {isTr ? "Kullanım Koşulları" : "Terms of Service"}
          </h1>
          <p className="text-sm text-[var(--text-muted)] mb-10">
            {isTr ? "Son güncelleme: Mayıs 2025" : "Last updated: May 2025"}
          </p>

          <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
            {isTr ? (
              <>
                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">1. Kabul ve Kapsam</h2>
                  <p>
                    Bu web sitesini ve iyibir WMS hizmetlerini kullananlar, aşağıdaki kullanım koşullarını kabul
                    etmiş sayılır. iyibir Yazılım, bu koşulları önceden bildirmeksizin güncelleme hakkını saklı tutar.
                    Güncel koşullar her zaman bu sayfada yayımlanır.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">2. Hizmet Tanımı</h2>
                  <p>
                    iyibir WMS Platform, Logo ERP ile entegre çalışan, depo süreçlerini dijitalleştiren kurumsal
                    bir yazılım hizmetidir. Hizmet kapsamı; web ve mobil uygulama erişimi, AI asistan özellikleri,
                    entegrasyon servisleri ve teknik desteği içerir.
                  </p>
                  <p className="mt-2">
                    Hizmet detayları, kullanıcı sayısı, modüller ve özelleştirmeler; taraflar arasında imzalanan ayrı
                    bir hizmet sözleşmesiyle belirlenir.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">3. Abonelik ve Ödeme</h2>
                  <p>
                    iyibir WMS aylık veya yıllık abonelik modelleriyle sunulur. Fiyatlar web sitesinde belirtilen
                    tarife üzerinden geçerlidir; yıllık ödeme için indirim uygulanabilir. Tüm fiyatlar KDV hariçtir.
                  </p>
                  <p className="mt-2">
                    Abonelik süresi içinde iptal talebinde bulunan müşterilerden kalan süreye ait ücret tahsil
                    edilmez; önceki dönem ücretleri iade edilmez. Ödeme koşulları hizmet sözleşmesinde ayrıca
                    düzenlenir.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">4. Kullanıcı Yükümlülükleri</h2>
                  <p className="mb-2">Kullanıcılar aşağıdaki yükümlülüklere uymayı kabul eder:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Sisteme yetkisiz erişim girişiminde bulunmamak</li>
                    <li>Hesap bilgilerini üçüncü şahıslarla paylaşmamak</li>
                    <li>Sistemi yalnızca meşru ticari amaçlar için kullanmak</li>
                    <li>Yazılımı tersine mühendislik, kopyalama veya değiştirme yoluna gitmemek</li>
                    <li>Sisteme zarar verebilecek zararlı yazılım veya içerik yüklememek</li>
                    <li>Geçerli tüm yasalara uymak</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">5. Fikri Mülkiyet</h2>
                  <p>
                    Web sitesindeki ve iyibir WMS platformundaki tüm içerik, tasarım, kaynak kodu, marka, logo ve
                    diğer fikri mülkiyet unsurları iyibir Yazılım&apos;a aittir ve fikri mülkiyet mevzuatı kapsamında
                    koruma altındadır.
                  </p>
                  <p className="mt-2">
                    Kullanıcılara; hizmet kapsamında sistemi kullanmak için sınırlı, devredilemez, münhasır olmayan
                    bir lisans tanınır. Bu lisans, herhangi bir fikri mülkiyet hakkının devri anlamına gelmez.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">6. Gizlilik ve Veri Güvenliği</h2>
                  <p>
                    iyibir WMS, müşteri verilerinin güvenliğini ön planda tutar. Veriler müşterinin kendi SQL Server
                    veritabanında tutulur; iyibir Yazılım, destek dışı durumlarda müşteri verilerine erişmez.
                    Kişisel verilerin işlenmesine ilişkin detaylar için{" "}
                    <a href="/tr/privacy" className="text-[#38BDF8] hover:underline">
                      Gizlilik Politikası
                    </a>
                    &apos;nı inceleyin.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">7. Hizmet Sürekliliği ve Kesintiler</h2>
                  <p>
                    iyibir Yazılım, hizmetin kesintisiz sunulması için makul teknik önlemleri alır. Ancak planlı
                    bakım çalışmaları, altyapı kaynaklı aksaklıklar veya mücbir sebepler nedeniyle hizmet kesintileri
                    yaşanabilir. Kritik güncellemeler öncesinde müşteriler bilgilendirilir.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">8. Sorumluluk Sınırlaması</h2>
                  <p>
                    iyibir Yazılım&apos;ın sorumluluğu, hizmet sözleşmesinde belirtilen tutar ile sınırlıdır.
                    Dolaylı zararlar, veri kayıpları veya iş kesintilerinden kaynaklanan kayıplar için sorumluluk
                    kabul edilmez. iyibir Yazılım, web sitesi içeriğinin eksiksizliği ve doğruluğu için makul özen
                    gösterir; ancak içerikteki hatalardan doğabilecek zararlardan sorumlu tutulamaz.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">9. Hizmet Feshi</h2>
                  <p>
                    Müşteri, sözleşmede belirtilen süre öncesinde yazılı bildirimle aboneliğini sonlandırabilir.
                    iyibir Yazılım; kullanım koşullarının ihlali, abonelik ücretinin ödenmemesi veya sisteme zarar
                    verici davranışlar halinde hizmeti askıya alma veya sonlandırma hakkını saklı tutar.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">10. Koşulların Değiştirilmesi</h2>
                  <p>
                    iyibir Yazılım, bu kullanım koşullarını önceden bildirimde bulunarak güncelleme hakkını saklı
                    tutar. Önemli değişiklikler en az 30 gün öncesinden müşterilere bildirilir. Değişiklikler
                    yayımlandıktan sonra hizmeti kullanmaya devam etmek, güncel koşulların kabulü anlamına gelir.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">11. Uygulanacak Hukuk ve Yetki</h2>
                  <p>
                    Bu kullanım koşulları Türk hukukuna tabidir. Uyuşmazlıkların çözümünde Bursa mahkemeleri ve
                    icra daireleri yetkilidir.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">12. İletişim</h2>
                  <p>
                    Sorularınız için:{" "}
                    <a href="mailto:destek@iyibiryazilim.com.tr" className="text-[#38BDF8] hover:underline">
                      destek@iyibiryazilim.com.tr
                    </a>
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">1. Acceptance and Scope</h2>
                  <p>
                    By using this website and iyibir WMS services, you are deemed to have accepted the following terms
                    of service. iyibir Yazılım reserves the right to update these terms without prior notice. The
                    current terms are always published on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">2. Service Definition</h2>
                  <p>
                    iyibir WMS Platform is an enterprise software service that integrates with Logo ERP and
                    digitizes warehouse processes. The service scope includes web and mobile application access, AI
                    assistant features, integration services, and technical support.
                  </p>
                  <p className="mt-2">
                    Service details, number of users, modules, and customizations are determined by a separate service
                    agreement signed between the parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">3. Subscription and Payment</h2>
                  <p>
                    iyibir WMS is offered with monthly or annual subscription models. Prices are as per the rates
                    listed on the website; discounts may apply for annual payment. All prices exclude VAT.
                  </p>
                  <p className="mt-2">
                    Customers who request cancellation during the subscription period will not be charged for the
                    remaining period; fees for previous periods are non-refundable. Payment terms are separately
                    regulated in the service agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">4. User Obligations</h2>
                  <p className="mb-2">Users agree to comply with the following obligations:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Not attempting unauthorized access to the system</li>
                    <li>Not sharing account credentials with third parties</li>
                    <li>Using the system only for legitimate business purposes</li>
                    <li>Not reverse engineering, copying, or modifying the software</li>
                    <li>Not uploading malicious software or harmful content to the system</li>
                    <li>Complying with all applicable laws and regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">5. Intellectual Property</h2>
                  <p>
                    All content, design, source code, trademarks, logos, and other intellectual property elements on
                    the website and iyibir WMS platform belong to iyibir Yazılım and are protected under intellectual
                    property law.
                  </p>
                  <p className="mt-2">
                    Users are granted a limited, non-transferable, non-exclusive license to use the system within the
                    scope of the service. This license does not imply any transfer of intellectual property rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">6. Privacy and Data Security</h2>
                  <p>
                    iyibir WMS prioritizes the security of customer data. Data is kept in the customer&apos;s own SQL
                    Server database; iyibir Yazılım does not access customer data except for support purposes. For
                    details on the processing of personal data, please review our{" "}
                    <a href="/en/privacy" className="text-[#38BDF8] hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">7. Service Continuity and Interruptions</h2>
                  <p>
                    iyibir Yazılım takes reasonable technical measures to provide uninterrupted service. However,
                    service interruptions may occur due to planned maintenance, infrastructure issues, or force majeure.
                    Customers are notified in advance of critical updates.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">8. Limitation of Liability</h2>
                  <p>
                    iyibir Yazılım&apos;s liability is limited to the amount specified in the service agreement. No
                    liability is accepted for indirect damages, data losses, or losses arising from business
                    interruptions. iyibir Yazılım exercises reasonable care for the completeness and accuracy of
                    website content but cannot be held responsible for damages arising from errors.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">9. Service Termination</h2>
                  <p>
                    The customer may terminate their subscription with written notice before the period specified in
                    the contract. iyibir Yazılım reserves the right to suspend or terminate service in cases of
                    violation of terms of use, non-payment of subscription fees, or harmful conduct toward the system.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">10. Changes to Terms</h2>
                  <p>
                    iyibir Yazılım reserves the right to update these terms of service with prior notice. Significant
                    changes are communicated to customers at least 30 days in advance. Continued use of the service
                    after changes are published constitutes acceptance of the updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">11. Governing Law and Jurisdiction</h2>
                  <p>
                    These terms of service are governed by Turkish law. Bursa courts and enforcement offices have
                    jurisdiction for dispute resolution.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">12. Contact</h2>
                  <p>
                    For questions:{" "}
                    <a href="mailto:destek@iyibiryazilim.com.tr" className="text-[#38BDF8] hover:underline">
                      destek@iyibiryazilim.com.tr
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
