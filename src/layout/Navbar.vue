<template>
  <v-app-bar app hide-on-scroll color="myBlack" flat>
    <v-container flex contain class="pa-5 mb-7 fill-height">
      <v-icon x-large color="white"> mdi-bug </v-icon>
      <v-toolbar-title class="white--text text-h4">NOhBUG</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-lg-block">
        <v-btn v-for="link in links" :key="link" text color="white">
          {{ link }}
        </v-btn>
      </div>
      <div class="d-lg-none">
        <v-btn text color="myBlack">
          <v-icon x-large color="white"> mdi-hamburger </v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data: () => ({
    links: ["About", "Information", "Updates"],
  }),
  computed: {},
  mounted() {},
  updated() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
