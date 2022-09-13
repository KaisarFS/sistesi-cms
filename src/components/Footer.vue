<template>
  <v-footer padless>
    <v-card class="content-wrap grey darken-3">
      <v-card-text>
        <v-img
          src="../assets/footer-img/logo.svg"
          class="logo mx-auto"
          max-height="50px"
          max-width="250px"
        >
        </v-img>
      </v-card-text>
      <v-divider class="grey darken-1 row mt-2"></v-divider>
      <v-card-text class="white--text">
        <v-row class="mt-4">
          <v-col class="d-flex justify-center">
            <div>
              <h1>Office:</h1>
              <br />
              <p>
                Edugate Building Lt. Dasar Suite G Jl. Fatmawati No.99, Jakarta
                12430
              </p>
              <p>
                Jl. Yudistira no 11 Dukuh Baru RT 01 RW 08 Kel. Dukuh Kec.
                Sidomukti Kota Salatiga 50722
              </p>
              <p>
                Office Hours : <br />
                Mon - Fri 08.00 - 17.00 <br />
                Extra Time Until 20.00
              </p>
            </div>
          </v-col>
          <v-col class="d-flex justify-center">
            <div>
              <h1>Contact Us:</h1>
              <br />
              <p>
                <v-icon left class="white--text">mdi-whatsapp</v-icon>
                <span>+62 217 669 525</span>
              </p>
              <p>
                <v-icon left class="white--text">mdi-phone</v-icon>
                <span>758 16720 / 766 9082 </span>
              </p>
              <p>
                <v-icon left class="white--text">mdi-email</v-icon>
                <span>info@exiglosi.com</span>
              </p>
            </div>
          </v-col>
          <v-col class="d-flex justify-center">
            <div>
              <h1>Follow Us:</h1>
              <br />
              <p>
                <v-icon left class="white--text">mdi-facebook</v-icon>MISTAR
                Official
              </p>
              <p>
                <v-icon left class="white--text">mdi-instagram</v-icon>MISTAR
                Official
              </p>
              <p>
                <v-icon left class="white--text">mdi-twitter</v-icon>MISTAR
                Official
              </p>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <div class="copyright grey darken-1">
      <p class="d-flex justify-center white--text ma-1">© {{ new Date().getFullYear() }} - MISTAR</p>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.content-wrap {
  overflow: visible;
  padding: 0 340px;
  width: 100%;
}
.logo {
  margin-top: 50px;
}
.copyright{
  width: 100%;
}
@media (max-width: 599px) {
  .content-wrap {
    padding: 0;
  }
}
@media (min-width: 600px) and (max-width: 959px) {
  .content-wrap {
    padding: 0 40px;
  }
}
@media (min-width: 960px) and (max-width: 1263px) {
  .content-wrap {
    padding: 0 100px;
  }
}
@media (min-width: 1264px) and (max-width: 1904px) {
  .content-wrap {
    padding: 0 200px;
  }
}
</style>