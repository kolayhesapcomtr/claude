# SEO Kurulum ve Yapılandırma Kılavuzu - bulutsogukhava.com

## ✅ Tamamlanan SEO İyileştirmeleri

### 1. **Meta Tag'ler (Tüm Sayfalarda)**
- ✅ Geliştirilmiş meta description'lar (155-160 karakter)
- ✅ Canonical URL'ler
- ✅ Hreflang tag'leri (çok dilli SEO)
- ✅ Open Graph tag'leri (sosyal medya paylaşımları)
- ✅ Twitter Card tag'leri
- ✅ Favicon bağlantıları

### 2. **Structured Data (Schema.org)**
- ✅ LocalBusiness JSON-LD markup (index sayfalarında)
- ✅ İşletme bilgileri, adres, telefon, e-posta
- ✅ Çalışma saatleri
- ✅ Hizmet katalog bilgileri
- ✅ Coğrafi koordinatlar

### 3. **Sitemap ve Robots**
- ✅ Çok dilli sitemap.xml oluşturuldu
- ✅ robots.txt dosyası oluşturuldu
- ✅ Hreflang alternate bilgileri sitemap'e eklendi

### 4. **Domain Optimizasyonu**
- ✅ Domain: `bulutsogukhava.com`
- ✅ "sogukhava" anahtar kelimesi domain'de mevcut
- ✅ Tüm URL'ler güncellendi

---

## 🎯 DOMAIN ANALİZİ: bulutsogukhava.com

### SEO Güçlü Yanları:
✅ **Anahtar Kelime İçeriği:** "sogukhava" → Google'da "soğuk hava" aramaları için avantaj
✅ **Marka Uyumu:** Domain, işletme adıyla birebir uyumlu
✅ **Akılda Kalıcılık:** Kısa, telaffuzu kolay
✅ **TLD:** .com uzantısı (en güvenilir ve prestijli)
✅ **International SEO:** Türkçe karakter yok, global erişim için uygun
✅ **Brandable:** Güçlü marka kimliği oluşturabilir

### Google'da Görünürlük İçin Avantajlar:
- "soğuk hava deposu" aramasında partial match
- "bulut soğuk hava" aramasında exact match
- Yerel SEO için İstanbul lokasyonu ile birleşince çok güçlü

---

## 🔧 YAPILMASI GEREKENLER

### 1. Sosyal Medya Görsellerini Oluşturun

**Gerekli Görseller:**
```
/images/og-image-tr.jpg          (1200x630px) - Ana sayfa TR
/images/og-image-en.jpg          (1200x630px) - Ana sayfa EN
/images/og-services-tr.jpg       (1200x630px) - Hizmetler TR
/images/og-services-en.jpg       (1200x630px) - Hizmetler EN
/images/og-products-tr.jpg       (1200x630px) - Ürünler TR
/images/og-products-en.jpg       (1200x630px) - Ürünler EN
/images/og-about-tr.jpg          (1200x630px) - Hakkımızda TR
/images/og-about-en.jpg          (1200x630px) - Hakkımızda EN
/images/og-gallery-tr.jpg        (1200x630px) - Galeri TR
/images/og-gallery-en.jpg        (1200x630px) - Galeri EN
/images/og-contact-tr.jpg        (1200x630px) - İletişim TR
/images/og-contact-en.jpg        (1200x630px) - İletişim EN

/images/twitter-card-tr.jpg      (1200x628px) - Ana sayfa Twitter
/images/twitter-card-en.jpg      (1200x628px) - Ana sayfa Twitter
(... diğer Twitter görselleri)

/images/logo.png                 (Square, min 512x512px)
```

**Görsel Tasarım Önerileri:**
- Logo + "Bulut Soğuk Hava Tesisi" yazısı
- Ana renk: Mavi tonları (soğukluk çağrışımı)
- İkon: Kar tanesi ❄️ veya soğutma sistemi görseli
- Font: Modern, okunabilir (Poppins ile uyumlu)

**Ücretsiz Tasarım Araçları:**
- Canva.com (hazır şablonlar)
- Figma.com
- Photopea.com (online Photoshop alternatifi)

### 2. Favicon Dosyaları

**Gerekli Dosyalar:**
```
/images/favicon-32x32.png        (32x32px)
/images/favicon-16x16.png        (16x16px)
/images/apple-touch-icon.png     (180x180px)
```

**Favicon İçeriği:**
- Kar tanesi ❄️ ikonu
- Veya "B" harfi (Bulut)
- Mavi/beyaz renk tonu

**Online Araçlar:**
- https://favicon.io/ (en kolay)
- https://realfavicongenerator.net/ (tüm platformlar)

### 3. Gerçek İşletme Bilgilerini Güncelleme

Şu anda placeholder bilgiler kullanılıyor. Gerçek bilgilerle güncelleyin:

**tr/index.html ve en/index.html dosyalarında (Schema.org JSON-LD):**

```json
"address": {
  "@type": "PostalAddress",
  "streetAddress": "Merkez Mah. Soğutma Cad. No:123",  // GERÇEK ADRES
  "addressLocality": "İstanbul",                       // GERÇEK ŞEHİR
  "addressCountry": "TR",
  "postalCode": "34000"                                // GERÇEK POSTA KODU
},
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "41.0082",   // GERÇEK ENLEM
  "longitude": "28.9784"   // GERÇEK BOYLAM
}
```

**Koordinatları Nasıl Bulunur:**
1. Google Maps'e gidin
2. İşletmenizi bulun veya adres arayın
3. Lokasyona sağ tıklayın
4. İlk satırı kopyalayın (örn: 41.0082, 28.9784)

### 4. Sosyal Medya Hesaplarını Güncelleme

**tr/index.html ve en/index.html dosyalarında (satır ~396-400):**

```json
"sameAs": [
  "https://www.facebook.com/bulutsogukhava",     // GERÇEK HESAP
  "https://www.instagram.com/bulutsogukhava",    // GERÇEK HESAP
  "https://www.linkedin.com/company/bulutsogukhava"  // GERÇEK HESAP
]
```

Ve footer'daki sosyal medya linkleri de güncellenecek.

### 5. Çalışma Saatlerini Güncelleme

**Schema.org'da (tr/index.html ve en/index.html):**

```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",    // GERÇEK AÇILIŞ SAATİ
    "closes": "18:00"    // GERÇEK KAPANIŞ SAATİ
  }
]
```

Cumartesi çalışıyorsanız:
```json
{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": "Saturday",
  "opens": "09:00",
  "closes": "14:00"
}
```

---

## 📊 Google Search Console Kurulumu

### Adım 1: Property Ekleme

1. https://search.google.com/search-console adresine gidin
2. "Add Property" tıklayın
3. **Domain:** `bulutsogukhava.com` yazın
4. DNS doğrulaması için TXT kaydı alın
5. Hosting sağlayıcınıza gidip DNS'e TXT kaydını ekleyin

**Örnek TXT Kaydı:**
```
Host: @
Type: TXT
Value: google-site-verification=xxxxxxxxxxxxx
```

### Adım 2: Sitemap Gönderimi

Search Console'da:
1. Sol menüden "Sitemaps" seçin
2. URL girin: `https://bulutsogukhava.com/sitemap.xml`
3. "Submit" tıklayın

### Adım 3: URL Inspection

Her iki dili test edin:
- `https://bulutsogukhava.com/tr/index.html`
- `https://bulutsogukhava.com/en/index.html`

"Request Indexing" ile Google'a hızlı indeksleme isteği gönderin.

---

## 🔍 SEO Test Araçları

Site yayına aldıktan sonra mutlaka test edin:

### 1. **Google Rich Results Test**
https://search.google.com/test/rich-results

Test URL'leri:
- `https://bulutsogukhava.com/tr/index.html`
- `https://bulutsogukhava.com/en/index.html`

✅ **Beklenen Sonuç:** LocalBusiness markup tanınmalı

### 2. **Facebook Sharing Debugger**
https://developers.facebook.com/tools/debug/

Test URL'leri:
- `https://bulutsogukhava.com/tr/index.html`
- `https://bulutsogukhava.com/en/index.html`

✅ **Beklenen Sonuç:** Open Graph görsellerini görmeli

### 3. **Twitter Card Validator**
https://cards-dev.twitter.com/validator

✅ **Beklenen Sonuç:** Summary Large Image Card görünmeli

### 4. **Google PageSpeed Insights**
https://pagespeed.web.dev/

Test URL: `https://bulutsogukhava.com/tr/index.html`

✅ **Hedef:** 90+ Performance Score

### 5. **Google Mobile-Friendly Test**
https://search.google.com/test/mobile-friendly

✅ **Beklenen Sonuç:** Page is mobile-friendly

### 6. **SSL Test**
https://www.ssllabs.com/ssltest/

Test: `bulutsogukhava.com`

✅ **Hedef:** A veya A+ rating

---

## 📈 SEO İzleme ve Raporlama

### Google Analytics 4 Kurulumu

1. https://analytics.google.com adresine gidin
2. Yeni property oluşturun:
   - Property adı: "Bulut Soğuk Hava"
   - Saat dilimi: Turkey (GMT+3)
   - Para birimi: Turkish Lira (TRY)
3. Data stream oluşturun:
   - Platform: Web
   - Website URL: `https://bulutsogukhava.com`
   - Stream adı: "Bulut Web"
4. Tracking Code'u alın (G-XXXXXXXXXX)

### Her HTML Dosyasına Ekleyin:

**Konum:** Her sayfa `</head>` tag'inden önce

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### İzlenecek Metrikler

**Google Search Console:**
- Toplam tıklama sayısı
- Ortalama konum
- CTR (Click-through rate)
- Top anahtar kelimeler:
  - "soğuk hava deposu istanbul"
  - "soğuk hava tesisi"
  - "cold storage istanbul"

**Google Analytics:**
- Ziyaretçi sayısı
- Bounce rate (hedef: <40%)
- Ortalama oturum süresi
- Dönüşüm oranı (contact form)

---

## 🎯 Önerilen Anahtar Kelimeler

### Ana Anahtar Kelimeler (Türkçe):
1. **soğuk hava deposu istanbul** (yüksek hacim)
2. **soğuk hava tesisi** (orta hacim)
3. **et depolama istanbul** (düşük rekabet)
4. **dondurulmuş ürün deposu** (spesifik)
5. **süt tozu depolama** (niche)

### Long-tail Anahtar Kelimeler:
- "istanbul avrupa yakası soğuk hava deposu"
- "-18 derece soğuk hava deposu fiyatları"
- "et ürünleri için soğuk depolama"

### İngilizce Anahtar Kelimeler:
1. **cold storage istanbul**
2. **frozen food warehouse turkey**
3. **cold storage facility istanbul**

### Yerel SEO İçin:
- "İstanbul soğuk hava deposu"
- "[İlçe adı] soğuk hava tesisi"
- "Istanbul cold storage facility"

---

## 🚀 Yayın Sonrası Kontrol Listesi

- [x] Domain güncellendi (bulutsogukhava.com)
- [ ] Gerçek adres ve koordinatlar güncellendi
- [ ] Gerçek telefon ve e-posta güncellendi
- [ ] Çalışma saatleri güncellendi
- [ ] Sosyal medya URL'leri güncellendi
- [ ] Open Graph görselleri oluşturuldu ve yüklendi
- [ ] Favicon dosyaları oluşturuldu ve yüklendi
- [ ] SSL sertifikası kuruldu (HTTPS)
- [ ] Google Search Console'a site eklendi
- [ ] Sitemap.xml gönderildi
- [ ] Rich Results Test yapıldı
- [ ] Facebook Debugger ile test edildi
- [ ] Twitter Card Validator ile test edildi
- [ ] Mobile-Friendly Test yapıldı
- [ ] PageSpeed Test yapıldı
- [ ] Google Analytics kuruldu
- [ ] İlk hafta sonunda trafik kontrolü

---

## 💡 İçerik SEO İpuçları

### Blog Bölümü Önerisi (İsteğe Bağlı)

Organik trafiği artırmak için blog yazıları:

1. **"Soğuk Hava Deposu Nedir? Nasıl Çalışır?"**
   - Anahtar kelime: "soğuk hava deposu"
   - 1500+ kelime

2. **"Et Ürünlerinin Doğru Saklanması için 10 İpucu"**
   - Anahtar kelime: "et saklama"

3. **"Dondurulmuş Gıdaların Raf Ömrü"**
   - Anahtar kelime: "dondurulmuş gıda"

4. **"Soğuk Hava Deposu Maliyetleri ve Fiyatları"**
   - Anahtar kelime: "soğuk hava deposu fiyatları"

### Meta Description Best Practices

**İyi Örnek:**
"Bulut Soğuk Hava - İstanbul'da et, balık ve dondurulmuş gıdalar için -18°C profesyonel depolama. 7/24 güvenilir hizmet. Hemen teklif alın! ☎️ 0555 123 45 67"

**Kötü Örnek:**
"Hoş geldiniz. Biz soğuk hava deposuyuz."

### Title Tag Formülü

```
[Anahtar Kelime] - [Marka] - [Lokasyon]
```

**Örnekler:**
- "Soğuk Hava Deposu - Bulut Soğuk Hava - İstanbul"
- "Profesyonel Depolama Hizmetleri | Bulut Soğuk Hava"
- "Cold Storage Istanbul - Bulut Cold Storage Facility"

---

## 📞 Destek ve Kaynaklar

### SEO Kaynakları:
- Google Search Central: https://developers.google.com/search
- Schema.org: https://schema.org/LocalBusiness
- Open Graph Protocol: https://ogp.me/

### Yerel SEO:
- Google My Business: https://business.google.com
- Google Maps listing oluşturun
- Müşteri yorumlarını teşvik edin

### Sosyal Medya SEO:
- Instagram'da #soğukhavadeposu hashtag kullanın
- LinkedIn'de industry posts paylaşın
- Facebook'ta müşteri testimonials

---

## 🔄 Aylık SEO Bakım

### Her Ay Yapılacaklar:

1. **Google Search Console Kontrolü**
   - Hata var mı kontrol edin
   - Yeni anahtar kelimeler keşfedin
   - Indexing sorunlarını çözün

2. **Sayfa Hızı Testi**
   - PageSpeed Insights ile kontrol
   - Görselleri optimize edin
   - Cache ayarlarını kontrol edin

3. **Backlink Analizi**
   - Google Search Console > Links
   - Kaliteli backlink'ler kazanın
   - Spam link'leri disavow edin

4. **İçerik Güncellemesi**
   - Eski içerikleri yenileyin
   - Yeni blog yazıları ekleyin
   - Anahtar kelimeleri optimize edin

---

**Domain:** bulutsogukhava.com
**Son Güncelleme:** 16 Kasım 2024
**Versiyon:** 2.0 (Domain-Specific)
**Durum:** Yayına hazır, görseller ve gerçek bilgiler bekliyor

---

## 🎊 BONUS: İlk Haftada Yapılacaklar

### Gün 1-2: Teknik Kurulum
- [ ] SSL sertifikası aktif
- [ ] Domain DNS ayarları
- [ ] Google Search Console doğrulama
- [ ] Sitemap gönderimi

### Gün 3-4: Görsel ve İçerik
- [ ] Tüm OG görselleri yüklendi
- [ ] Favicon eklendi
- [ ] Gerçek işletme bilgileri güncellendi

### Gün 5-7: Test ve İndeksleme
- [ ] Tüm SEO testleri yapıldı
- [ ] URL Inspection ile sayfalar kontrol edildi
- [ ] Google'a indeksleme istekleri gönderildi
- [ ] İlk trafik takibi başladı

**Hedef:** 7 gün içinde Google'da görünür olmak! 🚀
