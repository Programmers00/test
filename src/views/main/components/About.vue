<template>
  <!-- About -->
  <div>
    <v-row>
      <v-col class="ma-0 pa-0">
        <v-card flat tile color="myGrey">
          <v-card-title class="pt-16 pl-16 pb-8 myBlack--text text-h5">
            About: Lorem Ipsum has been the industry's standard dummy.
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-card flat tile color="myGrey">
        <v-layout class="px-16 pb-16">
          <v-img contain src="@/assets/images/image.jpg"></v-img>
        </v-layout>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  data: () => ({ aboutData: "aboutDataString" }),
  watch: {},
  computed: {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
