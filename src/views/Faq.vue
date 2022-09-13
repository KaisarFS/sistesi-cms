<template>
  <v-app>
    <v-container fluid class="faq">
      <!-- Desktop -->
      <div class="d-none d-md-block">
        <div class="header">
          <v-row>
            <v-col cols="6">
              <v-img
                src="../assets/faq-img/top-img.svg"
                width="95%"
                class="top-img"
              ></v-img>
            </v-col>
            <v-col cols="12" class="top-bg-wrap">
              <v-img
                src="../assets/faq-img/top-bg.svg"
                width="92%"
                class="top-bg-img"
              ></v-img>
            </v-col>
            <v-col cols="6">
              <div class="content">
                <p class="d-flex justify-center font-weight-bold">
                  How We Can Help You?
                </p>
                <div class="d-flex input-wrap align-center">
                  <v-text-field
                    hide-details="auto"
                    solo
                    rounded
                    flat
                    height="80px"
                    placeholder="Search FAQ"
                    class="input"
                  >
                  </v-text-field>
                  <v-btn x-large icon dark rounded class="primary">
                    <v-icon x-large>mdi-magnify</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <v-row class="about">
          <v-col cols="12" class="d-flex justify-center">
            <v-card width="90%">
              <v-card-title flat class="d-flex justify-center">
                <p class="header">FAQ <strong>About MISTAR</strong></p>
              </v-card-title>
              <v-tabs vertical grow>
                <v-tab>
                  <p><v-icon left> mdi-account </v-icon> Produk</p>
                </v-tab>
                <v-tab>
                  <p>
                    <v-icon left> mdi-help-circle-outline </v-icon> Help Desk
                  </p>
                </v-tab>
                <v-tab>
                  <p>
                    <v-icon left> mdi-alert-circle-outline </v-icon> Training
                  </p>
                </v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Apa itu Mistar?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Merupakan sebuah software pendidikan
                                multiplatform berbasis cloud yang bertujuan
                                untuk mempermudah proses administratif dan
                                proses Kegiatan Belajar Mengajar serta mengelola
                                data Sekolah ; Database Siswa, Guru, Tenaga
                                Kependidikan, Nilai, Bimbingan Konseling,
                                Presensi, Keuangan (SPP/Iuran), dan lain lain.
                                MISTAR juga memberikan solusi untuk Kepala
                                Sekolah, Guru, Murid dan Orang Tua agar bisa
                                terhubung secara 360º dengan cara Digital maupun
                                Tatap Muka untuk menjamin Kualitas Pembelajaran.
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Apa keunggulan MISTAR dengan aplikasi
                                lain?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Terintegrasi, Aman, Realtime
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Apa manfaat MISTAR untuk Sekolah?</span
                              >
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Branding Sekolah, Membantu pekerjaan
                                administrasi sekolah dan guru
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Apa manfaat MISTAR untuk Orangtua?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Media komunikasi dan monitoring perkembangan
                                siswa
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header>
                              <span class="judul font-weight-bold"
                                >Bagaimana soal keamanan data di MISTAR?</span
                              >
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Aplikasi karya Anak Bangsa, Data ter-enkripsi,
                                Cloud Server menggunakan provider yang memiliki
                                data center di Indonesia
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Bantuan seperti apa yang bisa di
                                dapatkan?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Kami akan memberikan bantuan terkait dengan
                                pengunaan Produk MISTAR baik yang bersifat
                                Teknis maupun Non- Teknis
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>

                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Apakah hanya Office Hour saja untuk Pelayanan
                                Help Desk?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Untuk pelayanan normal terkait dengan pengunaan
                                Produk MISTAR akan di layani pada hari dan jam
                                kerja yang tertera, sedangkan untuk pelayanan
                                yang sifatnya khusus dan diluar jam dan hari
                                kerja bisa disampaikan terlebih dahulu untuk
                                mendaptkan response dari kami.
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Dimana pelaksanaan training di adakan?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Untuk On Site Training dilaksanakan di area
                                sekolah atau user yang menggunakan SISTesi,
                                sedangkan untuk On Demand Training sesuai
                                permintaan user bisa di luar sekolah, dengan
                                catatan semua biaya training baik biaya
                                akomodasi dan transportasi serta snack (kalau
                                ada) menjadi tanggungan user/ peserta yang telah
                                request on demand training. Kemudian untuk On
                                Line Training di laksanakan di tempat masing
                                masing dengan memanfaatkan media Zoom, Hangout,
                                Google Meet, Teams dan atau Skype.
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Untuk On Demand Training, berapakah biaya yang
                                harus di tanggung oleh user/ peserta?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Terkait dengan On Demand Training rincian total
                                biaya dan susunan training sangat flexible
                                sesuai dengan kebutuhan user/ peserta dan dapat
                                disesuaikan dengan budget, jadi besaran biaya as
                                per request dan by further discussion.
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Mobile -->
      <div class="d-md-none d-sm-block">
        <v-row class="header">
          <v-col cols="12">
            <v-img src="../assets/faq-img/top-img.svg" width="100%"></v-img>
          </v-col>
          <v-col cols="12">
            <div class="content">
              <p class="d-flex justify-center font-weight-bold">
                How We Can Help You?
              </p>
              <v-container class="d-flex input-wrap align-center">
                <v-text-field
                  hide-details="auto"
                  solo
                  rounded
                  height="80px"
                  placeholder="Search FAQ"
                  class="input"
                >
                </v-text-field>
                <v-btn x-large icon dark rounded class="primary">
                  <v-icon x-large>mdi-magnify</v-icon>
                </v-btn>
              </v-container>
            </div>
          </v-col>
        </v-row>
        <v-row class="about">
          <v-col cols="12" class="d-flex justify-center">
            <v-card width="100%">
              <v-card-title flat class="d-flex justify-center">
                <p class="header">FAQ <strong>About MISTAR</strong></p>
              </v-card-title>
              <v-tabs>
                <v-tab>
                  <p><v-icon left> mdi-account </v-icon> Produk</p>
                </v-tab>
                <v-tab>
                  <p>
                    <v-icon left> mdi-help-circle-outline </v-icon> Help Desk
                  </p>
                </v-tab>
                <v-tab>
                  <p>
                    <v-icon left> mdi-alert-circle-outline </v-icon> Training
                  </p>
                </v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Apa itu Mistar?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Merupakan sebuah software pendidikan
                                multiplatform berbasis cloud yang bertujuan
                                untuk mempermudah proses administratif dan
                                proses Kegiatan Belajar Mengajar serta mengelola
                                data Sekolah ; Database Siswa, Guru, Tenaga
                                Kependidikan, Nilai, Bimbingan Konseling,
                                Presensi, Keuangan (SPP/Iuran), dan lain lain.
                                MISTAR juga memberikan solusi untuk Kepala
                                Sekolah, Guru, Murid dan Orang Tua agar bisa
                                terhubung secara 360º dengan cara Digital maupun
                                Tatap Muka untuk menjamin Kualitas Pembelajaran.
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Apa keunggulan MISTAR dengan aplikasi
                                lain?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Terintegrasi, Aman, Realtime
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Apa manfaat MISTAR untuk Sekolah?</span
                              >
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="sub-judul"
                                >Branding Sekolah, Membantu pekerjaan
                                administrasi sekolah dan guru</p
                              >
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Apa manfaat MISTAR untuk Orangtua?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Media komunikasi dan monitoring perkembangan
                                siswa
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header>
                              <span class="judul font-weight-bold"
                                >Bagaimana soal keamanan data di MISTAR?</span
                              >
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Aplikasi karya Anak Bangsa, Data ter-enkripsi,
                                Cloud Server menggunakan provider yang memiliki
                                data center di Indonesia
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Bantuan seperti apa yang bisa di
                                dapatkan?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Kami akan memberikan bantuan terkait dengan
                                pengunaan Produk MISTAR baik yang bersifat
                                Teknis maupun Non- Teknis
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>

                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Apakah hanya Office Hour saja untuk Pelayanan
                                Help Desk?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Untuk pelayanan normal terkait dengan pengunaan
                                Produk MISTAR akan di layani pada hari dan jam
                                kerja yang tertera, sedangkan untuk pelayanan
                                yang sifatnya khusus dan diluar jam dan hari
                                kerja bisa disampaikan terlebih dahulu untuk
                                mendaptkan response dari kami.
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Dimana pelaksanaan training di adakan?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Untuk On Site Training dilaksanakan di area
                                sekolah atau user yang menggunakan SISTesi,
                                sedangkan untuk On Demand Training sesuai
                                permintaan user bisa di luar sekolah, dengan
                                catatan semua biaya training baik biaya
                                akomodasi dan transportasi serta snack (kalau
                                ada) menjadi tanggungan user/ peserta yang telah
                                request on demand training. Kemudian untuk On
                                Line Training di laksanakan di tempat masing
                                masing dengan memanfaatkan media Zoom, Hangout,
                                Google Meet, Teams dan atau Skype.
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                      <p>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              ><span class="judul font-weight-bold"
                                >Untuk On Demand Training, berapakah biaya yang
                                harus di tanggung oleh user/ peserta?</span
                              ></v-expansion-panel-header
                            >
                            <v-expansion-panel-content>
                              <p class="sub-judul">
                                Terkait dengan On Demand Training rincian total
                                biaya dan susunan training sangat flexible
                                sesuai dengan kebutuhan user/ peserta dan dapat
                                disesuaikan dengan budget, jadi besaran biaya as
                                per request dan by further discussion.
                              </p>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <Footer class="mt-8" />
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

<style>
* {
  font-family: "Poppins", sans-serif;
}
.faq .header .top-bg-wrap {
  position: absolute;
}
.faq .header .top-bg-img {
  position: absolute;
  right: 0;
}
.faq .header .top-img {
  z-index: 2;
}
.faq .header .input-wrap {
  width: 80% !important;
  background-color: #fff;
  border-radius: 80px !important;
}
.faq .header .content {
  position: relative;
  top: 40%;
}
.faq .header .content p {
  width: 80% !important;
  font-size: 35px;
}
.faq .header .input {
  font-size: 25px;
  font-weight: bold;
}
.faq .judul {
  font-size: 20px;
}
.faq .sub-judul {
  font: normal normal normal 18px/41px Poppins;
  background-color: #fcfcfc;
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 10px;
}
@media (min-width: 960px) and (max-width: 1264px) {
  .faq .header .input-wrap {
    width: 100% !important;
  }
  .faq .header .content {
    top: 30%;
  }
  .faq .header .content p {
    width: 100% !important;
  }
}
@media (min-width: 600px) and (max-width: 959px) {
  .faq .header .input-wrap {
    width: 100% !important;
  }
  .faq .header .content p {
    margin-top: -10%;
    width: 100% !important;
    font-size: 25px;
  }
  .faq .about {
    margin-top: 10%;
  }
  .faq .about .header {
    font-size: 20px;
  }
  .faq .judul {
    font-size: 18px;
  }
  .faq .sub-judul {
    font: normal normal normal 16px/41px Poppins;
    padding: 20px;
  }
}
@media (max-width: 599px) {
  .faq .header .input-wrap {
    width: 100% !important;
  }
  .faq .header .content p {
    margin-top: -10%;
    width: 100% !important;
    font-size: 20px;
  }
  .faq .about {
    margin-top: 20%;
  }
  .faq .about .header {
    font-size: 18px;
  }
  .faq .header .input {
    font-size: 20px;
    font-weight: bold;
  }
  .faq .judul {
    font-size: 16px;
  }
  .faq .sub-judul {
    letter-spacing: 0;
    font-size: 14px;
    padding: 10px;
  }
}
</style>