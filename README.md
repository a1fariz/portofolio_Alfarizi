# Alfa Rizi — Software Development Portfolio

Portfolio untuk frontend, backend, full-stack web, Flutter/mobile, dan aplikasi AI, disertai pilihan CV sesuai posisi.

**[Buka portfolio](https://alfarizi.my.id)** · [GitHub](https://github.com/a1fariz) · [LinkedIn](https://www.linkedin.com/in/alfa-rizi-65b483412)

Mahasiswa D3 Manajemen Informatika, Universitas Nasional PASIM — **sedang menyusun tugas akhir**.

## Jelajahi sesuai kebutuhan

| Bidang | Contoh pekerjaan |
| --- | --- |
| C++ / Gameplay | Turnforge: BFS, giliran, AI deterministik, Bertahan dan prakiraan aksi musuh |
| Backend | Catat Uang, ReLoop, ApexGrid, FinanceAll |
| Full stack | ReLoop, ApexGrid, Finance Feasibility, FinanceAll |
| Frontend | Arte, Vanguard IELTS, Renshuu, Solar Explorer |
| Python dan aplikasi AI | StudyMate AI, Finance Feasibility |
| Flutter/mobile | Catat Uang |
| IT support | Pengalaman magang dukungan hardware/OS dan validasi data di PT Resika Cemerlang |

Halaman utama menampilkan tujuh project lintas bidang. Filter membantu memilih project yang relevan; studi kasus menjelaskan kontribusi, keputusan teknis, bukti dan batas implementasi.

## Project dan bukti

| Project | Ringkasan | Tinjau |
| --- | --- | --- |
| Turnforge | Game taktis C++17/raylib, preview musuh read-only, 24 skenario aturan dan demo 66 detik | [Source dan build Windows](https://github.com/a1fariz/turnforge) |
| Catat Uang | Flutter/SQLite, API Go/PostgreSQL, sinkronisasi eksplisit, pembayaran idempotent dan backup terenkripsi | [Source dan verifikasi](https://github.com/a1fariz/CatatUang) |
| ReLoop | Quarkus/Next.js, ledger double-entry, checkout lease dan outbox | [Source dan panduan tes](https://github.com/a1fariz/ReLoop) |
| ApexGrid | React dan layanan Spring Boot untuk reservasi tiket | [Source dan arsitektur](https://github.com/a1fariz/ApexGrid) |
| StudyMate AI | FastAPI, pemrosesan PDF, vector search dan RAG dengan referensi halaman | [Source dan pengujian](https://github.com/a1fariz/StudyMateAI) |
| Arte | Galeri React, form kurasi, aksesibilitas dan Web Audio | [Source dan screenshot](https://github.com/a1fariz/arte) |
| Vanguard IELTS | UI latihan empat keterampilan, SRS dan Web Speech API | [Source](https://github.com/a1fariz/Vanguard-IELTS) |

Project lainnya tersedia lewat **All projects**. Konfigurasi CI, aturan bisnis dan jumlah modul tidak digunakan sebagai pengganti benchmark production.

## Screenshot dan rekaman aplikasi

CatatUang menggunakan tiga screenshot Android asli dan rekaman demo offline dua menit dengan data fiktif. Gambar asli disimpan tanpa pengeditan piksel di `public/images/projects/catat-uang/`; video dan provenance/checksum tersedia di `public/videos/`. Rekaman tidak menunjukkan sinkronisasi cloud atau penerimaan perangkat fisik. Halaman studi kasus menyertakan pemutar video, screenshot berukuran penuh, serta tautan hasil capture CI.

Turnforge menampilkan dua screenshot landscape asli dan replay otomatis satu pertandingan. Pemutar memakai video H.264 720p/30 FPS, caption WebVTT dan provenance/checksum. Angka FPS video terpisah dari pengukuran performa game; studi kasus menjelaskan bantuan AI dan pekerjaan validasi yang masih tersisa.

## Sembilan pilihan CV

Software Developer, Master Resume, Full Stack, Frontend, Go/Java Backend, Java Backend, AI/Python, Flutter/Mobile dan IT Support. Masing-masing memakai ringkasan, urutan project dan keahlian sesuai posisi. Tautan lama tetap dipertahankan.

- Data menu: `src/data/cv.ts`
- Sumber: `generate-cvs.js` dan `generate-cv-template.js`
- Hasil: `public/cv/`, sembilan versi dan empat salinan nama lama

Regenerasi dengan `npm run generate:cv`. Generator memakai Playwright; atur `CHROME_PATH` bila Chrome berada di lokasi berbeda. Periksa jumlah halaman dan render PDF setelah mengubah konten.

## Menjalankan lokal

Prasyarat: Node.js 20.9+ dan npm.

```sh
git clone https://github.com/a1fariz/portofolio_Alfarizi.git
cd portofolio_Alfarizi
npm ci
npm run dev
```

Buka `http://localhost:3000`.

```sh
npm run lint
npm run build
npm run start
```

Font Geist diambil melalui `next/font/google` pada build sehingga memerlukan akses jaringan. Jika worker Turbopack bermasalah pada lingkungan lokal, jalankan build pembanding dengan `npm run build -- --webpack`.

Setelah server berjalan, cek filter Game Dev, video landscape, tampilan HP dan regresi video portrait dengan `node scripts/verify-turnforge.cjs http://localhost:3000`. Skrip memakai Chrome lokal; atur `CHROME_PATH` bila diperlukan. Screenshot dan hasil pemeriksaan disimpan di `.next/turnforge-qa/`.

## Struktur

```text
src/app/                  Halaman, metadata, sitemap dan manifest
src/app/work/[id]/        Studi kasus project
src/components/          Filter project, menu CV dan komponen tampilan
src/data/realPortfolio.ts Project, pendidikan dan pengalaman
src/data/cv.ts            Pilihan dan tautan CV
public/images/           Foto dan gambar project
public/cv/               PDF CV
```

Next.js App Router, TypeScript, Tailwind CSS dan Lucide React. Halaman project diprerender dengan `generateStaticParams`; tampilan mendukung keyboard dan preferensi reduced motion.

## Kontak

[alfarizi.developer@gmail.com](mailto:alfarizi.developer@gmail.com)
