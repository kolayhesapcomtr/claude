# SEO Kurulum ve Yapılandırma Kılavuzu

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

---

## 🔧 YAPILMASI GEREKENLER

Site yayına alındığında aşağıdaki değişiklikler yapılmalıdır:

### 1. Domain Adını Güncelleme

Tüm HTML dosyalarında `https://yourdomain.com` yerine gerçek domain adınızı yazın:

**Güncelleme Yapılacak Dosyalar:**
- `/tr/index.html`
- `/tr/services.html`
- `/tr/products.html`
- `/tr/about.html`
- `/tr/gallery.html`
- `/tr/contact.html`
- `/en/index.html`
- `/en/services.html`
- `/en/products.html`
- `/en/about.html`
- `/en/gallery.html`
- `/en/contact.html`
- `/sitemap.xml`
- `/robots.txt`

**Güncelleme Komutu (Terminal):**
```bash
# macOS/Linux
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" \) -exec sed -i '' 's|https://yourdomain.com|https://gercekdomain.com|g' {} +

# Linux (farklı sed syntax)
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" \) -exec sed -i 's|https://yourdomain.com|https://gercekdomain.com|g' {} +
```

### 2. Sosyal Medya URL'lerini Güncelleme

Schema.org ve footer'daki sosyal medya linklerini gerçek hesaplarınızla değiştirin:

**Güncellenecek Dosyalar:**
- `/tr/index.html` - Schema.org "sameAs" array'i (satır ~396-400)
- `/en/index.html` - Schema.org "sameAs" array'i (satır ~396-400)

**Değiştirilecek URL'ler:**
```json
"sameAs": [
  "https://www.facebook.com/gercekkullaniciadi",
  "https://www.instagram.com/gercekkullaniciadi",
  "https://www.linkedin.com/company/gercekkullaniciadi"
]
```

### 3. Open Graph ve Twitter Card Görselleri

Sosyal medya paylaşımları için görsel dosyaları oluşturun:

**Oluşturulacak Görseller:**
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
(... diğer Twitter görselleri benzer şekilde)

/images/logo.png                 (Square, min 512x512px)
```

**Görsel Özellikleri:**
- Format: JPG veya PNG
- Open Graph: 1200x630 piksel (önerilen)
- Twitter Card: 1200x628 piksel
- Dosya boyutu: Max 5MB (ideal 300KB altı)
- İçerik: Logo + kısa açıklama + görsel

### 4. Favicon Dosyaları

Favicon dosyalarını oluşturun ve `/images/` klasörüne ekleyin:

**Gerekli Dosyalar:**
```
/images/favicon-32x32.png        (32x32px)
/images/favicon-16x16.png        (16x16px)
/images/apple-touch-icon.png     (180x180px)
```

**Online Araçlar:**
- https://favicon.io/
- https://realfavicongenerator.net/

### 5. Gerçek İşletme Bilgilerini Güncelleme

**Schema.org'da güncellenecekler:**

```json
"address": {
  "@type": "PostalAddress",
  "streetAddress": "GERÇEK ADRES",
  "addressLocality": "GERÇEK ŞEHİR",
  "addressCountry": "TR",
  "postalCode": "GERÇEK POSTA KODU"
},
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "GERÇEK ENLEM",
  "longitude": "GERÇEK BOYLAM"
}
```

**Koordinatları Bulma:**
- Google Maps'te işletmenizi bulun
- URL'den koordinatları kopyalayın
- Örnek: `41.0082,28.9784`

### 6. Çalışma Saatlerini Güncelleme

Schema.org'da gerçek çalışma saatlerinizi girin:

```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "09:00",
    "closes": "14:00"
  }
]
```

---

## 📊 Google Search Console Kurulumu

### 1. Search Console'a Site Ekleme

1. https://search.google.com/search-console adresine gidin
2. "Add Property" seçeneğini tıklayın
3. Domain adınızı girin (örn: `gercekdomain.com`)
4. DNS doğrulaması yapın (hosting sağlayıcınızdan TXT kaydı ekleyin)

### 2. Sitemap Gönderimi

Search Console'da:
1. Sol menüden "Sitemaps" seçin
2. `https://gercekdomain.com/sitemap.xml` adresini girin
3. "Submit" butonuna tıklayın

### 3. Her İki Dil İçin URL Kontrolü

- TR versiyonu için: `https://gercekdomain.com/tr/index.html`
- EN versiyonu için: `https://gercekdomain.com/en/index.html`

"URL Inspection" aracıyla test edin.

---

## 🔍 SEO Test Araçları

Site yayına aldıktan sonra şu araçlarla test edin:

### 1. **Google Rich Results Test**
https://search.google.com/test/rich-results
- Schema.org markup'ınızı test eder
- LocalBusiness bilgilerini doğrular

### 2. **Facebook Sharing Debugger**
https://developers.facebook.com/tools/debug/
- Open Graph tag'lerini test eder
- Önizleme görüntüsü gösterir

### 3. **Twitter Card Validator**
https://cards-dev.twitter.com/validator
- Twitter Card görünümünü test eder

### 4. **Google PageSpeed Insights**
https://pagespeed.web.dev/
- Sayfa hızını ve mobil uyumluluğu test eder

### 5. **Google Mobile-Friendly Test**
https://search.google.com/test/mobile-friendly
- Mobil uyumluluğu kontrol eder

---

## 📈 SEO İzleme ve Raporlama

### Google Analytics 4 Kurulumu (Önerilen)

1. https://analytics.google.com adresine gidin
2. Yeni property oluşturun
3. Tracking Code'u alın
4. Her HTML sayfasının `</head>` tag'inden önce ekleyin:

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

1. **Organik Trafik** - Google Search Console
2. **Anahtar Kelimeler** - Google Search Console > Performance
3. **Sayfa Hızı** - PageSpeed Insights
4. **Hreflang Hataları** - Search Console > International Targeting
5. **Dizin Durumu** - Search Console > Coverage

---

## 🚀 Yayın Sonrası Kontrol Listesi

- [ ] Domain adı güncellendi (tüm HTML, XML, TXT dosyaları)
- [ ] Sosyal medya URL'leri güncellendi
- [ ] İşletme bilgileri (adres, telefon, e-posta) güncellendi
- [ ] Koordinatlar güncellendi
- [ ] Çalışma saatleri güncellendi
- [ ] Open Graph görselleri oluşturuldu ve yüklendi
- [ ] Favicon dosyaları oluşturuldu ve yüklendi
- [ ] Google Search Console'a site eklendi
- [ ] Sitemap.xml gönderildi
- [ ] Rich Results Test yapıldı
- [ ] Facebook Debugger ile test edildi
- [ ] Twitter Card Validator ile test edildi
- [ ] Mobile-Friendly Test yapıldı
- [ ] PageSpeed Test yapıldı
- [ ] Google Analytics kuruldu (opsiyonel)

---

## 💡 İpuçları

### Meta Description Yazma
- İlk 120 karakter en önemlidir (mobil görünüm)
- Harekete geçirici ifadeler kullanın ("Hemen teklif alın", "İnceleyin")
- Anahtar kelimeleri doğal şekilde yerleştirin
- Her sayfa için unique description yazın

### Hreflang Etiketleri
- Otomatik olarak eklenmiştir
- Her sayfada doğru dil kodu kullanılmış (tr/en)
- `x-default` İngilizce olarak ayarlanmış

### Canonical URL'ler
- Duplicate content sorunlarını önler
- Her sayfa kendi canonical URL'ini gösterir
- Parametreli URL'ler kullanmayın

---

## 📞 Destek

SEO ile ilgili sorularınız için:
- Google Search Central: https://developers.google.com/search/docs
- Schema.org Dokümantasyonu: https://schema.org/LocalBusiness
- Open Graph Protokolü: https://ogp.me/

---

**Son Güncelleme:** 16 Kasım 2024
**Versiyon:** 1.0
**Durum:** SEO optimize edilmiş, yayına hazır
