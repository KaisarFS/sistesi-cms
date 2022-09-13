<template>
  <v-app class="grey lighten-5">
    <v-container class="supports">
      <div>
        <v-row justify="center">
          <v-col cols="12" lg="10" sm="10" class="content mt-16">
            <div class="header">
              <div>
                <p class="d-flex justify-center font-weight-bold display-1">
                  Help Desk
                </p>
                <p>
                  Untuk dapat memberikan Services yang baik untuk semua User
                  MISTAR kami menyediakan Tim Helpdesk yang dapat di hubungi
                  melalui media Sebagai Berikut :
                </p>
              </div>
            </div>
            <v-row class="office">
              <v-col md="5" cols="12">
                <v-card>
                  <v-img
                    src="../assets/supports-img/office.svg"
                    width="100%"
                  ></v-img>
                  <v-card flat>
                    <v-card-text>
                      <span class="font-weight-bold title">Office Hours:</span>
                      <div class="d-flex">
                        <p class="subtitle-1">Mon - Fri 08.00 - 17.00</p>
                        <v-spacer></v-spacer>
                        <p class="subtitle-1">Mon - Fri 08.00 - 17.00</p>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-card>
              </v-col>
              <v-col md="7" cols="12" align-self="center">
                <v-row>
                  <v-col cols="12">
                    <v-card>
                      <v-card-text>
                        <p class="font-weight-bold title">WhatsApp</p>
                        <p class="subtitle-1">
                          Untuk Bantuan Cepat / Fast Response terkait pengunaan
                          MISTAR dan atau troubleshooting MISTAR.
                        </p>
                        <v-divider></v-divider>
                        <div class="d-flex justify-end">
                          <v-btn text class="primary--text">
                            Kirim Pesan
                            <v-icon right class="primary--text">mdi-arrow-right</v-icon>
                          </v-btn>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-card>
                      <v-card-text>
                        <p class="font-weight-bold title">Email</p>
                        <p class="subtitle-1">
                          Info mengenai SISTesi dan FAQ mengenai produk MISTAR
                          bisa dikirim ke email : info@mistar.co.id dan akan tim
                          kami respon 1 x 24 Jam sejak Email dikirim.
                        </p>
                        <v-divider></v-divider>
                        <div class="d-flex justify-end">
                          <v-btn text class="primary--text">
                            Kirim Email
                            <v-icon right class="primary--text">
                              mdi-arrow-right
                            </v-icon>
                          </v-btn>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-card>
                      <v-card-text>
                        <p class="font-weight-bold title">Telepon</p>
                        <p class="subtitle-1">
                          Call Center kami siap sedia untuk dapat memberikan
                          support atas pertanyaan mengenai produk MISTAR di
                          Nomor.
                        </p>
                        <v-divider></v-divider>
                        <div class="d-flex justify-end">
                          <v-btn text class="primary--text">
                            Mulai Panggilan
                            <v-icon right class="primary--text">
                              mdi-arrow-right
                            </v-icon>
                          </v-btn>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="training mt-4">
              <v-col cols="12">
                <p class="font-weight-bold d-flex justify-center headline">
                  Training
                </p>
                <p class="subtitle-1">
                  Merupakan salah satu services kami, yang bertujuan untuk
                  memberikan petunjuk dalam pemanfaatan dan implementasi MISTAR
                  sehingga di harapkan dapat meningkatkan usage dan tentunya
                  memberikan kemudahan bagi user.
                </p>
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col md="4" cols="12">
                    <v-card class="pa-4">
                      <v-card-text>
                        <v-img
                          src="../assets/supports-img/free-training.svg"
                          width="30%"
                          class="mx-auto"
                        ></v-img>
                        <p class="font-weight-bold d-flex justify-center title">
                          On Site Training
                        </p>
                        <p class="subtitle-1">
                          Training Gratis untuk semua user Sekolah pengguna
                          MISTAR sesuai dengan paket yang di pilih. Training
                          berlangsung selama 3 hari dan di selenggarakan di
                          tempat pengguna, dengan rincian tahapan 2 Hari
                          Training Penjelasan semua fitur aplikasi, 1 Hari untuk
                          uji coba dan Assesment tingkat pemahaman.
                        </p>
                        <p class="d-flex align-center subtitle-1">
                          <v-icon left small class="primary--text">mdi-clock</v-icon>
                          3 Hari, 6 Jam per hari Start 08.00 - End 14.00
                        </p>
                        <p
                          class="d-flex justify-center font-weight-bold primary--text title"
                        >
                          FREE
                        </p>
                        <div class="d-flex justify-center">
                          <v-btn class="success" rounded x-large width="80%">REGISTER</v-btn>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col md="4" cols="12">
                    <v-card class="pa-4">
                      <v-card-text>
                        <v-img
                          src="../assets/supports-img/demand-training.svg"
                          width="30%"
                          class="mx-auto"
                        ></v-img>
                        <p class="font-weight-bold d-flex justify-center title">
                          On Demand Training
                        </p>
                        <p class="subtitle-1">
                          Training Tambahan di luar Paket Free Training, untuk
                          Training ini pihak user Sekolah berkewajiban untuk
                          menanggung segala akomodasi selama training
                          berlangsung, lama Training tergantung dengan modul
                          pelatihan yang bersifat modular sehingga tidak semua
                          Fitur di Jelaskan, di selanggarakan di tempat
                          pengguna.
                        </p>
                        <p class="d-flex align-center subtitle-1">
                          <v-icon left small class="primary--text">mdi-clock</v-icon>
                          Durasi menyesuaikan materi yang di request
                        </p>
                        <p
                          class="d-flex justify-center font-weight-bold primary--text title"
                        >
                          PAY PER REQUEST
                        </p>
                        <div class="d-flex justify-center">
                          <v-btn class="success" rounded x-large width="80%">REGISTER</v-btn>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col md="4" cols="12">
                    <v-card class="pa-4">
                      <v-card-text>
                        <v-img
                          src="../assets/supports-img/online-training.svg"
                          width="30%"
                          class="mx-auto"
                        ></v-img>
                        <p class="font-weight-bold d-flex justify-center title">
                          Online Training
                        </p>
                        <p class="subtitle-1">
                          Training Gratis untuk semua user Sekolah pengguna
                          SISTesi sesuai dengan paket yang di pilih . Training
                          berlangsung selama 1 hari (3 Jam, Maksimal) dan di
                          selenggarakan di tempat masing masing, via Zoom,
                          Hangout, Google Meet, Teams dan atau Skype.
                        </p>
                        <p class="d-flex align-center subtitle-1">
                          <v-icon left small class="primary--text">
                            mdi-clock
                          </v-icon>
                            1 hari, 8 jam per hari Start 08.00 - End 17.00
                            (menyesuaikan available time dari tim)
                        </p>
                        <p
                          class="d-flex justify-center font-weight-bold primary--text title"
                        >
                          FREE
                        </p>
                        <div class="d-flex justify-center">
                          <v-btn class="success" rounded x-large width="80%">REGISTER</v-btn>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="3" cols="12">
                <v-card>
                  <v-card-text>
                    <p class="font-weight-bold d-flex justify-center title">
                      Informasi Training
                    </p>
                    <div class="d-flex justify-center">
                      <p>
                        <v-avatar size="150">
                          <img
                            src="../assets/supports-img/foto-profil.png"
                            alt="John"
                          />
                        </v-avatar>
                      </p>
                    </div>
                    <p class="font-weight-bold d-flex justify-center">Yahana Galuh</p>
                    <p class="d-flex justify-center">
                      <v-icon small left class="primary--text">mdi-phone</v-icon>
                      +62 298 343-4397
                    </p>
                    <p class="d-flex justify-center">
                      <v-icon small left class="primary--text">mdi-cellphone</v-icon>
                      +62 819-0439-3051
                    </p>
                    <p class="d-flex justify-center">
                      <v-icon small left class="primary--text">mdi-email</v-icon>
                      yohana@exiglosi.com
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col md="9" cols="12" align-self="center">
                <v-card class="pa-4">
                  <v-row>
                    <v-col md="4" cols="12">
                      <v-card-text>
                        <p class="font-weight-bold title">Fasilitas Training</p>
                        <v-row>
                          <v-col md="4" cols="2" class="d-flex justify-center">
                            <div class="pa-3 grey lighten-1 rounded-circle d-inline-block">
                              <v-img
                              src="../assets/supports-img/sertifikat.svg"
                              width="45px"
                            >
                            </v-img>
                            </div>
                          </v-col>
                          <v-col md="8" cols="10" class="d-flex align-center">
                            <p class="subtitle-1">Sertifikat Digital</p>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col md="4" cols="2" class="d-flex justify-center">
                            <div class="pa-3 grey lighten-1 rounded-circle d-inline-block">
                              <v-img
                              src="../assets/supports-img/modul.svg"
                              width="45px"
                              >
                              </v-img>
                            </div>
                          </v-col>
                          <v-col md="8" cols="10" class="d-flex align-center">
                            <p class="subtitle-1">Modul Pelatihan</p>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-col>
                    <v-col md="8" cols="12">
                      <v-card-text>
                        <p class="font-weight-bold title">Syarat Training</p>
                        <v-row>
                          <v-col cols="2" class="d-flex justify-center">
                            <div class="pa-3 grey lighten-1 rounded-circle d-inline-block">
                              <v-img
                                src="../assets/supports-img/gadget.svg"
                                width="45px"
                              >
                              </v-img>
                            </div>
                          </v-col>
                          <v-col cols="10" class="d-flex align-center">
                            <p class="subtitle-1">
                              Peserta wajib menyiapkan laptop / mobile phone
                              (android/iOS)
                            </p>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="2" class="d-flex justify-center">
                            <div class="pa-3 grey lighten-1 rounded-circle d-inline-block">
                              <v-img
                              src="../assets/supports-img/uang.svg"
                              width="45px"
                              >
                              </v-img>
                            </div>
                          </v-col>
                          <v-col cols="10" class="d-flex align-center">
                            <p class="subtitle-1">
                              Untuk pilihan On Demand Training pembayaran
                              minimal 1 minggu sebelum jadwal training
                            </p>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <Footer class="mt-16" />
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
</style>