# Duella KPSS — Tanıtım Sitesi

Duella KPSS, KPSS sorularını oyunlaştırılmış labirent ve bölüm deneyimine dönüştüren bir mobil uygulamadır. Bu repo, uygulamanın tanıtım sitesini içerir.

## Site İçeriği

- Oyun döngüsü: ders seçimi, labirentte ilerleme, soru noktaları, can/puan sistemi
- Bilgi kartları, skor ve deneyim takibi
- Liderlik tablosu
- Soru güvenilirliği süreci (AI taslak + ekip kontrolü + hata bildirimi)
- Duella Pro (yakında)
- SSS
- App Store / Google Play indirme bağlantıları (placeholder)

## Dosya Yapısı

```
.
├── index.html          # Ana sayfa
├── css/style.css       # Stiller
├── js/main.js          # Etkileşimler
├── assets/logo.svg     # Duella logosu
├── seo-content.md      # AI-SEO içerik stratejisi
├── llms.txt            # AI arama motorları için site özeti
├── robots.txt          # Crawler kuralları
└── sitemap.xml         # Site haritası
```

## Yerel Çalıştırma

`index.html` dosyasını tarayıcıda açmanız yeterli. Statik site olduğu için build adımı gerekmez.

## AI-SEO Altyapısı

- Schema.org `SoftwareApplication` ve `FAQPage` JSON-LD
- `llms.txt` ile AI arama/cevap motorlarına yapılandırılmış özet
- `robots.txt` içinde GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot ve Google-Extended izinleri
- `sitemap.xml` ve canonical bağlantı
- Semantik H1/H2/H3 yapısı ve soru-cevap formatlı SSS

## Not

Duella KPSS resmî bir sınav kurumu uygulaması değildir. Eğitim ve eğlence amaçlı hazırlık desteği sunar; sınav başarısı garanti etmez.
