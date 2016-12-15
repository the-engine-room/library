---
layout: rainforest
title: Peta online
description: Pengantar penggunaan peta online yang menggabungkan berbagai jenis data yang berbeda dari proyek-proyek hutan hujan, diantaranya untuk tujuan monitoring seketika (menunjukkan tempat-tempat yang memiliki insiden lebih banyak), kampanye (seperti menunjukkan tutupan hutan yang berkurang secara dramatis) atau analisa (mendapatkan pemahaman baru dengan membentangkan (overlay) beberapa jenis data yang berbeda pada satu peta). <p>Bagian laporan <a href="https://library.theengineroom.org/rainforest-tech">Teknologi Hutan Hujan</a>.</p>
image: /media/index/online.svg
funder_name: Rainforest Foundation Norway
funder_logo: /images/logos/rfn.svg
funder_link: http://regnskog.no/en
published: true
navigation:
  - Apakah ini
  - Bagaimana hal ini dapat membantu
  - Alat dan perangkat
  - Biaya
  - Risiko dan tantangan
  - Studi kasus
  - Tentang
ref: rt-om
lang: id
categories:
  - id
---

## Peta online

> ### Kemungkinan sasaran
> * Mengambil bukti pelanggaran yang dilakukan perusahaan tentang cara mereka memanfaatkan lahan.
> * Pencatatan dan monitoring nilai lingkungan dari area lahan.
> * Memberikan bukti konkret kepada pemerintah guna mendorong mereka mengakui tanah adat.

Pengantar ini adalah bagian dari [Panduan tentang penggunaan teknologi untuk memonitor dan berbagi informasi mengenai isu hutan hujan, hak tanah dan hak masyarakat adat](https://library.theengineroom.org/rainforest-tech). Panduan ini didisain sebagai titik awal bagi organisasi dan aktivis yang tertarik untuk menggunakan teknologi demi meningkatkan kerja advokasi, dan merupakan hasil kemitraan antara [Rainforest Foundation Norway](http://www.regnskog.no/en/) dan [The Engine Room](https://theengineroom.org/).

![Rainforest Foundation Norway](/images/logos/rfn-dark.svg) ![The Engine Room](/images/logos/engineroom-dark.png)

[Download Panduan di sini (1.6MB pdf)](http://d5i6is0eze552.cloudfront.net/documents/Publikasjoner/Andre-rapporter/Rainforest-tech-primer.pdf?mtime=20160704134642) atau baca online di bawah ini.

### Apakah ini

* Cara yang sangat kuat, secara visual, dalam menyajikan informasi yang telah Anda kumpulkan terkait isu-isu yang menjadi fokus Anda (seperti melalui pemetaan partisipatif, atau pengumpulan data secara mobile).Peta dapat menjadi: **statis**, seperti gambar dan ilustrasi; **animasi**, misalnya menunjukkan perubahan dari waktu ke waktu; atau **interaktif**, dimana pengguna dapat memperbesar atau memperkecil (zoom in atau zoom out), meng-klik area di peta untuk mendapatkan lebih banyak informasi, atau menambahkan informasi mereka sendiri (*crowdsourcing*).

* Peta dapat dibuat dari nol dan diunggah ke internet, atau menambahkan informasi ke peta online yang sudah ada seperti [OpenStreetMap](http://www.openstreetmap.org/), [Google Maps](https://www.google.com/maps/) atau [Crowdmap](https://crowdmap.com/).

### Bagaimana hal ini dapat membantu

Peta online dapat digunakan untuk **monitoring seketika** (menunjukkan tempat-tempat dengan kejadian yang paling banyak), **kampanye** (menunjukkan bahwa tutupan hutan berkurang secara dramatis) atau **analisa** (mendapatkan wawasan baru dengan menumpukkan berlapis-lapis data yang berbeda di atas satu peta).

### Alat dan perangkat

Peta untuk kampanye tidak harus selalu interaktif.Beberapa peta lebih bagus ditampilkan sebagai infographic – gambar statis yang menyajikan keterangan teks dan kode pewarnaan yang jelas. **Pertama, pilih platform peta online Anda:** Seringkali lebih mudah menggunakan peta interaktif online yang sudah ada, yang telah memasukkan berlapis-lapis informasi seperti jalan raya dan citra satelit. Peta komersil seperti [Google, Bing ](http://www.bing.com/maps)atau [MapQuest](http://www.mapquest.com/). Platform OpenStreetMap mengandung informasi dari para sukarelawan, dan biasanya kurang teliti untuk daerah non-urban yang terpencil.

> #### Memahami koordinat dan polygons
> Jika Anda mengumpulkan data dengan ponsel, drone, atau pemetaan partisipatif, yang terpenting adalah kuasai terlebih dulu dasar-dasar pemetaan. Semua obyek yang ada di peta memiliki koordinat yang menunjukkan lokasinya dengan menggunakan latitude (utara-selatan) dan longitude (timur-barat). Dengan > mengetahui koordinat latitude-longitude sebuah obyek, Anda bisa tahu posisinya (dikenal dengan point-based information). Untuk mengetahui ukuran sebuah obyek, Anda harus menggabungkan titik-titik di sekitarnya ke dalam bentuk poligon tunggal.

**Lalu, buat layer-layer Anda di bagian atas:** Ada banyak cara berbeda untuk menambahkan informasi mulai dari penandaan dasar hingga ‘heat maps’ (yang menunjukkan kapan sebuah jenis kejadian terkonsentrasi di area tertentu). Beberapa situs menyediakan data yang didisain untuk ditambahkan ke peta hutan hujan. ([InfoAmazonia ](http://infoamazonia.org/datasets/)menawarkan peta wilayah Amazon terkait deforestasi dan kebakaran hutan. [Sarawak Geoportal ](http://www.bmfmaps.ch/)memiliki informasi yang sama untuk kawasan Sarawak-Malaysia.)

[MapBox Studio](https://www.mapbox.com/mapbox-studio.), [JEO Wordpress theme ](http://www.jeowp.org/)dan [CARTO](http://carto.com/) menawarkan software yang sangat kuat dan mudah digunakan untuk membuat peta interaktif. Namun Anda harus mengunggah peta Anda ke server MapBox, jadi software ini tidak cocok digunakan untuk informasi sensitif. Panduan untuk [meng-install JEO](http://geojournalism.org/2014/06/portugues-jeo-primeiros-passos/). Membuat sendiri layer interaktif Anda seringkali melibatkan programming tools yang disebut Javascript libraries ([Leaflet.js](http://leafletjs.com/) and [OpenLayers](http://www.openlayers.org/) adalah yang paling umum).

### Biaya

Biaya mendisain dan menciptakan peta interaktif online bergantung pada seberapa mudah alat tersebut digunakan, dan keahlian pemrograman apa yang diperlukan. Jika Anda bukan programmer, alat yang paling mudah adalah [CARTO](http://carto.com/) dan [MapBox](https://www.mapbox.com) - tapi Anda harus membayar biaya jika membuat peta skala besar atau yang rumit dengan menggunakan alat ini (walaupun keduanya tersedia dalam pilihan gratis tapi dengan fungsi yang terbatas).

Menggunakan libraries seperti [Leaflet.js](http://leafletjs.com/) dan OpenStreetMaps gratis tapi perlu programmer yang ahli. Peta yang dihasilkan provider komersil seringkali gratis di awal namun akan menjadi mahal jika digunakan dengan secara luas. (Google Maps gratis untuk memuat hingga 25.000 peta per hari (jumlah yang sangat banyak), namun lebih dari itu menjadi mahal.)

### Risiko dan tantangan

Perusahaan menyimpan informasi tentang kapan, di mana dan bagaimana Anda memuat peta di platform pemetaan komersil, artinya peta publik di platform komersil dapat menunjukkan lokasi individu-individu yang mengunggah informasi, menempatkan mereka pada risiko. Sementara itu, menghindari kesalahan adalah hal yang paling penting: informasi yang disajikan di tempat yang salah bisa menghancurkan maksud dari kampanye.

### Studi kasus

#### Dampak peta animasi dalam menunjukkan hilangnya tutupan hutan

Open Development Cambodia bekerja untuk mengumpulkan dan memberikan informasi kuantitatif tentang isu-isu tanah, ekonomi dan lingkungan hidup di Kamboja.Mereka menggunakan informasi perubahan tutupan hutan selama periode sepuluh tahun untuk membuat video *time-lapse* yang menunjukkan hilangnya tutupan hutan.

**Bagaimana hal ini dapat membantu?**

* Video ini mudah dibuat dan cepat karena ODC sudah memiliki semua informasi yang telah disiapkan dan diunggah ke peta interaktif mereka.

* Video time-lapse adalah alat advokasi yang efektif karena dengan jelas menunjukkan besarnya kehilangan tutupan hutan di Kamboja. [Video ini sudah dilihat sebanyak lebih dari dua ribu kali](http://www.opendevelopmentcambodia.net/briefings/forest-cover/http://www.opendevelopmentcambodia.net/briefings/forest-cover/).

#### Pemetaan sumber daya dan masyarakat di Amazon

RAISG (Jaringan Informasi Georeferenced Socio-Environmental di Amazon) adalah proyek multi-tahun yang bertujuan untuk meningkatkan kesadaran dan mengadvokasi isu hak-hak adat dan lingkungan, dan telah mengumpulkan informasi dari daerah-daerah terlindung, tanah adat, daerah aliaran sungai, dan penebangan ilegal.

**Bagaimana hal ini dapat membantu?**

* RAISG menyajikan semua informasi yang dikumpulkan melalui peta [interaktif online](http://raisg.socioambiental.org/mapa-online/index.html), dan juga peta statis yang dapat diunduh bersama dengan [infographics](http://raisg.socioambiental.org/amazonia-2012-areas-protegidas-e-territorios-indigenas#english), dan laporan.

* Peta RAISG adalah alat yang kuat untuk advokasi berbasis-bukti karena metodologinya sangat kuat. [Para organisasi mitra mereka juga dapat mengandalkan informasi yang telah dikumpulkan ini ketika melobi pemerintah](http://raisg.socioambiental.org/system/files/Amazonia%20under%20pressure16_05_2013.pdf).


---

### Tentang

Situs ini dibuat oleh [Rainforest Foundation Norway](http://regnskog.no/en/) dan [The Engine Room](https://theengineroom.org/) sebagai pengantar penggunaan teknologi untuk memonitor dan berbagi informasi mengenai isu hutan hujan, hak tanah dan hak masyarakat adat. [Download Panduan di sini](http://d5i6is0eze552.cloudfront.net/documents/Publikasjoner/Andre-rapporter/Rainforest-tech-primer.pdf?mtime=20160704134642).

Rainforest Foundation Norway (RFN) adalah salah satu organisasi utama di dunia di bidang perlindungan hutan hujan berbasis hak-hak. Misinya adalah mendukung masyarakat adat dan masyarakat tradisional di hutan hujan dunia dalam upaya mereka melindungi lingkungannya dan memenuhi hak-hak mereka dengan membantu dalam hal:

- Mengamankan dan mengendalikan sumber daya alam yang diperlukan bagi kehidupan jangka panjang dan mengelola sumber daya tersebut dalam cara yang tidak membahayakan lingkungan, melanggar budaya mereka atau membahayakan masa depan mereka;
- mengembangkan cara-cara untuk melindungi hak individu dan hak kolektif mereka dan untuk mendapatkan, mengelola, dan mengendalikan layanan-layanan dasar dari negara.

RFN berkolaborasi erat dengan lebih dari 70 organisasi lingkungan, masyarakat adat dan HAM lokal dan nasional di 11 negara di kawasan Amazon, Afrika Tengah, Asia Tenggara, dan Oseania.

The Engine Room adalah organisasi internasional yang membantu para aktivis, organisasi perubahan sosial, dan agen-agen perubahan dalam memanfaatkan data dan teknologi sebaik mungkin guna meningkatkan dampak kegiatan mereka. The Engine Room memberikan dukungan langsung, di tingkat-proyek untuk organisasi perubahan sosial; mengumpulkan masyarakat guna mengkoordinir ide-ide yang muncul dan mengumpulkan para praktisi; dan mendokumentasikan serta mempublikasikan temuan-temuan guna membantu siapapun di sektor ini dalam mengambil keputusan yang tepat mengenai penggunaan data dan teknologi.

#### Kontributor

[Tom Walker](https://www.theengineroom.org/our_team/tom-walker/) dan [Tin Geber](https://www.theengineroom.org/our_team/tin-geber/) meriset dan menulis narasi utama, sementara [Ruth Miller](http://ruthmiller.net/) memimpin disain dan kreasi visual. Vemund Olsen dan Christopher Wilson memberikan input berharga dan mengedit. Sourcecode situs ini tersedia di [Github](https://github.com/the-engine-room/library/). Komentar atau pertanyaan? Kontak [post@theengineroom.org](mailto:post@theengineroom.org) atau [rainforest@rainforest.no](mailto:rainforest@rainforest.no).

---

[Kembali ke Perpustakaan](https://library.theengineroom.org/)
