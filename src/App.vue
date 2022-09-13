<template>
  <v-app>
    <!-- Elemen Wa-Icon -->
    <div>
      <v-fab-transition>
        <v-btn class="wa-icon success" fixed bottom right fab>
          <v-icon x-large>mdi-whatsapp</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>

    <Navbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
</style>

