---
layout: rainforest
title: Citra satelit
description: Pengantar penggunaan citra satelit dalam proyek yang berhubungan dengan hutan hujan guna menganalisa perubahan dari waktu ke waktu di satu area hutan, atau mendapatkan bukti deforestasi, tren seperti peningkatan kegiatan komersil, atau hasil-hasil yang tampak dari degradasi hutan. <p> Bagian laporan <a href="https://library.theengineroom.org/rainforest-tech">Teknologi Hutan Hujan</a>.</p>
image: /media/index/satellite.svg
funder_name: Rainforest Foundation Norway
funder_logo: /images/logos/rfn.svg
funder_link: 'http://regnskog.no/en'
published: true
navigation:
  - Apakah ini
  - Bagaimana hal ini dapat membantu
  - Alat dan perangkat
  - Biaya
  - Risiko dan tantangan
  - Studi kasus
  - Sumber lain
  - Tentang
ref: rt-si
lang: id
categories:
  - id
---

## Citra satelit

> ### Kemungkinan sasaran
> * Mengumpulkan bukti deforestasi atau degradasi hutan
> * Mengumpulkan bukti deforestasi atau degradasi hutan
> * Mengambil bukti pelanggaran yang dilakukan perusahaan tentang cara mereka memanfaatkan lahan
> * Mencatat dan memonitor nilai lingkungan dari tanah atau daerah hutan.

Pengantar ini adalah bagian dari [Panduan tentang penggunaan teknologi untuk memonitor dan berbagi informasi mengenai isu hutan hujan, hak tanah dan hak masyarakat adat](https://library.theengineroom.org/rainforest-tech). Panduan ini didisain sebagai titik awal bagi organisasi dan aktivis yang tertarik untuk menggunakan teknologi demi meningkatkan kerja advokasi, dan merupakan hasil kemitraan antara [Rainforest Foundation Norway](http://www.regnskog.no/en/) dan [The Engine Room](https://theengineroom.org/).

![Rainforest Foundation Norway](/images/logos/rfn-dark.svg) ![The Engine Room](/images/logos/engineroom-dark.png)

[Download Panduan di sini (1.6MB pdf)](http://d5i6is0eze552.cloudfront.net/documents/Publikasjoner/Andre-rapporter/Rainforest-tech-primer.pdf?mtime=20160704134642) atau baca online di bawah ini.

### Apakah ini

* Satelit yang mengitari dunia mengambil foto-foto permukaan bumi dari angkasa, termasuk gambar hutan atau tanah masyarakat.

* Foto tersebut dapat digunakan untuk membuat analisa perubahan hutan dari waktu ke waktu, atau menggabungkannya dengan bentuk informasi lain, termasuk jenis peta lain.

### Bagaimana hal ini dapat membantu

Di masa lalu citra satelit sangat mahal kecuali untuk lembaga, pemerintah dan perusahaan besar.Saat ini ianya mudah diakses dan gratis (atau sangat murah).Membandingkan gambar-gambar dari daerah yang sama secara reguler dapat memberikan bukti deforestasi, tren seperti peningkatan kegiatan komersial, atau hasil-hasil pengrusakan hutan yang dapat terlihat, seperti monokultur (yang mengikuti pola penanaman yang dapat dilihat dari atas).

### Alat dan perangkat

Ada banyak open-source tools yang bagus dan gratis untuk menganalisa citra satelit:

**[QGIS](http://www.qgis.org/en/docs/index.html)** adalah software GIS yang banyak digunakan. QGIS mengijinkan user menambah, mengedit, memanipulasi dan menyajikan data GIS. Ia memiliki fitur-fitur yang tidak terlalu canggih dibandingkan ArcGIS (lihat **Aplikasi ponsel**, di atas), butuh waktu lama untuk dipelajari dan kurang stabil – tapi gratis, dan memiliki komunitas sukarelawan yang aktif memberikan bantuan teknis.Anda perlu mengetahui bahasa pemrograman seperti Python untuk melakukan analisa yang lebih rumit.

**[Global Forest Watch](http://www.globalforestwatch.org/)** (GFW) adalah software yang paling lengkap untuk menganalisa citra satelit dari tutupan hutan dunia. GFW mengumpulkan citra satelit dari para mitra dan dapat diunggah dan dipergunakan kembali dengan gratis.Software ini secara otomatis menganalisa hilangnya hutan, memberikan peringatan untuk kebakaran dan mengirimkan sinyal jika terjadi perubahan di daerah yang dipilih.

### Biaya

Citra satelit bisa gratis [[1]](http://earthexplorer.usgs.gov/) [[2]](http://www.openforis.org/tools/collect-earth.html), sementara pembelian komersial berkisar antara $10 dan $50 per kilometer persegi, bergantung pada kualitas gambarnya.[[3]](http://www.aaas.org/page/high-resolution-satellite-imagery-ordering-and-analysis-handbook#VI.Image%20Ordering) Selain biaya pembelian, menganalisa citra satelit merupakan tugas yang mahal dan memerlukan banyak tenaga, membutuhkan waktu yang mencukupi (menganalisa ribuan gambar beresolusi tinggi), sumber daya (komputer yang cepat) dan keahlian (pakar GIS). Global Forest Watch menjembatani kekurangan ini, namun kurang fleksibel, dan tidak memiliki gambar yang berkualitas tinggi yang diperlukan untuk menunjukkan perubahan yang lebih detail (lihat **resolusi**, di bawah ini).

### **Risiko dan tantangan**

Persoalan utama dari citra satelit adalah **resolusi**, saat ini kualitas gambarnya terlalu rendah untuk dapat menunjukkan perubahan dengan mendetail. Global Forest Watch memberikan citra 50 meter per pixel, yang tidak terlalu tepat (tapi ia juga memiliki citra 30 meter per pixel, namun hanya membuatnya sekali setahun, dan tentu saja tidak cukup cepat jika akan digunakan sebagai bukti deforestasi).Ini membawa kita ke masalah kedua: **pembaruan.** Gambar-gambar seringkali diperbarui dalam sebulan, dan kadang setahun. Hal ini bisa berubah: perusahaan seperti [Planet Labs](http://www.planet.com) menjanjikan citra harian di masa depan, dan [Libra](http://libra.developmentseed.org) memberikan data Landsat setiap dua minggu. [Proyek MAAP](http://maaproject.org/about-maap/) bertujuan untuk menghasilkan informasi terbaru setiap minggu dari Andean Amazon. Ini bagus untuk tujuan analisa historis, namun terkadang tidak praktis untuk monitoring seketika (meskipun **foto udara lakukan-sendiri**, bisa membantu mendapatkan citra yang lebih baru).

### Studi kasus

#### Menggabungkan data satelit dengan sumber lain

Organisasi hutan hujan Indonesia, Warsi, menggabungkan data pemetaan satelit yang mereka peroleh dari Landsat Thematic Mapper (Landsat TM) dan Advanced Land Observation Satellite (ALOS) dengan sumber informasi lain untuk mendokumentasikan penyebaran masyarakat Orang Rimba dan pemanfaatan sumber daya alam oleh mereka.

**Bagaimana hal ini dapat membantu?**

* Warsi mampu menggabungkan data satelit dengan data GPS dan peta digital yang telah mereka buat dengan mengubah peta kertas menjadi konsesi sumber daya alam.

* Citra satelit cukup mahal untuk Warsi.Kadang-kadang awan menutupi bagian penting dari gambar, dan itu artinya mereka perlu menganalisa serangkaian gambar guna mendapatkan tampilan yang lebih tepat.

* Taman Nasional Bukit Duabelas saat ini memberikan hak pemanfaatan untuk Orang Rimba dan secara resmi melindungi daerah tersebut, meskipun deforestasi masih menjadi masalah serius di wilayah tersebut.

#### Memanfaatkan data satelit menjadi bukti penebangan ilegal

Pada Januari 2015 analisa yang dilakukan Greenomics-Indonesia terhadap dua citra Landsat NASA (lihat bagian pemetaan satelit, di bawah) di Pulau Pedang, di lepas pantai Sumatera, mengindentifikasikan bahwa sebagian besar daerah hutan gambut telah ditebangi.

**Bagaimana hal ini dapat membantu?**

* <a href="http://www.greenomics.org/docs/Greenomics_Press-Release_SFMP_Violation-(LowRes).pdf">Greenomics menggunakan</a> informasi ini untuk menyasar perusahaan kertas Asia Pacific Resources International Holdings Limited (APRIL), yang telah berjanji di depan publik untuk menghentikan pembangunan perkebunan baru pada Januari 2014.

* Greenomics memilih menyiarkan informasi ini dalam Bahasa Inggris, dengan memberikan pernyataan beserta gambar-gambar atas klaim mereka. Pada Maret 2015, APRIL secara terbuka mengakui telah terjadi pelanggaran dan memberhentikan satu kontraktor dan manajer perkebunan.

### Sumber lain

* **Global Forest Watch** merupakan sistem monitoring dan peringatan hutan online secara interaktif yang memberikan informasi satelit dan lainnya: [www.globalforestwatch.org](http://www.globalforestwatch.org) dan [https://groups.google.com/forum/#!forum/globalforestwatch](https://groups.google.com/forum/#!forum/globalforestwatch)

* **CLASlite** didisain untuk memberikan informasi terbaru setiap minggunya tentang pemetaan resolusi tinggi dan monitoring hutan menggunakan citra satelit. [http://claslite.carnegiescience.edu/en/index.html](http://claslite.carnegiescience.edu/en/index.html) (Inggris dan Spanyol)

* **AAAS**’s Geospatial Technologies Project berisi detail kasus tentang bagaimana citra satelit dikumpulkan, dikategorisasi dan dianalisa guna mendokumentasikan pelanggaran HAM. http://www.aaas.org/case-studies

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
