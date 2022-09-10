<template>
  <v-container fluid>
    <!-- title -->
    <v-row>
      <v-col class="ma-0 pa-0">
        <v-card min-height="30vh" flat tile color="myBlack">
          <v-card-title class="ma-16 pa-16 white--text text-h4">
            Title: Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <!-- Image -->
    <v-row>
      <v-col class="ma-0 pa-0">
        <v-card flat tile color="myGrey">
          <v-card-title class="pt-16 pl-16 pb-8 myBlack--text text-h5">
            Image: Lorem Ipsum has been the industry's standard dummy.
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
    <!-- Information -->
    <v-row>
      <v-col class="ma-0 pa-0">
        <v-card flat tile color="myGrey">
          <v-card-title class="pt-16 pl-16 pb-8 myBlack--text text-h5">
            Information: Lorem Ipsum has been the industry's standard dummy.
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-card flat tile color="myGrey pb-16">
        <v-row>
          <v-col
            class="ma-0 pa-0"
            v-for="{ title, subtitle } in information"
            :key="title"
            cols="6"
          >
            <v-card flat tile color="myGrey" fill-height class="px-16">
              <v-card-title> {{ title }} </v-card-title>
              <v-card-subtitle>
                {{ subtitle }}
              </v-card-subtitle>
              <v-card-actions>
                <v-btn color="myBlack" text @click="click(title)">
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Main",
  components: {},
  data: () => ({
    information: [
      {
        title: "Information1",
        subtitle: `Suspendisse sit amet sodales mi. Nulla maximus dui quis eros tempus, tempor hendrerit tortor rhoncus. Mauris at massa ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consectetur fermentum lacus, in vehicula nunc auctor ac. Quisque ac magna eros.`,
      },
      {
        title: "Information2",
        subtitle: `Phasellus blandit lobortis dui, id consectetur tellus maximus ut. Sed feugiat velit nec placerat blandit. Mauris enim arcu, cursus et efficitur non, tincidunt vitae nibh. Sed volutpat dignissim leo. Nulla sagittis velit at erat ultrices, a lobortis libero aliquet. Vivamus ultricies vitae tortor non efficitur.`,
      },
      {
        title: "Information3",
        subtitle: `Sed placerat fringilla justo ut faucibus. Sed imperdiet pharetra ante, sit amet mattis nisi convallis vitae. Nam eleifend lacus eu efficitur vestibulum. Cras sed placerat lectus. Nullam vitae nisl posuere, scelerisque odio ut, mollis nisl. Vestibulum lacinia leo vel dapibus tempor. Vivamus sed auctor ipsum.`,
      },
      {
        title: "Information4",
        subtitle: `Praesent et congue mi. In egestas sodales odio sed commodo. Morbi maximus dictum facilisis. Sed elementum augue sit amet nunc scelerisque, eu consequat justo cursus. Donec nibh tortor, interdum sit amet tellus ac, blandit fermentum eros. Vivamus porta gravida justo ut euismod.`,
      },
    ],
  }),
  watch: {},
  computed: {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    click(route) {
      console.log("click", route.toLowerCase());
      this.$router.push("/" + route.toLowerCase());
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
