<template>
  <v-container fluid>
    <!-- Introduction -->
    <Introduction />
    <!-- About -->
    <About />
    <!-- Information -->
    <Information />
  </v-container>
</template>

<script>
import Introduction from "./components/Introduction.vue";
import About from "./components/About.vue";
import Information from "./components/Information.vue";
export default {
  name: "Main",
  components: {
    Introduction,
    About,
    Information,
  },
  data: () => ({}),
  watch: {},
  computed: {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
