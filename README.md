# ArahAssist · Pendamping Suroboyo Bus

Aplikasi web (Next.js, bisa dipasang sebagai PWA) yang menemani penumpang Suroboyo Bus dari rumah sampai tujuan: rencanakan rute asal–tujuan (termasuk transit), lacak bus secara langsung dengan tampilan 3D, dapat pengingat "Siap-siap turun", dan jelajahi wisata Surabaya. Ada juga asisten AI "Tanya ArahAssist".

> Prototipe hackathon: posisi bus, kepadatan, dan transaksi adalah **simulasi** di atas geometri rute dan halte asli.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
```

Produksi:

```bash
npm run build
npm start
```

### Asisten AI (opsional)

Salin `.env.example` menjadi `.env.local` lalu isi `ANTHROPIC_API_KEY`. Tanpa kunci, asisten tetap jalan: jawaban diambil dari FAQ dan perencana rute bawaan (label "Dari FAQ ArahAssist").

### URL untuk demo/pitch

| URL | Fungsi |
|---|---|
| `/` | Beranda |
| `/?demo=results` | Langsung ke pilihan rute UINSA → Tunjungan Plaza |
| `/?demo=ride` | Langsung naik bus dan dipandu sampai turun |
| `/?lang=en` | Mode Bahasa Inggris |
| `/?speed=40` | Kecepatan simulasi bus (4–40×, bawaan 20×) |

## Fitur

- Perencana asal–tujuan ala KAI: tukar arah, waktu berangkat, penumpang umum/pelajar
- 5 koridor (R1–R5) dengan transit otomatis di Siola, Tugu Pahlawan, Joyoboyo, Rajawali
- Lacak bus (kode lambung, pelat, kepadatan, ramah kursi roda) dengan mode 3D
- Pengingat turun: getar + notifikasi satu halte sebelum tujuan, lonceng pengingat di halte mana pun
- ETA jujur berupa rentang waktu dan jumlah halte
- Tiket QR & ArahAssist Pay (simulasi), lapor masalah di bus
- Wisata: 20 destinasi, 5 paket rute, event kota, Paspor Wisata (stempel)
- Asisten AI dengan tool `cari_rute` dan `buat_itinerary`
- Dua bahasa (Indonesia/English), riwayat perjalanan & transaksi
- Saldo, stempel, rute tersimpan, dan riwayat tersimpan di perangkat (localStorage)

## Perubahan dari desain TemanBis

- Nama menjadi **ArahAssist**, dan palet warna menjadi Aegean Sky `#1664B0` (header, navigasi, info), Sandy Linen `#EFE8DE` (latar), Scarlet Bikini `#D21624` (tombol aksi utama, peringatan turun, tujuan)
- Gaya visual mengikuti aplikasi transportasi lokal (KAI Access, Traveloka): header biru polos, kartu pencarian putih, menu pintasan, kartu promo bergambar dengan teks di bawah. Tanpa gradien, efek kaca, atau ikon "sparkle". Komponen Beranda ada di `src/components/HomeScreen.jsx`, token warna dan ikon di `src/components/ui.jsx`
- Alur dipermudah:
  - Layar cari tujuan langsung menampilkan tempat populer, jadi tidak perlu mengetik dulu
  - Saat sampai di halte, bus terdekat langsung dilacak. "Ganti bus" tetap tersedia
  - Panel pilihan rute di HP lebih pendek supaya rute di peta terlihat
- Perbaikan:
  - Simulasi tetap berjalan saat tab di latar belakang atau perangkat lambat, sehingga pengingat turun tetap muncul
  - Tombol "Saya sudah turun" kontrasnya diperbaiki
  - Kartu tidak lagi terpotong di halaman Wisata

## Struktur

```
src/app/page.tsx              entry + parameter demo
src/app/api/chat/route.ts     relay Claude (Anthropic SDK); loop tool berjalan di klien
src/components/ArahAssistApp.jsx  logika aplikasi (state, simulasi, peta MapLibre, AI)
src/components/AppView.jsx    tampilan (hasil konversi template desain)
src/lib/core.js               jaringan rute, simulator bus, perencana rute, teks dua bahasa
src/lib/routes.js, data.js    geometri koridor (OSM/OSRM), foto Wikimedia Commons
design-src/                   ekspor desain asli (referensi)
```

Peta: MapLibre GL + OpenFreeMap (cadangan CARTO). Pencarian lokasi bebas: Photon/Nominatim (OSM).
