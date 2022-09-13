<template>
  <v-main class="navbar">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <v-toolbar class="pl-4" style="position: fixed; z-index: 10" width="100%">
        <v-toolbar-title>
          <v-img src="../assets/logo.png" height="30px" width="200px"></v-img>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn large replace rounded text to="/" exact-active-class="success"
          >Home</v-btn
        >

        <v-btn
          large
          replace
          text
          rounded
          to="/latest-update"
          exact-active-class="success"
          >Latest Update</v-btn
        >

        <v-btn
          large
          replace
          text
          rounded
          to="/features"
          exact-active-class="success"
          >Features</v-btn
        >
        <v-btn large replace rounded to="faq" text exact-active-class="success"
          >FAQ</v-btn
        >
        <v-btn
          large
          replace
          rounded
          to="supports"
          text
          exact-active-class="success"
          >Supports</v-btn
        >
        <v-btn
          large
          replace
          rounded
          to="contact-us"
          text
          exact-active-class="success"
          >Contact-Us</v-btn
        >
      </v-toolbar>
    </div>

    <!-- Mobile -->
    <div class="d-md-none d-sm-block">
      <v-toolbar class="px-4" style="position: fixed; z-index: 10" width="100%">
        <v-toolbar-title>
          <v-img src="../assets/logo.png" height="20px" width="150px"></v-img>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="sideNav = !sideNav"></v-app-bar-nav-icon>
      </v-toolbar>

      <v-navigation-drawer app right temporary v-model="sideNav">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Application </v-list-item-title>
            <v-list-item-subtitle> subtext </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      sideNav: null,
      items: [
        { title: "Home", icon: "mdi-home", route: "/" },
        { title: "Latest Update", icon: "mdi-alert-circle", route: "/home" },
        {
          title: "Features",
          icon: "mdi-clipboard-text-search",
          route: "/features",
        },
        { title: "FAQ", icon: "mdi-comment-question", route: "/faq" },
        { title: "Support", icon: "mdi-progress-wrench", route: "/supports" },
        {
          title: "Contact Us",
          icon: "mdi-phone-classic",
          route: "/contact-us",
        },
      ],
      right: null,
    };
  },
};
</script>

<style>
.navbar .v-btn {
  text-transform: capitalize;
}
</style>
