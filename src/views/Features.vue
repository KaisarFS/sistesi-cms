<template>
  <v-app class="grey lighten-5" id="features">
    <v-container fluid>
      <!-- Desktop -->
      <div class="d-none d-md-block">
        <!-- Elemen Header -->
        <v-row class="header">
          <v-col cols="5" class="d-flex justify-center">
            <div class="d-flex align-center">
              <div class="text">
                <p class="display-2 font-weight-bold">MISTAR</p>
                <p class="display-1">
                  Berbagi Keunggulan <br />
                  Fitur-fitur MISTAR
                </p>
                <div class="d-flex button">
                  <v-btn rounded class="button-1">Paket</v-btn>
                  <v-btn rounded outlined class="button-2">Contact Us</v-btn>
                </div>
              </div>
            </div>
          </v-col>
          <v-col class="top-bg-wrap" cols="12">
            <v-img
              src="../assets/features-img/top-bg.svg"
              width="70%"
              class="top-bg"
            ></v-img>
          </v-col>
          <v-col cols="7">
            <v-img
              src="../assets/features-img/top-img.svg"
              width="100%"
            ></v-img>
          </v-col>
        </v-row>

        <splide :options="options">
          <splide-slide v-for="(title, i) in titles" :key="i">
            <div class="d-flex">
              <v-img :src="images[i]" width="50%" style="z-index: 2"></v-img>
              <v-card
                width="100%"
                style="position: relative; left: -10%; margin-top: 20%"
              >
                <v-card-title class="pl-12">
                  <p class="title">{{ titles[i] }}</p>
                </v-card-title>
                <v-card-text class="pl-12">
                  <p class="subtitle-1">
                    {{ descriptions[i] }}
                  </p>
                </v-card-text>
              </v-card>
            </div>
          </splide-slide>
        </splide>

        <v-row class="bottom">
          <v-col md="12" class="d-flex justify-center">
            <div class="d-flex align-center join-wrap">
              <p class="mr-8 display-1">Join With <strong>MISTAR</strong></p>
              <p>
                <v-btn rounded class="primary join-btn">
                  Join
                  <v-icon right> mdi-send </v-icon>
                </v-btn>
              </p>
            </div>
          </v-col>
          <v-col md="12" class="d-flex justify-center">
            <v-card height="73px" flat class="d-flex">
              <v-img
                src="../assets/features-img/google-play.svg"
                class="mr-5"
              ></v-img>
              <v-img
                src="../assets/features-img/app-store.svg"
                class="ml-5"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Mobile -->
      <div class="d-md-none d-sm-block">
        <!-- Elemen Header -->
        <v-row class="header">
          <v-col cols="12">
            <v-img
              src="../assets/features-img/top-img.svg"
              width="100%"
            ></v-img>
          </v-col>
          <v-col cols="12">
            <div class="text-center">
              <p class="display-2 font-weight-bold">MISTAR</p>
              <p class="display-1">Berbagi Keunggulan</p>
              <p class="display-1 mt-n4">Fitur-fitur MISTAR</p>
              <div class="d-flex justify-center">
                <v-btn to="/" x-large rounded class="button-1">Paket</v-btn>
                <v-btn
                  to="/contact-us"
                  x-large
                  rounded
                  outlined
                  class="button-2"
                  >Contact Us</v-btn
                >
              </div>
            </div>
          </v-col>
        </v-row>

        <splide :options="options">
          <splide-slide v-for="(title, i) in titles" :key="i">
            <div class="text-center">
              <img
                :src="images[i]"
                class="slider-phone"
                style="position: relative; z-index: 2"
              />
              <v-card width="100%" style="margin-top: -20%; padding-top: 15%">
                <v-card-title>
                  <p class="mx-auto">{{ titles[i] }}</p>
                </v-card-title>
                <v-card-text>
                  <p>
                    {{ descriptions[i] }}
                  </p>
                </v-card-text>
              </v-card>
            </div>
          </splide-slide>
        </splide>

        <!-- Bottom Element -->
        <v-row class="bottom">
          <v-col cols="12" class="d-flex justify-center">
            <div class="d-flex align-center join-wrap">
              <p class="mr-8">Join With <strong>MISTAR</strong></p>
              <p>
                <v-btn rounded class="primary join-btn">
                  Join
                  <v-icon right> mdi-send </v-icon>
                </v-btn>
              </p>
            </div>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-card flat>
              <v-row>
                <v-col cols="6">
                  <v-img
                    src="../assets/features-img/google-play.svg"
                    width="100%"
                  ></v-img>
                </v-col>
                <v-col cols="6">
                  <v-img
                    src="../assets/features-img/app-store.svg"
                    width="100%"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/Footer.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

export default {
  components: {
    Footer,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      images: [
        require("../assets/features-img/phone-1.png"),
        require("../assets/features-img/phone-2.png"),
        require("../assets/features-img/phone-3.png"),
        require("../assets/features-img/phone-4.png"),
        require("../assets/features-img/phone-5.png"),
        require("../assets/features-img/phone-6.png"),
      ],
      titles: ["ya1", "ya2", "ya3", "ya4", "ya5", "ya6"],
      descriptions: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, inventore iusto, error ipsum nostrum totam quae nemo illum impedit nulla ipsa dolorem quibusdam quidem voluptatem a veniam illo facilis tempore",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, inventore iusto, error ipsum nostrum totam quae nemo illum impedit nulla ipsa dolorem quibusdam quidem voluptatem a veniam illo facilis tempore",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, inventore iusto, error ipsum nostrum totam quae nemo illum impedit nulla ipsa dolorem quibusdam quidem voluptatem a veniam illo facilis tempore",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, inventore iusto, error ipsum nostrum totam quae nemo illum impedit nulla ipsa dolorem quibusdam quidem voluptatem a veniam illo facilis tempore",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, inventore iusto, error ipsum nostrum totam quae nemo illum impedit nulla ipsa dolorem quibusdam quidem voluptatem a veniam illo facilis tempore",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, inventore iusto, error ipsum nostrum totam quae nemo illum impedit nulla ipsa dolorem quibusdam quidem voluptatem a veniam illo facilis tempore",
      ],
      options: {
        rewind: true,
        perPage: 3,
        perMove: 1,
        gap: "1rem",
        focus: "center",
        autoplay: true,
        breakpoints: {
          1904: {
            perPage: 2,
            gap: "1rem",
          },
          960: {
            perPage: 1,
            gap: "1rem",
          },
        },
      },
    };
  },
};
</script>

<style>
#features .top-bg-wrap {
  position: absolute;
}
#features .top-bg {
  position: absolute;
  right: 0;
}
#features .button-1 {
  padding: 30px 60px;
  background-color: #88b950;
  color: #fff;
  text-transform: capitalize;
  font-size: 25px;
}
#features .button-2 {
  font-size: 25px;
  text-transform: capitalize;
  color: #88b950;
  padding: 30px 50px;
  margin-left: 5%;
}
#features .phone-img {
  width: 229px !important;
  height: 412px !important;
}
#features .bottom {
  margin-top: 10%;
}
#features .bottom .join-wrap {
  padding: 20px 40px;
  background-color: #fff;
}
#features .bottom .join-wrap .join-btn {
  padding: 10px 30px;
}

@media (min-width: 960px) and (max-width: 1264px) {
  #features .display-2 {
    font-size: 35px !important;
  }
  #features .display-1 {
    font-size: 25px !important;
  }
  #features .button-1 {
    padding: 20px 50px;
    font-size: 20px;
  }
  #features .button-2 {
    padding: 20px 40px;
  }
  #features .phone-img {
    width: 179px !important;
    height: 300px !important;
  }
}
@media (min-width: 600px) and (max-width: 959px) {
  #features .display-2 {
    font-size: 35px !important;
  }
  #features .display-1 {
    font-size: 25px !important;
  }
  #features .button-1 {
    padding: 20px 50px;
  }
  #features .button-2 {
    padding: 20px 40px;
  }
  #features .phone-img {
    width: 150px !important;
    height: 250px !important;
  }
  #features .slider-phone {
    width: 50% !important;
  }
}
@media (max-width: 599px) {
  #features .display-2 {
    font-size: 30px !important;
  }
  #features .display-1 {
    font-size: 20px !important;
  }
  #features .button-1 {
    padding: 10px 40px;
  }
  #features .button-2 {
    padding: 10px 30px;
  }
  #features .phone-img {
    width: 100px !important;
    height: 200px !important;
  }
  #features .slider-phone {
    width: 80% !important;
  }
}
</style>