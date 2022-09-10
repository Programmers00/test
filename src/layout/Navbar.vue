<template>
  <v-app-bar app hide-on-scroll color="myBlack" flat>
    <v-container flex contain class="pa-5 mb-7 fill-height">
      <v-avatar color="white" size="32">
        <v-icon x-large color="myBlack"> mdi-bug </v-icon>
      </v-avatar>
      <v-toolbar-title class="white--text">NOhBUG</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.width >= 1240 ? true : false">
        <v-btn v-for="link in links" :key="link" text color="white">
          {{ link }}
        </v-btn>
      </div>
      <div v-else>
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
