<template>
  <v-app class="grey lighten-5">
    <!-- Elemen Wa-Icon -->
    <div>
      <v-fab-transition>
        <v-btn class="success" fixed bottom right fab>
          <v-icon x-large>mdi-whatsapp</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>

    <v-container fluid>
      <div class="header">
        <v-row class="header mt-n8">
          <!-- Header Backgound Image -->
          <v-col class="top-bg-wrap" md="12">
            <v-img
              src="../assets/features-img/top-bg.svg"
              width="70%"
              class="top-bg"
            ></v-img>
          </v-col>
          <!-- Header Content -->
          <v-col cols="6" class="d-flex justify-center">
            <div class="d-flex align-center">
              <div class="text-wrap">
                <p class="mistar-header font-weight-bold d-flex justify-center">
                  What are you looking for?
                </p>
                <!-- Search bar -->
                <v-container fluid class="search-wrap">
                  <div class="header d -flex justify-center"></div>
                  <div class="d-flex align-center justify-center mx-auto">
                    <div class="input-wrap d-flex align-center">
                      <!-- DROPDOWN -->
                      <v-select
                        :items="items"
                        label="All"
                        solo
                        dense
                        flat
                        class="dropdown-search"
                      ></v-select>
                      <v-text-field
                        rounded
                        flat
                        hide-details="auto"
                        placeholder="Search"
                        class="input"
                      >
                      </v-text-field>
                      <v-btn
                        depressed
                        class="search-btn"
                        fab
                        dark
                        large
                        color="primary"
                      >
                        <v-icon x-large> mdi-magnify </v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-container>
                <br />
                <span class="mistar-subheader d-flex justify-center">
                  Semua berita , Update Fitu dan galeri
                </span>
                <span class="mistar-subheader d-flex justify-center">
                  tersedia dihalaman ini
                </span>
              </div>
            </div>
          </v-col>
          <!-- Header Image -->
          <v-col cols="6" class="">
            <v-img
              src="../assets/latest-update/header-latest-update.svg"
              class="phone"
              width="100%"
            ></v-img>
          </v-col>
        </v-row>
        <!-- Elemen 4 Button -->
        <div class="btn-wrap d-flex justify-center">
          <v-btn rounded class="btn"> Semua </v-btn>
          <v-btn outlined rounded class="btn-2"> Fitur baru</v-btn>
          <v-btn outlined rounded class="btn-3"> Galeri </v-btn>
          <v-btn outlined rounded class="btn-4"> Berita </v-btn>
        </div>
        <!-- Elemen Berita terbaru -->
        <v-container class="paket-produk-wrap mt-8">
          <div class="mt-n12 d-flex justify-center">
            <div class="card-bg">
              <v-img src="../assets/latest-update/react.png" class="berita-img">
              </v-img>
              <div class="pa-7">
                <span class="fitur subtitle-1">Fitur</span>
                <h2 class="font-weight-black">Teknologi Menggunakan React</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, dolores consequuntur hic repellat quasi quidem
                  libero animi explicabo? Iure, rem. Nemo ex quia atque harum
                  repellat aliquid, ducimus placeat doloremque.
                </p>
                <v-divider></v-divider>
                <v-icon class="primary--text">mdi-eye-outline</v-icon>
                <span class="primary--text">100</span>
                <span class="d-flex justify-end">12:00 | 12 November 2020</span>
              </div>
            </div>
            <div class="card-bg">
              <v-img
                src="../assets/latest-update/student.png"
                class="berita-img"
              ></v-img>
              <div class="pa-7">
                <span class="fitur subtitle-1">Galeri</span>
                <h2 class="font-weight-black">
                  Seluruh sekolah menggunakan mistar
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, dolores consequuntur hic repellat quasi quidem
                  libero animi explicabo? Iure, rem. Nemo ex quia atque harum
                  repellat aliquid, ducimus placeat doloremque.
                </p>
                <v-divider></v-divider>
                <v-icon class="primary--text">mdi-eye-outline</v-icon>
                <span class="primary--text">100</span>
                <span class="d-flex justify-end">12:00 | 11 November 2020</span>
              </div>
            </div>
            <div class="card-bg">
              <v-img
                src="../assets/latest-update/trump.png"
                class="berita-img"
              ></v-img>
              <div class="pa-7">
                <span class="fitur subtitle-1">Berita</span>
                <h2 class="font-weight-black">Donald Trump Kalah</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, dolores consequuntur hic repellat quasi quidem
                  libero animi explicabo? Iure, rem. Nemo ex quia atque harum
                  repellat aliquid, ducimus placeat doloremque.
                </p>
                <v-divider></v-divider>
                <v-icon class="primary--text">mdi-eye-outline</v-icon>
                <span class="primary--text">100</span>
                <span class="d-flex justify-end">12:00 | 10 November 2020</span>
              </div>
            </div>
          </div>
        </v-container>
      </div>
    </v-container>
    <Footer class="mt-12" />
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
.top-bg-wrap {
  position: absolute;
}
.top-bg {
  position: absolute;
  right: 0;
}
.phone {
  width: 840px;
  height: 859px;
}
.text-wrap {
  margin-top: -200px;
}
.mistar-header {
  font-size: 35px;
}
.mistar-subheader {
  font-size: 20px;
  font-weight: 400px;
}
/* Elemen Search bar */
.search-wrap {
  z-index: 10;
  position: relative;
}
.search-wrap .header p {
  margin-top: 70px;
  font-size: 35px;
}
.search-wrap .input-bg {
  padding: 16px 20px;
  width: 792px;
  background-color: #fff;
  border-radius: 21px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
.search-wrap .input-wrap {
  height: 79px;
  width: 751px;
  border-radius: 40px;
  border: 1px solid #e0e0e0;
  background-color: #fcfcfc;
}
.search-wrap .input-wrap .input {
  outline: none;
  font-size: 25px;
  padding: 42px 22px;
}
.dropdown-search {
  margin-top: 20px;
  margin-left: 20px;
  width: 1px !important;
}

/* Elemen 4 Button */
.btn-wrap {
  margin-top: 40px;
}
.btn-wrap .btn {
  font-weight: normal;
  text-transform: capitalize;
  padding: 30px 80px;
  background-color: #88b950;
  color: #fff;
  font-size: 25px;
  border-color: #88b950;
  width: 200px;
  height: 61px;
}
.btn-wrap .btn-2 {
  margin-left: 20px;
  font-weight: normal;
  text-transform: capitalize;
  padding: 30px 70px;
  color: #88b950;
  font-size: 25px;
  width: 239px;
  height: 61px;
}
.btn-wrap .btn-3 {
  margin-left: 20px;
  font-weight: normal;
  text-transform: capitalize;
  padding: 30px 70px;
  color: #88b950;
  font-size: 25px;
  width: 184px;
  height: 61px;
}
.btn-wrap .btn-4 {
  margin-left: 20px;
  font-weight: normal;
  text-transform: capitalize;
  padding: 30px 70px;
  color: #88b950;
  font-size: 25px;
  width: 184px;
  height: 61px;
}
/* Elemen Berita terbaru */
.paket-produk-wrap .card-bg {
  box-shadow: 0px 29px 56px #0000000f;
  margin-left: 30px;
  margin-right: 30px;
  position: relative;
  width: 458px;
  margin-top: 100px;
  border-radius: 22px;
  background-color: rgb(255, 255, 255);
}
.paket-produk-wrap .text-wrap .text-bg {
  margin: 20px;
  padding: 15px;
  background-color: #fcfcfc;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
}
.berita-img {
  width: 420px;
  height: 279px;
  border-radius: 11px;
  position: relative;
  left: 20px;
  top: 15px;
}
.paket-produk-wrap .bg-header-img {
  margin-top: -15%;
  width: 138px;
  height: 138px;
  background-color: #4380b9;
  padding: 20px;
  border-radius: 50%;
}
.paket-produk-wrap .bg-header-img .header-img {
  width: 96px;
  height: 96px;
}
.paket-produk-wrap .btn-text {
  color: #fff;
  letter-spacing: 0;
  font-size: 25px;
  text-transform: capitalize;
}
.paket-produk-wrap .btn {
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 29px;
  background-color: #88b950;
}
.fitur {
  color: #2980b9;
  text-align: left;
  size: 18px;
  top: 304px;
}
.latest-update .top-bg-wrap {
  position: absolute;
}
.latest-update .top-bg {
  position: absolute;
  right: 0;
}
</style>
