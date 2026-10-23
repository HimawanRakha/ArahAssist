# Brief Aplikasi Web Pendamping Gobis

Oct 22, 2026 · @Himawan | Azizah

## Ringkasan

**TemanBis** (nama kerja) adalah aplikasi web pendamping GoBis yang membantu warga Surabaya merencanakan dan menjalani perjalanan Suroboyo Bus dari titik mana pun ke titik mana pun, dalam satu aplikasi tanpa harus pindah ke Google Maps.

Posisinya melengkapi GoBis, bukan menggantikan: prototipe ini membuktikan bahwa data bus yang sama bisa disajikan dengan UX yang jauh lebih ramah, dan bisa diadopsi atau diintegrasikan oleh pengelola. Untuk hackathon, semua data bus disimulasikan dengan data dummy berbasis rute dan halte asli.

## Masalah

Penumpang, terutama yang baru pertama kali, harus memakai dua aplikasi untuk satu perjalanan dan tetap tidak punya tempat bertanya.

| Masalah | Di GoBis | Di Google Maps |
| --- | --- | --- |
| Peta | Tidak interaktif, sulit dieksplorasi | Interaktif, tapi bukan khusus Suroboyo Bus |
| Rencana asal–tujuan | Tidak ada, harus pindah ke Google Maps | Ada, tapi tidak terintegrasi dengan posisi bus GoBis |
| List kedatangan per halte | Perlu dicek ulang di versi terbaru | Tidak ada list kedatangan bus seperti aplikasi MRT/LRT |
| Tempat bertanya (tarif, cara bayar, jam operasional) | Tidak ada | Tidak ada |
| Kemudahan UI bagi pengguna awam | Membingungkan | Umum, bukan untuk penumpang bus pemula |

**Problem statement:** penumpang Suroboyo Bus tidak punya satu aplikasi yang bisa merencanakan perjalanan, menunjukkan kapan bus datang, memandu selama di bus, dan menjawab pertanyaan dasar.

Catatan: klaim "UI GoBis membingungkan" saat ini masih pengamatan tim. Klaim ini dibuktikan lewat usability test di bagian Validasi.

## Persona

Persona utama adalah penumpang awam; seluruh keputusan desain diuji pertama-tama untuk mereka.

| Persona | Contoh | Kebutuhan utama | Ketakutan |
| --- | --- | --- | --- |
| Utama: penumpang awam | Pendatang baru, mahasiswa baru dari luar kota, lansia, wisatawan domestik | Tahu persis harus jalan ke mana, naik bus apa, turun di mana | Salah naik, kelewatan halte, tidak tahu cara bayar |
| Sekunder: penumpang rutin | Pekerja dan pelajar yang tiap hari naik Suroboyo Bus | Cepat tahu kapan bus berikutnya datang di halte langganan | Menunggu lama tanpa kepastian |

Jika kebutuhan keduanya bertabrakan, menangkan persona utama. Penumpang rutin cukup dilayani lewat halte dan rute favorit.

## Tujuan dan metrik keberhasilan

Keberhasilan diukur dari tugas yang sama di GoBis dan di TemanBis, bukan dari jumlah fitur.

| Tujuan | Metrik | Target prototipe |
| --- | --- | --- |
| Merencanakan perjalanan tanpa keluar aplikasi | Tugas "rencanakan perjalanan dari A ke B" selesai tanpa membuka aplikasi lain | 5 dari 5 peserta uji |
| Lebih cepat menemukan info kedatangan | Waktu menemukan bus berikutnya di halte tertentu | Lebih cepat dari GoBis pada peserta yang sama |
| Lebih sedikit kebingungan | Jumlah salah tap dan permintaan bantuan per tugas | Lebih rendah dari GoBis |
| Rasa yakin penumpang awam | Skor kepercayaan diri 1–5 setelah tugas | Rata-rata minimal 4 |

Angka target final ditetapkan setelah baseline GoBis diukur.

## Lingkup fitur

Tujuh ide awal digabung menjadi empat pilar. Peta tetap menjadi pusat aplikasi; fitur lain muncul di atas peta.

| Pilar | Isi | Ide awal yang tercakup | Prioritas |
| --- | --- | --- | --- |
| 1. Peta interaktif live | Posisi bus bergerak, halte bisa di-tap, tap halte memunculkan list kedatangan | 1, 6 | Wajib |
| 2. Perencana perjalanan | Input asal dan tujuan bebas (tempat apa pun, bukan hanya halte); 2–3 opsi rute dengan estimasi total; langkah demi langkah termasuk jalan kaki dan transit | 3, 4, 6, 7 | Wajib |
| 3. Pendamping perjalanan | Setelah memilih rute dan naik: notifikasi halte berikutnya, estimasi tiba, peringatan "siap-siap turun" | 5 | Wajib (disimulasikan) |
| 4. Chatbot tanya-jawab | Pertanyaan seputar tarif, cara bayar, jam operasional, aturan naik; tidak dipakai untuk mencari rute | 2 | Opsional |

Di luar lingkup hackathon: data GPS bus asli, pembayaran tiket, akun pengguna, dan seluruh koridor Surabaya. Prototipe cukup mencakup 1–2 koridor.

## Alur pengguna utama

Alur inti adalah satu perjalanan utuh, dari membuka aplikasi sampai tiba di tujuan, tanpa keluar aplikasi.

1. Buka aplikasi: peta langsung tampil dengan lokasi pengguna, halte terdekat, dan bus yang bergerak.
2. Isi "Mau ke mana?": asal otomatis dari lokasi saat ini, tujuan bisa nama tempat apa pun.
3. Pilih satu dari 2–3 opsi rute. Tiap opsi menampilkan total waktu, jumlah transit, dan jarak jalan kaki.
4. Ikuti langkah 1: jalan kaki ke halte, dengan garis di peta dan keterangan sisi jalan.
5. Di halte: lihat list kedatangan dan posisi bus yang ditunggu ("2 halte lagi").
6. Naik dan tap "Saya sudah naik": mode pendamping aktif, menampilkan halte berikutnya dan estimasi tiba.
7. Satu halte sebelum tujuan: peringatan "Siap-siap turun".
8. Turun: langkah terakhir berupa jalan kaki ke tujuan, atau instruksi transit jika ada.

Alur pendek untuk penumpang rutin: buka aplikasi, tap halte favorit, lihat list kedatangan. Chatbot bisa dibuka kapan saja lewat tombol di pojok layar.

## Prinsip desain UX

"Ramah" berarti langkah lebih sedikit dan informasi yang jujur, bukan sekadar lebih banyak animasi.

- **Peta sebagai layar utama.** Semua fitur muncul sebagai panel di atas peta (bottom sheet), sehingga pengguna tidak pernah kehilangan konteks lokasi.
- **Satu aksi utama per layar.** Tombol besar dengan label kata kerja: "Mau ke mana?", "Saya sudah naik", "Lihat langkah".
- **Bahasa sehari-hari.** "Jalan 300 m ke Halte X, di seberang minimarket", bukan istilah teknis transit.
- **Estimasi yang jujur.** Bus bercampur dengan lalu lintas, jadi tampilkan posisi ("2 halte lagi") dan rentang waktu ("5–10 menit"), bukan angka menit yang tampak presisi.
- **Interaktivitas hanya jika membantu.** Tap halte untuk list kedatangan dan tap bus untuk rutenya; hindari gesture yang harus dipelajari.
- **Mobile-first dan aksesibel.** Teks minimal 16 px, kontras memenuhi WCAG AA, target sentuh minimal 44 px, dan bisa dipakai satu tangan.

## Arsitektur teknis

Aplikasi berbentuk web (PWA) dengan satu backend yang menggabungkan rute, estimasi, dan posisi bus dari simulator.

&#91;embedded content: arsitektur web · 7 komponen\]

Frontend hanya mendengarkan posisi bus lewat WebSocket, sehingga simulator nanti bisa diganti feed GPS asli tanpa mengubah UI.

| Komponen | Pilihan | Catatan |
| --- | --- | --- |
| Frontend | Next.js (React), MapLibre GL JS, tile OpenStreetMap, PWA | PWA agar bisa dipasang di layar utama HP |
| Realtime | WebSocket (misalnya Socket.IO) | Satu kanal untuk posisi bus dan notifikasi |
| Mesin rute | Algoritma sendiri di graf kecil (halte, transit, jalan kaki) | Cukup untuk 1–2 koridor; OpenTripPlanner lebih realistis tapi berat disiapkan |
| Geocoding | Nominatim atau Photon (OSM) | Ada batas pemakaian; simpan cache tempat populer untuk demo |
| Rute jalan kaki | OSRM atau OpenRouteService profil pejalan kaki | Cadangan demo: jarak garis lurus dikali faktor |
| Chatbot | LLM via API dengan FAQ kurasi sebagai konteks | Wajib menjawab "belum tahu" jika di luar FAQ |
| Notifikasi | In-app + Web Notifications API | Di iPhone, notifikasi web hanya jalan jika PWA dipasang di layar utama; demo pakai Android atau laptop |

**Model simulasi.** Bus bergerak di sepanjang polyline rute dengan kecepatan acak dalam rentang wajar, berhenti di tiap halte, dan sesekali tertunda untuk meniru macet. Estimasi tiba dihitung dari jarak sisa dibagi kecepatan rata-rata, lalu ditampilkan sebagai rentang. Tombol "Saya sudah naik" mengikat pengguna ke bus terdekat di simulator, bukan ke GPS HP.

## Validasi

Klaim "UI GoBis membingungkan" dan "TemanBis lebih ramah" dibuktikan dengan usability test yang sama di dua aplikasi.

1. Rekrut 5 peserta: minimal 3 yang belum pernah naik Suroboyo Bus dan 2 penumpang rutin.
2. Beri tiga tugas yang sama di GoBis (baseline): cari kapan bus berikutnya datang di halte tertentu, rencanakan perjalanan dari kampus ke sebuah mal, dan cari tarif serta cara bayar.
3. Catat per tugas: berhasil atau tidak, waktu, jumlah salah tap, momen bingung (minta peserta berpikir keras), dan skor yakin 1–5.
4. Ulangi tugas yang sama di prototipe TemanBis dengan peserta lain atau setelah jeda, agar efek belajar tidak mencemari hasil.
5. Masukkan perbandingan sebelum–sesudah ke slide pitch, termasuk satu atau dua kutipan peserta.

Kalau waktu sempit, baseline GoBis adalah bagian yang paling penting. Tanpa itu, problem statement hanya opini tim.

## Risiko dan pertanyaan juri

Risiko terbesar bukan teknis, melainkan pitch yang terdengar seperti "GoBis dengan warna baru".

| Pertanyaan atau risiko | Jawaban atau mitigasi |
| --- | --- |
| "Apa bedanya dengan GoBis dan Google Maps?" | Satu-satunya aplikasi yang menggabungkan planner, list kedatangan bus, pendamping perjalanan, dan tempat bertanya; tunjukkan data usability test |
| "Kalau begini, kenapa tidak redesign GoBis saja?" | Prototipe ini adalah bukti konsepnya; arsitekturnya siap disambungkan ke data GoBis atau diadopsi pengelola |
| "Datanya kan palsu?" | Akui sejak awal: data simulasi berbasis rute dan halte asli; simulator bisa diganti feed GPS tanpa mengubah UI |
| Estimasi tiba yang meleset di dunia nyata | Tampilkan posisi bus dan rentang waktu, bukan menit presisi |
| Chatbot memberi jawaban salah | Hanya menjawab dari FAQ kurasi; di luar itu bilang belum tahu |
| Cakupan fitur terlalu luas untuk waktu lomba | Kunci pilar 1–3; chatbot dikerjakan terakhir |
| Geocoding gagal saat demo karena limit atau internet | Cache tempat populer; siapkan rekaman video demo cadangan |

Asumsi yang belum diverifikasi: posisi bus GoBis kelak bisa diakses lewat kerja sama dengan pengelola.

## Rencana kerja

Urutan kerja mengikuti risiko: data dan simulator dulu, karena semua fitur bergantung padanya. Durasi lomba dan jumlah anggota tim belum ditentukan di brief ini.

1. **Fondasi:** pilih 1–2 koridor, susun data dummy (rute, halte, polyline), jalankan simulator bus, tampilkan bus bergerak di peta.
2. **Peta dan list kedatangan:** tap halte untuk memunculkan list kedatangan dengan posisi dan rentang waktu.
3. **Planner:** input asal–tujuan, geocoding, 2–3 opsi rute, langkah demi langkah.
4. **Pendamping perjalanan:** "Saya sudah naik", halte berikutnya, peringatan siap-siap turun.
5. **Chatbot FAQ:** hanya jika fase 1–4 sudah stabil.
6. **Validasi dan pitch:** usability test, poles UI, siapkan demo dan video cadangan.

Baseline usability test GoBis bisa dikerjakan paralel sejak awal oleh anggota non-programmer.

| Peran | Tanggung jawab |
| --- | --- |
| UI/UX | Wireframe, prototipe, usability test, aset pitch |
| Frontend | Peta, bottom sheet, planner, mode pendamping |
| Backend dan data | Data dummy, simulator, mesin rute, WebSocket, chatbot |
| Pitch dan riset | Problem statement, baseline GoBis, naskah dan demo |

## Pitch dan skenario demo

Demo menceritakan satu perjalanan seorang penumpang pertama kali, bukan tur fitur.

1. **Masalah (±1 menit):** "Rina, mahasiswa baru dari luar kota, mau ke mal naik Suroboyo Bus." Tunjukkan ia bolak-balik GoBis dan Google Maps, lalu tampilkan angka baseline dari usability test.
2. **Solusi (±3 menit, live):** Rina mengetik tujuan, memilih opsi rute, berjalan ke halte, melihat bus "2 halte lagi", menekan "Saya sudah naik", menerima peringatan siap-siap turun, lalu tiba. Sisipkan satu pertanyaan ke chatbot: "bayarnya pakai apa?"
3. **Bukti (±1 menit):** perbandingan sebelum–sesudah usability test dan kutipan peserta.
4. **Kelayakan (±1 menit):** diagram arsitektur; simulator bisa diganti data GPS asli lewat kerja sama dengan pengelola GoBis.
5. **Penutup:** satu kalimat posisi, yaitu "pendamping GoBis untuk siapa pun yang baru pertama kali naik".

Siapkan video rekaman alur nomor 2 sebagai cadangan jika internet atau geocoding gagal saat presentasi.
