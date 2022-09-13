<template>
  <v-app id="home" class="grey lighten-5">
    <v-cotaniner fluid>
      <!-- Desktop -->
      <div class="d-none d-md-block">
        <!-- Elemen Header -->
        <v-row>
          <v-col cols="12" style="position: absolute">
            <v-img
              src="../assets/features-img/top-bg.svg"
              width="70%"
              style="position: absolute; right: 0"
            ></v-img>
          </v-col>
          <v-col cols="5" class="d-flex justify-center">
            <div class="d-flex align-center">
              <div>
                <p class="font-weight-bold display-2">MISTAR</p>
                <p class="display-1">
                  Manajemen Informasi <br />
                  Sekolah Terintergrasi
                </p>
                <div class="d-flex">
                  <v-btn
                    x-large
                    rounded
                    class="button-1"
                    to="/"
                    >Paket</v-btn
                  >
                  <v-btn
                    x-large
                    rounded
                    outlined
                    class="button-2"
                    to="/contact-us"
                    >Contact Us</v-btn
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="7">
            <v-img
              src="../assets/homepage-img/header-home.svg"
              width="100%"
              class="mt-16"
            ></v-img>
          </v-col>
        </v-row>

        <!-- Elemen Social Button -->
        <div class="d-flex justify-center">
          <p class="mx-16">
            <v-icon x-large left color="primary">mdi-facebook</v-icon>
            MISTAR OFFICIAL
          </p>
          <p class="mx-16">
            <v-icon x-large left color="#E1306C">mdi-instagram</v-icon>
            MISTAR OFFICIAL
          </p>
          <p class="mx-16">
            <v-icon x-large left color="#00ACED">mdi-twitter</v-icon>
            MISTAR OFFICIAL
          </p>
        </div>

        <br /><br />

        <!-- Elemen About -->
        <div class="d-flex justify-center mt-16">
          <v-card class="content pa-4">
            <v-row>
              <v-col cols="5">
                <v-img
                  src="../assets/homepage-img/about-mistar.svg"
                  width="100%"
                  style="position: relative; margin-top: -20%"
                ></v-img>
              </v-col>
              <v-col cols="7">
                <v-card-text>
                  <p class="display-1">About <strong>MISTAR</strong></p>
                  <p class="subtitle-1 about-desc">
                    <strong>Manajemen Informasi Sekolah Terintegrasi</strong>
                    merupakan sebuah software pendidikan multiplatform berbasis
                    cloud yang bertujuan untuk mempermudah proses administratif
                    dan proses Kegiatan Belajar Mengajar serta mengelola data
                    Sekolah ; Database Siswa, Guru, Tenaga Kependidikan, Nilai,
                    Bimbingan Konseling, Presensi, Keuangan (SPP/Iuran), dan
                    lain lain.
                  </p>
                  <p class="subtitle-1 about-desc">
                    <strong>MISTAR</strong> juga memberikan solusi untuk Kepala
                    Sekolah, Guru, Murid dan Orang Tua agar bisa terhubung
                    secara 360º dengan cara Digital maupun Tatap Muka untuk
                    menjamin Kualitas Pembelajaran.
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </div>

        <!-- Elemen Visi & Misi -->
        <div class="mt-16">
          <p class="display-1 text-center">
            <strong>Visi</strong> & <strong>Misi</strong>
          </p>
          <div class="d-flex justify-center">
            <v-card class="content white pa-4" flat>
              <v-row>
                <v-col lg="10" cols="12">
                  <v-row>
                    <v-col cols="6">
                      <v-card-text>
                        <div class="d-flex">
                          <div><p class="number">1</p></div>
                          <p class="ml-4 subtitle-1">
                            Menjadikan MISTAR sebagai solusi total yang terus
                            berinovasi untuk mengatasipermasalahan dan tantangan
                            yang dihadapi lembaga pendidikan di masa kini dan di
                            masa depan. Mengaplikasikan solusi MISTAR sebagai
                            platform manajemen operasional, sistem informasi dan
                            pusat kegiatan ekonomi di lembaga pendidikan
                            nasional. Mengadakan pelatihan secara berkala
                            terhadap semua SDM sekolah untuk pengaplikasian
                            solusi MISTAR dan program pendidikan lainnya.
                          </p>
                        </div>
                        <div class="d-flex">
                          <div><p class="number">2</p></div>
                          <p class="ml-4 subtitle-1">
                            Mengaplikasikan solusi MISTAR sebagai platform
                            manajemen operasional, sistem informasi dan pusat
                            kegiatan ekonomi di lembaga pendidikan nasional.
                            Mengadakan pelatihan secara berkala terhadap semua
                            SDM sekolah untuk pengaplikasian solusi MISTAR dan
                            program pendidikan lainnya.
                          </p>
                        </div>
                        <div class="d-flex">
                          <div><p class="number">3</p></div>
                          <p class="ml-4 subtitle-1">
                            Mengadakan pelatihan secara berkala terhadap semua
                            SDM sekolah untuk pengaplikasian solusi MISTAR dan
                            program pendidikan lainnya.
                          </p>
                        </div></v-card-text
                      >
                    </v-col>
                    <v-col cols="6">
                      <v-card-text>
                        <div class="d-flex">
                          <div><p class="number">4</p></div>
                          <p class="ml-4 subtitle-1">
                            Melakukan penelitian dan pengembangan terhadap
                            teknologi perangkat lunak dan perangkat keras untuk
                            terus berinovasi. Menyerap aspirasi para tenaga
                            didik, masyarakat dan siswa didik untuk pengembangan
                            pelayanan MISTAR mengikuti perkembangan jaman dan
                            teknologi. Menggandeng pihak ketiga untuk
                            berkolaborasi dalam penambahan fitur layanan yang
                            berdaya guna dan bermanfaat bagi semua stakeholder
                            MISTAR.
                          </p>
                        </div>
                        <div class="d-flex">
                          <div><p class="number">5</p></div>
                          <p class="ml-4 subtitle-1">
                            Menyerap aspirasi para tenaga didik, masyarakat dan
                            siswa didik untuk pengembangan pelayanan MISTAR
                            mengikuti perkembangan jaman dan teknologi.
                            Menggandeng pihak ketiga untuk berkolaborasi dalam
                            penambahan fitur layanan yang berdaya guna dan
                            bermanfaat bagi semua stakeholder MISTAR.
                          </p>
                        </div>
                        <div class="d-flex">
                          <div><p class="number">6</p></div>
                          <p class="ml-4">
                            Menggandeng pihak ketiga untuk berkolaborasi dalam
                            penambahan fitur layanan yang berdaya guna dan
                            bermanfaat bagi semua stakeholder MISTAR.
                          </p>
                        </div>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col lg="2">
                  <v-img
                    class="visi-misi-img d-none d-lg-flex"
                    src="../assets/homepage-img/visi-misi.svg"
                    width="100%"
                    style="position: relative; margin-top: -20%"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </div>

        <!-- Elemen Visi & Misi 2 -->
        <div class="mt-16">
          <div class="white d-flex justify-center">
            <v-card flat class="content">
              <v-row>
                <v-col cols="6">
                  <div class="d-flex align-center">
                    <div>
                      <v-img
                        src="../assets/homepage-img/compact.svg"
                        class="visi-misi-2-img"
                      ></v-img>
                    </div>
                    <v-card-text class="ma-4">
                      <span class="font-weight-bold title">Compact</span>
                      <p class="subtitle-1">
                        Sistem yang compact dan saling terintegrasi
                      </p>
                    </v-card-text>
                  </div>

                  <div class="d-flex align-center">
                    <div>
                      <v-img
                        src="../assets/homepage-img/secure.svg"
                        class="visi-misi-2-img"
                      ></v-img>
                    </div>
                    <v-card-text class="ma-4">
                      <span class="font-weight-bold title">Secure</span>
                      <p class="subtitle-1">
                        - Keamanan Data terjamin Cloud Local (ID) <br />
                        - Security Level Kelas Internasional (ISO/IEC 27017
                        cloud security)
                      </p>
                    </v-card-text>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex align-center">
                    <div>
                      <v-img
                        src="../assets/homepage-img/tested.svg"
                        class="visi-misi-2-img"
                      ></v-img>
                    </div>
                    <v-card-text class="ma-4">
                      <span class="font-weight-bold title">Tested</span>
                      <p class="subtitle-1">
                        Sistem sudah melalui RnD yang panjang dan berjalan 1
                        tahun lebih
                      </p>
                    </v-card-text>
                  </div>
                  <div class="d-flex align-center">
                    <div>
                      <v-img
                        src="../assets/homepage-img/dashboard.svg"
                        class="visi-misi-2-img"
                      ></v-img>
                    </div>
                    <v-card-text class="ma-4">
                      <span class="font-weight-bold title">Dashboard</span>
                      <p class="subtitle-1">
                        Sistem dilengkapi dengan hasil analisa data yang di
                        tampilkan pada Dashboard
                      </p>
                    </v-card-text>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </div>

        <!-- Elemen Platform -->
        <div class="mt-16">
          <div class="d-flex justify-center">
            <div class="content">
              <v-row>
                <v-col cols="6">
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-card class="pa-4 mt-8" style="z-index: 2">
                        <v-img
                          src="../assets/homepage-img/platform-1.svg"
                          width="100%"
                        >
                        </v-img>
                      </v-card>
                    </v-col>
                    <v-col cols="6">
                      <v-card
                        class="pa-4"
                        style="position: relative; left: -10%"
                      >
                        <v-img
                          src="../assets/homepage-img/platform-2.svg"
                          width="100%"
                          class="white"
                        >
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="6" class="pl-8">
                  <p class="font-weight-bold title">Platform</p>
                  <p class="subtitle-1">
                    <span class="font-weight-bold">MISTAR</span> dapat diakses
                    melalui Mobile Apps (Android & iOS) dan Web Apps/ Web
                    Browser (PC, Laptop, & Tablet) sehingga memungkinkan anda
                    untuk dapat mengakses data Sekolah kapanpun dan dimanapun
                    anda berada selama terhubung dengan internet.
                  </p>
                  <div style="width: 70%">
                    <v-row>
                      <v-col cols="6">
                        <v-img
                          src="../assets/homepage-img/google-play.svg"
                          width="80%"
                        ></v-img>
                      </v-col>
                      <v-col cols="6">
                        <v-img
                          src="../assets/homepage-img/app-store.svg"
                          width="80%"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>

        <!-- Elemen Contact Us -->
        <div class="mt-16">
          <div class="d-flex justify-center">
            <v-card flat class="contact-us">
              <v-row no-gutters>
                <v-col cols="7" class="d-flex align-center pa-8">
                  <v-card-text>
                    <p class="display-1">
                      <strong>Mulai 15 Ribu Rupiah /</strong> Bulan
                    </p>
                    <p class="subtitle-1">
                      Sudah bisa menikmati fitur-fitur MISTAR
                    </p>
                    <v-btn x-large outlined rounded color="success"
                      >Contact Us</v-btn
                    >
                  </v-card-text>
                </v-col>
                <v-col cols="5"
                  ><v-img
                    src="../assets/homepage-img/contact-us.svg"
                    width="100%"
                  ></v-img
                ></v-col>
              </v-row>
            </v-card>
          </div>
        </div>

        <!-- Elemen Paket Produk Mistar -->
        <div class="mt-16">
          <p class="display-1 text-center">
            Paket Produk <strong>MISTAR</strong>
          </p>

          <v-container>
            <v-row class="mt-16">
              <v-col cols="6" class="d-flex justify-end">
                <v-card class="produk-mistar">
                  <div
                    style="position: relative; margin-top: -20%"
                    class="d-flex justify-center"
                  >
                    <div class="pa-4 primary rounded-circle" style="width: 30%">
                      <v-img
                        src="../assets/homepage-img/premium.svg"
                        width="100%"
                      ></v-img>
                    </div>
                  </div>
                  <v-card-text class="text-center">
                    <p class="display-1 font-weight-bold">Premium</p>
                    <div class="pa-4 grey lighten-4">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt nam tempore quas nesciunt voluptatibus
                        reiciendis, obcaecati, sed veritatis quod deserunt,
                        repellat molestias ducimus vero aliquam dignissimos non
                        odio dolore? Est.
                      </p>
                    </div>

                    <v-btn class="success mt-8" rounded x-large width="80%"
                      >Detail
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="6" class="d-flex">
                <v-card class="produk-mistar">
                  <div
                    style="position: relative; margin-top: -20%"
                    class="d-flex justify-center"
                  >
                    <div class="pa-4 primary rounded-circle" style="width: 30%">
                      <v-img
                        src="../assets/homepage-img/premium+.svg"
                        width="100%"
                      >
                      </v-img>
                    </div>
                  </div>
                  <v-card-text class="text-center">
                    <p class="display-1 font-weight-bold">Premium+</p>
                    <div class="pa-4 grey lighten-4">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae quis officiis aspernatur vel neque totam a
                        ratione mollitia quos delectus dolores, excepturi
                        commodi tempora eos accusantium quidem atque deserunt
                        minima.
                      </p>
                    </div>

                    <v-btn class="success mt-8" rounded x-large width="80%"
                      >Detail</v-btn
                    >
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <!-- Elemen Subscribe Our Newsletter -->
        <div class="mt-16">
          <p class="display-1 text-center">
            <strong>Subscribe </strong> Our Newsletter
          </p>
          <div class="d-flex justify-center">
            <v-card
              flat
              class="subscribe pa-8 d-flex align-center"
              style="z-index: 2"
            >
              <v-text-field
                filled
                rounded
                hide-details="auto"
                style="border-radius: 50px"
                placeholder="example@gmail.com"
              >
              </v-text-field>
              <v-btn rounded class="primary">
                Subscribe
                <v-icon right>mdi-send</v-icon>
              </v-btn>
            </v-card>
          </div>
        </div>
      </div>

      <!-- Mobile -->
      <div class="d-md-none d-sm-block">
        <!-- Elemen Header -->
        <div>
          <v-row>
            <v-col cols="12" class="mt-16">
              <v-img
                src="../assets/homepage-img/header-home.svg"
                width="100%"
              ></v-img>
            </v-col>
            <v-col cols="12" class="text-center">
              <p class="font-weight-bold display-2">MISTAR</p>
              <p class="display-1">
                Manajemen Informasi <br />
                Sekolah Terintergrasi
              </p>
              <div class="d-flex justify-center">
                <v-btn
                  x-large
                  rounded
                  class="success btn-1"
                  to="/"
                  style="text-transform: capitalize"
                  >Paket</v-btn
                >
                <v-btn
                  x-large
                  rounded
                  outlined
                  plain
                  class="success--text ml-4 btn-2"
                  to="/"
                  style="text-transform: capitalize"
                  >Contact Us</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Elemen Social Button -->
        <div class="d-flex justify-center mt-8">
          <div class="mx-8 text-center">
            <v-icon large left color="primary">mdi-facebook</v-icon>
            <p class="subtitle-2">MISTAR OFFICIAL</p>
          </div>
          <div class="mx-8 text-center">
            <v-icon large left color="#E1306C">mdi-instagram</v-icon>
            <p class="subtitle-2">MISTAR OFFICIAL</p>
          </div>
          <div class="mx-8 text-center">
            <v-icon large left color="#00ACED">mdi-twitter</v-icon>
            <p class="subtitle-2">MISTAR OFFICIAL</p>
          </div>
        </div>

        <!-- Elemen About -->
        <div class="d-flex justify-center mt-16">
          <v-card class="content">
            <v-row>
              <v-col cols="12">
                <v-img
                  src="../assets/homepage-img/about-mistar.svg"
                  width="80%"
                  class="mx-auto"
                  style="position: relative; margin-top: -10%"
                ></v-img>
              </v-col>
              <v-col cols="12">
                <p class="display-1 text-center">
                  About <strong>MISTAR</strong>
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card-text class="about-1">
                  <p class="subtitle-1 about-desc">
                    <strong>Manajemen Informasi Sekolah Terintegrasi</strong>
                    merupakan sebuah software pendidikan multiplatform berbasis
                    cloud yang bertujuan untuk mempermudah proses administratif
                    dan proses Kegiatan Belajar Mengajar serta mengelola data
                    Sekolah ; Database Siswa, Guru, Tenaga Kependidikan, Nilai,
                    Bimbingan Konseling, Presensi, Keuangan (SPP/Iuran), dan
                    lain lain.
                  </p>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card-text class="about-2">
                  <p class="subtitle-1 about-desc">
                    <strong>MISTAR</strong> juga memberikan solusi untuk Kepala
                    Sekolah, Guru, Murid dan Orang Tua agar bisa terhubung
                    secara 360º dengan cara Digital maupun Tatap Muka untuk
                    menjamin Kualitas Pembelajaran.
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </div>

        <!-- Elemen Visi Misi -->
        <div class="mt-16">
          <p class="text-center display-1">
            <strong>Visi</strong> & <strong>Misi</strong>
          </p>
          <div class="d-flex justify-center">
            <v-card class="content white pa-4" flat>
              <v-row no-gutters>
                <v-col cols="12" sm="6">
                  <v-card-text>
                    <div class="d-flex">
                      <div><p class="number">1</p></div>
                      <p class="ml-4 subtitle-1">
                        Menjadikan MISTAR sebagai solusi total yang terus
                        berinovasi untuk mengatasipermasalahan dan tantangan
                        yang dihadapi lembaga pendidikan di masa kini dan di
                        masa depan. Mengaplikasikan solusi MISTAR sebagai
                        platform manajemen operasional, sistem informasi dan
                        pusat kegiatan ekonomi di lembaga pendidikan nasional.
                        Mengadakan pelatihan secara berkala terhadap semua SDM
                        sekolah untuk pengaplikasian solusi MISTAR dan program
                        pendidikan lainnya.
                      </p>
                    </div>
                    <div class="d-flex">
                      <div><p class="number">2</p></div>
                      <p class="ml-4 subtitle-1">
                        Mengaplikasikan solusi MISTAR sebagai platform manajemen
                        operasional, sistem informasi dan pusat kegiatan ekonomi
                        di lembaga pendidikan nasional. Mengadakan pelatihan
                        secara berkala terhadap semua SDM sekolah untuk
                        pengaplikasian solusi MISTAR dan program pendidikan
                        lainnya.
                      </p>
                    </div>
                    <div class="d-flex">
                      <div><p class="number">3</p></div>
                      <p class="ml-4 subtitle-1">
                        Mengadakan pelatihan secara berkala terhadap semua SDM
                        sekolah untuk pengaplikasian solusi MISTAR dan program
                        pendidikan lainnya.
                      </p>
                    </div></v-card-text
                  >
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text>
                    <div class="d-flex">
                      <div><p class="number">4</p></div>
                      <p class="ml-4 subtitle-1">
                        Melakukan penelitian dan pengembangan terhadap teknologi
                        perangkat lunak dan perangkat keras untuk terus
                        berinovasi. Menyerap aspirasi para tenaga didik,
                        masyarakat dan siswa didik untuk pengembangan pelayanan
                        MISTAR mengikuti perkembangan jaman dan teknologi.
                        Menggandeng pihak ketiga untuk berkolaborasi dalam
                        penambahan fitur layanan yang berdaya guna dan
                        bermanfaat bagi semua stakeholder MISTAR.
                      </p>
                    </div>
                    <div class="d-flex">
                      <div><p class="number">5</p></div>
                      <p class="ml-4 subtitle-1">
                        Menyerap aspirasi para tenaga didik, masyarakat dan
                        siswa didik untuk pengembangan pelayanan MISTAR
                        mengikuti perkembangan jaman dan teknologi. Menggandeng
                        pihak ketiga untuk berkolaborasi dalam penambahan fitur
                        layanan yang berdaya guna dan bermanfaat bagi semua
                        stakeholder MISTAR.
                      </p>
                    </div>
                    <div class="d-flex">
                      <div><p class="number">6</p></div>
                      <p class="ml-4">
                        Menggandeng pihak ketiga untuk berkolaborasi dalam
                        penambahan fitur layanan yang berdaya guna dan
                        bermanfaat bagi semua stakeholder MISTAR.
                      </p>
                    </div>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </div>

        <!-- Elemen Visi Misi 2 -->
        <div class="mt-16">
          <div class="white d-flex justify-center">
            <v-card flat class="content pa-4">
              <v-row>
                <v-col cols="6">
                  <div>
                    <div>
                      <v-img
                        src="../assets/homepage-img/compact.svg"
                        class="visi-misi-2-img mx-auto"
                      ></v-img>
                    </div>
                    <v-card-text class="text-center">
                      <p class="font-weight-bold title">Compact</p>
                      <p class="subtitle-1">
                        Sistem yang compact dan saling terintegrasi
                      </p>
                    </v-card-text>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <div>
                      <v-img
                        src="../assets/homepage-img/secure.svg"
                        class="visi-misi-2-img mx-auto"
                      ></v-img>
                    </div>
                    <v-card-text class="text-center">
                      <p class="font-weight-bold title">Secure</p>
                      <p class="subtitle-1">
                        - Keamanan Data terjamin Cloud Local (ID) <br />
                        - Security Level Kelas Internasional (ISO/IEC 27017
                        cloud security)
                      </p>
                    </v-card-text>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <div>
                      <v-img
                        src="../assets/homepage-img/tested.svg"
                        class="visi-misi-2-img mx-auto"
                      ></v-img>
                    </div>
                    <v-card-text class="text-center">
                      <p class="font-weight-bold title">Tested</p>
                      <p class="subtitle-1">
                        Sistem sudah melalui RnD yang panjang dan berjalan 1
                        tahun lebih
                      </p>
                    </v-card-text>
                  </div>
                </v-col>

                <v-col cols="6">
                  <div>
                    <div>
                      <v-img
                        src="../assets/homepage-img/dashboard.svg"
                        class="visi-misi-2-img mx-auto"
                      ></v-img>
                    </div>
                    <v-card-text class="text-center">
                      <p class="font-weight-bold title">Dashboard</p>
                      <p class="subtitle-1">
                        Sistem dilengkapi dengan hasil analisa data yang di
                        tampilkan pada Dashboard
                      </p>
                    </v-card-text>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </div>

        <!-- Elemen Platform -->
        <div class="mt-16">
          <div class="d-flex justify-center">
            <div class="content">
              <v-row>
                <v-col cols="12" class="pa-12">
                  <v-row no-gutters>
                    <v-col cols="6">
                      <v-card class="pa-4 mt-8" style="z-index: 2">
                        <v-img
                          src="../assets/homepage-img/platform-1.svg"
                          width="100%"
                        >
                        </v-img>
                      </v-card>
                    </v-col>
                    <v-col cols="6">
                      <v-card
                        class="pa-4"
                        style="position: relative; left: -10%"
                      >
                        <v-img
                          src="../assets/homepage-img/platform-2.svg"
                          width="100%"
                          class="white"
                        >
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" class="mt-n12 text-center platform-desc">
                  <p class="font-weight-bold title">Platform</p>
                  <p class="subtitle-1">
                    <span class="font-weight-bold">MISTAR</span> dapat diakses
                    melalui Mobile Apps (Android & iOS) dan Web Apps/ Web
                    Browser (PC, Laptop, & Tablet) sehingga memungkinkan anda
                    untuk dapat mengakses data Sekolah kapanpun dan dimanapun
                    anda berada selama terhubung dengan internet.
                  </p>
                  <v-row>
                    <v-col cols="6">
                      <v-img
                        src="../assets/homepage-img/google-play.svg"
                        width="50%"
                        class="ml-auto"
                      ></v-img>
                    </v-col>
                    <v-col cols="6">
                      <v-img
                        src="../assets/homepage-img/app-store.svg"
                        width="50%"
                      ></v-img>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>

        <!-- Elemen Contact Us -->
        <div class="mt-16">
          <div class="d-flex justify-center">
            <v-card flat class="contact-us">
              <v-row no-gutters>
                <v-col cols="12">
                  <div>
                    <v-img
                      src="../assets/homepage-img/contact-us.svg"
                      width="80%"
                      class="mx-auto"
                    ></v-img>
                  </div>
                </v-col>
                <v-col cols="12">
                  <v-card-text class="text-center">
                    <p class="display-1">
                      <strong>Mulai 15 Ribu Rupiah /</strong> Bulan
                    </p>
                    <p class="subtitle-1">
                      Sudah bisa menikmati fitur-fitur MISTAR
                    </p>
                    <v-btn x-large outlined rounded color="success"
                      >Contact Us</v-btn
                    >
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </div>

        <!-- Elemen Paket Produk MISTAR -->
        <div class="mt-16">
          <p class="text-center display-1">
            Paket Produk <strong>MISTAR</strong>
          </p>

          <v-container>
            <v-row class="mt-16">
              <v-col cols="6" class="d-flex justify-end">
                <v-card class="produk-mistar">
                  <div
                    style="position: relative; margin-top: -20%"
                    class="d-flex justify-center"
                  >
                    <div
                      class="pa-4 primary rounded-circle bg-round"
                      style="width: 30%"
                    >
                      <v-img
                        src="../assets/homepage-img/premium.svg"
                        width="100%"
                      ></v-img>
                    </div>
                  </div>
                  <v-card-text class="text-center">
                    <p class="display-1 font-weight-bold">Premium</p>
                    <div class="pa-4 grey lighten-4">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Molestias adipisci dicta at assumenda similique
                        beatae id quam numquam, debitis, aliquam iusto, vel
                        dolorum minima sunt maiores aspernatur officia atque
                        vitae.
                      </p>
                    </div>

                    <v-btn class="success mt-8" rounded x-large width="80%"
                      >Detail</v-btn
                    >
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="6" class="d-flex">
                <v-card class="produk-mistar">
                  <div
                    style="position: relative; margin-top: -20%"
                    class="d-flex justify-center"
                  >
                    <div
                      class="pa-4 primary rounded-circle bg-round"
                      style="width: 30%"
                    >
                      <v-img
                        src="../assets/homepage-img/premium+.svg"
                        width="100%"
                      >
                      </v-img>
                    </div>
                  </div>
                  <v-card-text class="text-center">
                    <p class="d-flex justify-center display-1 font-weight-bold">
                      Premium+
                    </p>
                    <div class="pa-4 grey lighten-4">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Molestias adipisci dicta at assumenda similique
                        beatae id quam numquam, debitis, aliquam iusto, vel
                        dolorum minima sunt maiores aspernatur officia atque
                        vitae.
                      </p>
                    </div>

                    <v-btn class="success mt-8" rounded x-large width="80%"
                      >Detail</v-btn
                    >
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <!-- Elemen Subscribe Our Newsletter -->
        <div class="mt-16">
          <p class="display-1 text-center">
            <strong>Subscribe </strong> Our Newsletter
          </p>
          <div class="d-flex justify-center">
            <v-card
              flat
              class="subscribe pa-4 d-flex align-center"
              style="z-index: 2"
            >
              <v-text-field
                filled
                rounded
                hide-details="auto"
                style="border-radius: 50px"
                placeholder="example@gmail.com"
              >
              </v-text-field>
              <v-btn rounded class="primary">
                Subscribe
                <v-icon right>mdi-send</v-icon>
              </v-btn>
            </v-card>
          </div>
        </div>
      </div>
    </v-cotaniner>
    <Footer class="mt-n8" />
  </v-app>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}
#home{
  overflow: hidden;
}
#home .button-1 {
  padding: 30px 60px;
  background-color: #88b950;
  color: #fff;
  text-transform: capitalize;
  font-size: 25px;
}
#home .button-2 {
  font-size: 25px;
  text-transform: capitalize;
  color: #88b950;
  padding: 30px 50px;
  margin-left: 5%;
}
#home .about-desc {
  border-left: 5px solid #4380b9;
  border-radius: 6px;
  padding-left: 5%;
  padding-right: 10%;
}
#home .number {
  border: 4px solid #4380b9;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 20px;
}
#home .visi-misi-2-img {
  width: 72px !important;
  height: 72px !important;
  background-color: #eeeeee;
  border-radius: 50%;
}
#home .title {
  font-size: 25px !important;
}

@media (min-width: 1264px) {
  #home .content {
    width: 85%;
  }
  #home .contact-us {
    width: 50%;
  }
  #home .produk-mistar {
    width: 40%;
  }
  #home .subscribe {
    width: 40%;
  }
}
@media (min-width: 960px) and (max-width: 1263px) {
  #home .content {
    width: 90%;
  }
  #home .display-2 {
    font-size: 35px !important;
  }
  #home .display-1 {
    font-size: 25px !important;
  }
  #home .contact-us {
    width: 70%;
  }
  #home .produk-mistar {
    width: 60%;
  }
  #home .subscribe {
    width: 60%;
  }
}
@media (min-width: 600px) and (max-width: 969px) {
  #home .content {
    width: 95%;
  }
  #home .display-2 {
    font-size: 35px !important;
  }
  #home .display-1 {
    font-size: 25px !important;
  }
  #home .platform-desc {
    padding: 2% 5%;
  }
  #home .contact-us {
    width: 70%;
  }
  #home .produk-mistar {
    width: 80%;
  }
  #home .subscribe {
    width: 80%;
  }
}
@media (max-width: 599px) {
  #home .content {
    width: 95%;
  }
  #home .btn-1 {
    width: 40% !important;
  }
  #home .btn-2 {
    width: 50% !important;
  }
  #home .about-2 {
    margin-top: -10%;
  }
  #home .about-1 {
    margin-top: -5%;
  }
  #home .contact-us {
    width: 70%;
  }
  #home .produk-mistar {
    width: 95%;
    margin-top: -10%;
  }
  #home .subscribe {
    width: 95%;
  }
  #home .bg-round {
    width: 40% !important;
  }
}
</style>