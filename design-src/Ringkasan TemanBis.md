# TemanBis — Pendamping Perjalanan Suroboyo Bus

TemanBis adalah aplikasi web responsif (HP dan laptop) yang menemani penumpang Suroboyo Bus dari rumah sampai tujuan. Pengguna memasukkan asal dan tujuan ala aplikasi KAI, lalu memilih rute (termasuk transit antarkoridor) dan melacak bus yang dinaiki secara langsung dengan tampilan 3D. Aplikasi juga mengingatkan sebelum halte turun. Selain untuk warga, TemanBis dirancang untuk mendukung pariwisata Surabaya: ada destinasi dekat halte, paket rute wisata, event kota, Paspor Wisata digital, mode Bahasa Inggris, dan asisten AI yang bisa menyusun itinerary.

> Status: prototipe hackathon. Semua data bus, posisi, kepadatan, dan transaksi adalah simulasi (data dummy).

---

## h. Arsitektur Sistem

### Arsitektur prototipe (yang sudah berjalan)

| Lapisan | Isi | Teknologi |
|---|---|---|
| **Presentasi** | Antarmuka responsif. Di HP berupa panel geser di atas peta dengan tab bar bawah. Di laptop berupa rail navigasi, panel kiri, peta, dan kolom tanya AI transparan yang mengambang. | Design Component (HTML + JS), font Plus Jakarta Sans |
| **Peta** | Peta vektor kota, garis 5 koridor, ruas perjalanan aktif, jalur jalan kaki bertitik, titik halte, marker bus, marker wisata, gedung 3D saat mode lacak | MapLibre GL JS, OpenFreeMap (OSM), CARTO sebagai cadangan |
| **Inti (domain)** | Jaringan rute & halte, simulator pergerakan bus, perhitungan ETA, perencana rute (langsung dan 1x transit), tarif, format waktu/jarak, dua bahasa | Modul `temanbis2-core.js` |
| **Data** | Geometri 5 koridor mengikuti jalan asli, daftar halte, jalur jalan kaki, 27 tempat (20 wisata), 5 paket wisata, 4 event, FAQ, foto | `temanbis2-routes.js`, `temanbis-data.js`. Geometri dari OSRM/OpenStreetMap, foto dari Wikimedia Commons |
| **AI** | Asisten "Tanya TemanBis" dengan konteks seluruh jaringan dan data wisata. Memakai dua tool: `cari_rute` dan `buat_itinerary`. Kalau AI tidak tersedia, jawaban diambil dari FAQ. | Claude (tool calling) |
| **Layanan perangkat** | Getar dan notifikasi "Siap-siap turun" | Vibration API, Notification API |

### Arsitektur produksi (rencana pengembangan)

```
Unit GPS/AVL di bus ──► Ingest (MQTT) ──► Layanan Realtime ──► API + WebSocket ──► Aplikasi TemanBis (PWA)
Sensor/tap penumpang ──┘                  (ETA, kepadatan)        │
GTFS statis (rute, halte, jadwal) ───────────────────────────────┤
Payment gateway QRIS / e-wallet ─────────────────────────────────┤
Layanan AI (tool calling ke API rute & wisata) ──────────────────┤
Dasbor operator (laporan penumpang, armada) ◄────────────────────┘
```

---

## i. Skenario

**1. Rina, mahasiswi UINSA → Tunjungan Plaza (rute langsung R1)**
Rina baru pertama kali naik Suroboyo Bus. Ia membuka TemanBis dan memilih tujuan Tunjungan Plaza. Aplikasi menyarankan jalan kaki 190 m lewat JPO ke Halte UINSA, naik R1 arah Rajawali sejauh 10 halte, lalu turun di Basuki Rahmat dan jalan 500 m. Di halte, Rina memilih bus SB-02 (kepadatan "Longgar") dan melihatnya mendekat dalam tampilan 3D. Satu halte sebelum tujuan, ponselnya bergetar: "Siap-siap turun".

**2. Dimas → Kampus ITS (transit R1 → R2)**
Dari UINSA, Dimas naik R1 sampai Siola, lalu transit ke R2 arah ITS. Aplikasi memberi tahu bahwa tiketnya masih berlaku 2 jam, jadi tidak perlu bayar lagi. Ia memilih bus R2 berikutnya dan dipandu sampai kampus.

**3. Emma, turis dari Belanda (mode Bahasa Inggris + wisata)**
Emma mengganti bahasa ke English. Ia meminta AI "half-day history itinerary". AI membuat kartu itinerary: Tugu Pahlawan → Jembatan Merah → House of Sampoerna → Masjid Sunan Ampel, semuanya di jalur R5 Putaran Kota Lama. Setiap kali tiba di destinasi dengan bus, Emma mendapat stempel baru di Paspor Wisata.

**4. Pak Hadi melacak bus dan melapor**
Dari tab Rute, Pak Hadi membuka R3 arah Tugu Pahlawan, memilih bus terdekat, dan memasang lonceng pengingat di halte tujuannya. Di dalam bus AC tidak dingin, jadi ia mengirim laporan lewat tombol Lapor.

---

## j. User Flow

**Alur utama: perjalanan**
1. **Beranda**: isi *Dari* (default "Lokasi saya") dan *Ke*, tukar asal–tujuan, atur waktu berangkat (sekarang/15/30/60 menit) dan jumlah penumpang (umum/pelajar).
2. **Cari tempat**: ketik nama tempat, wisata, atau halte.
3. **Pilihan rute**: 1–4 opsi berlabel *Tercepat*, *Paling sedikit jalan*, atau *Tanpa transit*. Tiap opsi menampilkan estimasi waktu (rentang), jam tiba, ringkasan langkah (jalan → R1 10 halte → jalan), dan kapan bus pertama datang.
4. **Detail perjalanan**: timeline lengkap dengan jam per titik, rincian tarif, lalu *Mulai perjalanan*. Kalau berangkat nanti, tombolnya menjadi *Ingatkan saya*.
5. **Bayar**: dari saldo TemanBis Pay. Tiket QR berlaku 2 jam, transit gratis.
6. **Langkah 1 – Jalan ke halte**: arah jalan bertahap dan info bus yang sedang menuju halte, lalu *Saya sudah di halte*.
7. **Pilih bus**: daftar bus yang akan datang beserta kode lambung, pelat, kepadatan, dan perkiraan waktu, lalu *Lacak*.
8. **Lacak (mode 3D)**: kamera miring mengikuti arah bus, dan panel bawah menampilkan halte yang dilewati sampai halte kamu. Setelah itu *Saya sudah naik*.
9. **Di dalam bus**: kartu "Halte berikutnya + sisa halte", daftar halte bergerak, dan peringatan satu halte sebelum turun, lalu *Saya sudah turun*.
10. **Transit (jika ada)**: pilih bus koridor berikutnya di halte yang sama.
11. **Jalan ke tujuan**, lalu **Sampai**: ringkasan waktu, tarif, jalan kaki, jumlah halte, stempel wisata baru, dan opsi *Simpan rute*.

**Alur wisata**
Wisata → filter kategori (Sejarah, Kuliner, Religi, Alam & taman, Belanja) → paket rute atau destinasi → detail tempat (foto, cerita, jam buka, tiket masuk, halte terdekat, status stempel) → *Rute ke sini* → masuk ke alur perjalanan.

**Alur lacak bus**
Rute → pilih koridor (R1–R5) → pilih arah → bus aktif di sepanjang daftar halte → lacak bus → pasang lonceng pengingat di halte mana pun.

**Alur AI**
Tanya (tombol di HP, kolom transparan di laptop) → pertanyaan bebas atau saran cepat → jawaban teks + tombol *Lihat rute* atau kartu itinerary → *Mulai dari …*.

---

## k. Fitur Unggulan

1. **Asal–tujuan ala KAI**: kartu pencarian dengan tukar arah, waktu berangkat, dan jumlah penumpang beserta tarif pelajar.
2. **Perencana multi-koridor**: 5 koridor (R1 Purabaya–Rajawali, R2 ITS–Siola, R3 Kenjeran Park–Tugu Pahlawan, R4 UNESA–Joyoboyo, R5 Putaran Kota Lama) dengan transit otomatis di Siola, Tugu Pahlawan, Joyoboyo, dan Rajawali.
3. **Lacak bus, bukan sekadar halte**: setiap bus punya kode lambung, pelat, kepadatan (Longgar/Sedang/Padat), dan label ramah kursi roda.
4. **Mode 3D point-of-view**: peta miring dengan gedung 3D mengikuti arah bus. Daftar halte di panel bawah, dan tombol *Ikuti bus* muncul kalau peta digeser.
5. **Pengingat turun**: getar dan notifikasi satu halte sebelum tujuan, plus lonceng pengingat di halte mana pun.
6. **ETA yang jujur**: waktu ditampilkan sebagai rentang ("10–15 mnt") dan jumlah halte ("2 halte lagi"), bukan angka pasti yang sering meleset.
7. **Tiket QR & TemanBis Pay**: bayar dari saldo, isi saldo (QRIS, VA, e-wallet), QR tiket berlaku 2 jam termasuk transit.
8. **Lapor masalah di bus**: kategori cepat (AC, terlalu penuh, cara mengemudi, kebersihan, barang tertinggal) yang terhubung ke bus yang sedang dilacak.
9. **Wisata terintegrasi**: 20 destinasi dengan foto, 5 paket rute wisata (Jejak Kota Lama, Ziarah Lintas Iman, Rasa Suroboyo, Sehari di Pusat Kota, Senja di Kenjeran), dan event kota.
10. **Paspor Wisata**: stempel otomatis saat tiba di destinasi naik bus, plus statistik perjalanan dan CO₂ yang dihemat.
11. **Asisten AI**: menjawab tarif, aturan, dan jam operasional, mencarikan rute, dan menyusun itinerary yang langsung bisa dimulai.
12. **Dua bahasa**: Indonesia dan English untuk wisatawan.
13. **Riwayat**: perjalanan (bisa diulang dengan satu ketukan) dan transaksi.

---

## l. UI/UX Preview

**Prinsip desain**
- Peta selalu jadi kanvas utama, dan informasi tampil di panel yang bisa dibaca sekilas saat berjalan atau berdiri di bus.
- Satu tombol aksi utama di setiap langkah ("Saya sudah di halte", "Saya sudah naik", "Saya sudah turun").
- Aksesibel: target sentuh minimal 44 px, teks isi minimal 16 px, kontras tinggi.
- Warna rute konsisten di seluruh aplikasi: R1 oranye, R2 biru, R3 hijau, R4 ungu, R5 merah muda.

**Sistem visual (versi saat ini)**
- Tipografi: Plus Jakarta Sans (400–800).
- Warna: kuning `#FFD43B` untuk aksi utama, tinta `#15171C`, latar netral hangat `#F4F3EE`, hijau `#1E9E5A` untuk status live.
- Bentuk: kartu sudut 18–24 px, chip pil, bayangan lembut.

**Layar utama**
| Layar | Isi |
|---|---|
| Beranda | Header sapaan, kartu asal–tujuan, saldo + tiket QR, kartu Tanya TemanBis, bus live di halte terdekat, event kota, wisata pilihan |
| Pilihan rute | Kartu opsi dengan label, rentang waktu, jam tiba, chip langkah, info bus pertama |
| Detail perjalanan | Timeline titik demi titik dengan warna koridor, rincian tarif, tombol mulai |
| Lacak / Naik (3D) | Kartu gelap "Halte berikutnya + sisa halte" di atas, peta 3D, daftar halte bergerak di bawah. Kartu berubah kuning saat waktunya turun. |
| Rute | Daftar 5 koridor, detail koridor dengan pilihan arah dan posisi bus di antara halte |
| Wisata | Kotak "Rencanakan hari dengan AI", filter kategori, kartu paket bergambar, daftar destinasi |
| Detail tempat | Foto besar, cerita singkat, jam buka, tiket masuk, halte terdekat, status stempel |
| Riwayat | Tab Perjalanan dan Transaksi |
| Akun | Profil, statistik, Paspor Wisata (grid stempel), bahasa, pengingat turun, halte favorit |
| Modal | Waktu berangkat, penumpang, bayar, QR tiket, isi saldo, lapor masalah |

**Responsif**
- **HP (390 px)**: panel geser di atas peta, tab bar 5 menu di bawah, tombol AI mengambang.
- **Laptop (≥1100 px)**: rail navigasi kiri, panel 420 px, peta lebar, kolom tanya AI transparan (efek kaca) di bawah peta, dan panel chat yang muncul di atasnya.

**File prototipe**: `TemanBis App.dc.html` (aplikasi) dan `TemanBis Preview.dc.html` (bingkai HP + laptop berdampingan).
