<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="myBlack white--text">
        <strong class="subheading"
          >Footer: Get connected with us on social networks!</strong
        >
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon color="grey darken-1" size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-divider color="grey"></v-divider>
      <v-card class="flex" flat tile color="myBlack">
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Footer</strong>
        </v-card-text>
      </v-card>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
