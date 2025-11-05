# EmailJS Kurulum Talimatları

İletişim formunun çalışması için EmailJS kurulumunu tamamlamanız gerekiyor.

## Adım 1: EmailJS Hesabı Oluşturun

1. https://www.emailjs.com/ adresine gidin
2. **Sign Up** butonuna tıklayın (ücretsiz)
3. E-posta adresiniz ile kayıt olun

## Adım 2: Email Servisinizi Bağlayın

1. Dashboard'da **Add New Service** butonuna tıklayın
2. E-posta sağlayıcınızı seçin (Gmail önerilir)
3. Hesabınızı bağlayın ve **Service ID**'yi kopyalayın
   - Örnek: `service_abc123`

## Adım 3: Email Template Oluşturun

1. **Email Templates** sekmesine gidin
2. **Create New Template** butonuna tıklayın
3. Template içeriğini aşağıdaki gibi düzenleyin:

```
Konu: Yeni İletişim Formu Mesajı - {{subject}}

Gönderen: {{from_name}}
E-posta: {{from_email}}
Telefon: {{phone}}
Şirket: {{company}}

Konu: {{subject}}

Mesaj:
{{message}}
```

4. **Template ID**'yi kopyalayın
   - Örnek: `template_xyz789`

5. Template'i kaydedin

## Adım 4: Public Key Alın

1. **Account** sekmesine gidin
2. **General** altında **Public Key** bulunur
3. Public Key'i kopyalayın
   - Örnek: `AbCdEfGhIjKlMnOp`

## Adım 5: Kodu Güncelleyin

`js/script.js` dosyasını açın ve aşağıdaki 3 yeri güncelleyin:

### 1. Public Key (Satır 127):
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```
Değiştirin:
```javascript
emailjs.init("AbCdEfGhIjKlMnOp");  // Kendi Public Key'inizi yazın
```

### 2. Service ID ve Template ID (Satır 173):
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```
Değiştirin:
```javascript
emailjs.send('service_abc123', 'template_xyz789', templateParams)  // Kendi ID'lerinizi yazın
```

## Adım 6: Test Edin

1. Değişiklikleri commit edin ve push edin:
```bash
git add js/script.js
git commit -m "EmailJS konfigürasyonu eklendi"
git push
```

2. GitHub Pages'te sitenizi açın
3. İletişim formunu doldurun ve test edin
4. E-posta adresinize mesaj geldiğini kontrol edin

## Template Değişkenleri

EmailJS template'inizde kullanabileceğiniz değişkenler:

- `{{from_name}}` - Gönderenin adı soyadı
- `{{from_email}}` - Gönderenin e-posta adresi
- `{{phone}}` - Telefon numarası
- `{{company}}` - Şirket adı (opsiyonel)
- `{{subject}}` - Mesaj konusu
- `{{message}}` - Mesaj içeriği

## Ücretsiz Limit

EmailJS ücretsiz planı:
- ✅ Aylık 200 e-posta
- ✅ Sınırsız template
- ✅ Spam koruması

Bu bir soğuk hava deposu sitesi için yeterlidir.

## Sorun Giderme

### E-posta gelmiyor?
1. EmailJS Dashboard'da **Logs** sekmesini kontrol edin
2. Spam klasörünü kontrol edin
3. Template değişkenlerinin doğru olduğundan emin olun

### Form gönderilmiyor?
1. Browser Console'da hata mesajlarını kontrol edin (F12)
2. Public Key, Service ID ve Template ID'lerin doğru olduğundan emin olun
3. EmailJS hesabınızın aktif olduğunu kontrol edin

## Destek

EmailJS dokümantasyonu: https://www.emailjs.com/docs/
