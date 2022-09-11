<template>
  <v-container fluid class="ma-0 pa-0">
    <v-card min-height="30vh" flat tile color="myGrey">
      <v-card-title>axios api example</v-card-title>
      <v-btn class="mx-16 mt-8" @click="getData">GET</v-btn>
      <v-btn class="mx-16 mt-8" @click="postData">POST</v-btn>
      <v-btn class="mx-16 mt-8" @click="putData">PUT</v-btn>
      <v-btn class="mx-16 mt-8" @click="deleteData">DELETE</v-btn>
      <v-btn color="grey" class="mx-16 mt-8" @click="clearData">CLEAR</v-btn>
      <v-card-subtitle class="ma-8 black--text">
        {{ response }}
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Api",
  components: {},
  data: () => ({ response: "" }),
  watch: {},
  computed: {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    getData() {
      axios
        .get("https://httpbin.org/get", { params: { answer: 42 } })
        .then((response) => {
          console.log(response);
          this.response = JSON.stringify(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postData() {
      axios
        .post("https://httpbin.org/post", { hello: "world" })
        .then((response) => {
          console.log(response);
          this.response = JSON.stringify(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    putData() {
      axios
        .put("https://httpbin.org/put", { hello: "world" })
        .then((response) => {
          console.log(response);
          this.response = JSON.stringify(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteData() {
      axios
        .delete(`https://httpbin.org/delete`, { data: { answer: 42 } })
        .then((response) => {
          console.log(response);
          this.response = JSON.stringify(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    clearData() {
      this.response = "";
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
