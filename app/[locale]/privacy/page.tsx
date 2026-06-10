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
            className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {isTr ? "Gizlilik Politikası ve KVKK Aydınlatma Metni" : "Privacy Policy & KVKK Disclosure"}
          </h1>
          <p className="text-sm text-[var(--text-muted)] mb-10">
            {isTr ? "Son güncelleme: Mayıs 2025" : "Last updated: May 2025"}
          </p>

          <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
            {isTr ? (
              <>
                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">1. Veri Sorumlusu</h2>
                  <p>
                    Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında
                    veri sorumlusu sıfatıyla hareket eden <strong className="text-[var(--text-primary)]">iyibir Yazılım</strong>{" "}
                    tarafından hazırlanmıştır.
                  </p>
                  <p className="mt-2">
                    <strong className="text-[var(--text-primary)]">Adres:</strong> Ankara, Türkiye<br />
                    <strong className="text-[var(--text-primary)]">E-posta:</strong>{" "}
                    <a href="mailto:info@iyibiryazilim.com.tr" className="text-[#38BDF8] hover:underline">
                      info@iyibiryazilim.com.tr
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">2. İşlenen Kişisel Veriler ve Kategorileri</h2>
                  <p className="mb-3">Aşağıdaki kategorilerdeki kişisel verileriniz işlenebilir:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><strong className="text-[var(--text-primary)]">Kimlik Verileri:</strong> Ad, soyad, unvan</li>
                    <li><strong className="text-[var(--text-primary)]">İletişim Verileri:</strong> E-posta adresi, telefon numarası</li>
                    <li><strong className="text-[var(--text-primary)]">Firma Bilgileri:</strong> Şirket adı, sektör</li>
                    <li><strong className="text-[var(--text-primary)]">Kullanım Verileri:</strong> Web sitesi ziyaret bilgileri, IP adresi, tarayıcı türü (çerezler aracılığıyla)</li>
                    <li><strong className="text-[var(--text-primary)]">İşlem Verileri:</strong> Demo talep içeriği, iletişim mesajları</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">3. Kişisel Verilerin İşlenme Amaçları ve Hukuki Dayanakları</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[var(--text-primary)] font-medium mb-1">Demo ve iletişim talepleri</p>
                      <p>
                        Demo talebinizi değerlendirmek, sizinle iletişime geçmek ve ürün bilgisi sunmak amacıyla
                        işlenir. Hukuki dayanak: KVKK m. 5/2-c (sözleşmenin kurulması veya ifasıyla doğrudan ilgili
                        olması) ve m. 5/2-f (meşru menfaat).
                      </p>
                    </div>
                    <div>
                      <p className="text-[var(--text-primary)] font-medium mb-1">Müşteri ilişkileri yönetimi</p>
                      <p>
                        Mevcut ve potansiyel müşterilerle ilişkilerin sürdürülmesi amacıyla işlenir. Hukuki dayanak:
                        KVKK m. 5/2-f (meşru menfaat).
                      </p>
                    </div>
                    <div>
                      <p className="text-[var(--text-primary)] font-medium mb-1">Yasal yükümlülükler</p>
                      <p>
                        Vergi, muhasebe ve diğer yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir. Hukuki
                        dayanak: KVKK m. 5/2-ç (kanunlarda açıkça öngörülmesi).
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">4. Kişisel Verilerin Aktarıldığı Taraflar</h2>
                  <p className="mb-3">
                    Kişisel verileriniz; hizmet altyapısının sağlanması amacıyla aşağıdaki kategorilerdeki üçüncü
                    taraflarla paylaşılabilir:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Bulut altyapı ve barındırma hizmet sağlayıcıları</li>
                    <li>E-posta iletişim hizmet sağlayıcıları</li>
                    <li>Yasal zorunluluk kapsamında yetkili kamu kurum ve kuruluşları</li>
                  </ul>
                  <p className="mt-3">
                    Verileriniz, yalnızca hizmet sunumu için gerekli ölçüde ve KVKK&apos;nın 8. ve 9. maddeleri
                    kapsamında aktarılır.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">5. Yurt Dışına Veri Aktarımı</h2>
                  <p>
                    Web sitesinin barındırılması ve e-posta hizmetleri için yurt dışı sunucular kullanılabilir. Bu
                    aktarımlar; KVKK m. 9 uyarınca açık rızanıza dayanarak veya Kişisel Verileri Koruma Kurulu
                    tarafından ilan edilen yeterli korumanın bulunduğu ülkelere gerçekleştirilir.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">6. Kişisel Verilerin Saklama Süresi</h2>
                  <p>
                    Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve yasal saklama yükümlülükleri
                    kapsamında muhafaza edilir. Demo taleplerinize ilişkin veriler, müşteri ilişkisinin sona
                    ermesinden itibaren en fazla 3 yıl saklanır. Yasal yükümlülük kapsamındaki veriler, ilgili
                    mevzuatta öngörülen süreler boyunca tutulur.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">7. Çerezler (Cookies)</h2>
                  <p>
                    Web sitemiz; temel işlevsellik, performans analizi ve kullanıcı deneyiminin iyileştirilmesi
                    amacıyla çerezler kullanabilir. Zorunlu çerezler için onayınıza gerek olmaksızın kullanılır;
                    analitik ve pazarlama çerezleri için açık onayınız alınır. Tarayıcı ayarlarınızdan çerez
                    tercihlerinizi yönetebilirsiniz.
                  </p>
                  <p className="mt-2">
                    Kullanılan başlıca çerez kategorileri:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
                    <li><strong className="text-[var(--text-primary)]">Zorunlu çerezler:</strong> Sitenin temel işlevleri için gereklidir</li>
                    <li><strong className="text-[var(--text-primary)]">Analitik çerezler:</strong> Ziyaretçi davranışını anlamamızı sağlar</li>
                    <li><strong className="text-[var(--text-primary)]">Tercih çerezleri:</strong> Dil seçimi gibi kullanıcı tercihlerini hatırlar</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">8. İlgili Kişi Hakları (KVKK m. 11)</h2>
                  <p className="mb-3">
                    Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                    <li>Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                    <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                    <li>Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
                    <li>KVKK m. 7&apos;de öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
                    <li>Otomatik sistemler vasıtasıyla analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                    <li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">9. Başvuru Yöntemi</h2>
                  <p>
                    Haklarınızı kullanmak için yazılı başvurunuzu{" "}
                    <a href="mailto:info@iyibiryazilim.com.tr" className="text-[#38BDF8] hover:underline">
                      info@iyibiryazilim.com.tr
                    </a>{" "}
                    adresine iletebilirsiniz. Başvurularınız en geç 30 (otuz) gün içinde sonuçlandırılır.
                    Başvuruda kimliğinizi doğrulayabilecek bilgilerin bulunması gerekmektedir.
                  </p>
                  <p className="mt-2">
                    Kişisel Verileri Koruma Kurulu&apos;na şikâyette bulunma hakkınız saklıdır:{" "}
                    <span className="text-[var(--text-primary)]">www.kvkk.gov.tr</span>
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">1. Data Controller</h2>
                  <p>
                    This disclosure text has been prepared by <strong className="text-[var(--text-primary)]">iyibir Yazılım</strong>{" "}
                    acting as data controller within the scope of the Turkish Personal Data Protection Law No. 6698
                    (&quot;KVKK&quot;).
                  </p>
                  <p className="mt-2">
                    <strong className="text-[var(--text-primary)]">Address:</strong> Ankara, Turkey<br />
                    <strong className="text-[var(--text-primary)]">Email:</strong>{" "}
                    <a href="mailto:info@iyibiryazilim.com.tr" className="text-[#38BDF8] hover:underline">
                      info@iyibiryazilim.com.tr
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">2. Personal Data Processed and Categories</h2>
                  <p className="mb-3">The following categories of personal data may be processed:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><strong className="text-[var(--text-primary)]">Identity Data:</strong> Name, surname, title</li>
                    <li><strong className="text-[var(--text-primary)]">Contact Data:</strong> Email address, phone number</li>
                    <li><strong className="text-[var(--text-primary)]">Company Information:</strong> Company name, industry sector</li>
                    <li><strong className="text-[var(--text-primary)]">Usage Data:</strong> Website visit information, IP address, browser type (via cookies)</li>
                    <li><strong className="text-[var(--text-primary)]">Transaction Data:</strong> Demo request content, contact messages</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">3. Purposes and Legal Bases for Processing</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[var(--text-primary)] font-medium mb-1">Demo and contact requests</p>
                      <p>
                        Processed to evaluate your demo request, contact you, and provide product information. Legal
                        basis: KVKK Art. 5/2-c (directly related to establishment or performance of a contract) and
                        Art. 5/2-f (legitimate interest).
                      </p>
                    </div>
                    <div>
                      <p className="text-[var(--text-primary)] font-medium mb-1">Customer relationship management</p>
                      <p>
                        Processed to maintain relationships with existing and potential customers. Legal basis:
                        KVKK Art. 5/2-f (legitimate interest).
                      </p>
                    </div>
                    <div>
                      <p className="text-[var(--text-primary)] font-medium mb-1">Legal obligations</p>
                      <p>
                        Processed to fulfill tax, accounting, and other legal obligations. Legal basis: KVKK Art. 5/2-ç
                        (explicitly provided for by law).
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">4. Third Parties to Whom Data May Be Transferred</h2>
                  <p className="mb-3">
                    Your personal data may be shared with the following categories of third parties for the purpose of
                    providing service infrastructure:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Cloud infrastructure and hosting service providers</li>
                    <li>Email communication service providers</li>
                    <li>Authorized public institutions and organizations where legally required</li>
                  </ul>
                  <p className="mt-3">
                    Your data is transferred only to the extent necessary for service delivery, in accordance with
                    Articles 8 and 9 of KVKK.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">5. International Data Transfers</h2>
                  <p>
                    Overseas servers may be used for website hosting and email services. Such transfers are made based
                    on your explicit consent under KVKK Art. 9 or to countries deemed to have adequate protection by
                    the Personal Data Protection Authority.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">6. Data Retention Periods</h2>
                  <p>
                    Your personal data is retained for as long as required by the purpose of processing and in
                    accordance with legal retention obligations. Data related to demo requests is retained for a
                    maximum of 3 years after the end of the customer relationship. Data subject to legal obligations
                    is retained for the periods stipulated by applicable legislation.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">7. Cookies</h2>
                  <p>
                    Our website may use cookies for core functionality, performance analytics, and improving user
                    experience. Strictly necessary cookies are used without consent; analytical and marketing cookies
                    require your explicit consent. You can manage your cookie preferences through your browser settings.
                  </p>
                  <p className="mt-2">Main cookie categories used:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
                    <li><strong className="text-[var(--text-primary)]">Strictly necessary cookies:</strong> Required for basic site functions</li>
                    <li><strong className="text-[var(--text-primary)]">Analytics cookies:</strong> Help us understand visitor behavior</li>
                    <li><strong className="text-[var(--text-primary)]">Preference cookies:</strong> Remember user preferences such as language selection</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">8. Your Rights (KVKK Art. 11)</h2>
                  <p className="mb-3">You have the following rights regarding your personal data:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>To learn whether your personal data is being processed</li>
                    <li>To request information if your personal data has been processed</li>
                    <li>To learn the purpose of processing and whether it is used in accordance with that purpose</li>
                    <li>To know the third parties to whom data is transferred domestically or abroad</li>
                    <li>To request correction of incomplete or inaccurate data</li>
                    <li>To request deletion or destruction of data under the conditions of KVKK Art. 7</li>
                    <li>To object to a result arising against you through automated systems</li>
                    <li>To demand compensation for damages arising from unlawful processing</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">9. How to Exercise Your Rights</h2>
                  <p>
                    To exercise your rights, please send your written request to{" "}
                    <a href="mailto:info@iyibiryazilim.com.tr" className="text-[#38BDF8] hover:underline">
                      info@iyibiryazilim.com.tr
                    </a>
                    . Requests will be concluded within 30 (thirty) days. Your application must include information
                    that can verify your identity.
                  </p>
                  <p className="mt-2">
                    You also have the right to file a complaint with the Personal Data Protection Authority:{" "}
                    <span className="text-[var(--text-primary)]">www.kvkk.gov.tr</span>
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
