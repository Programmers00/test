<template>
  <v-app id="inspire">
    <Navbar />
    <v-main class="myBlack">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
export default {
  name: "AppMain",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
