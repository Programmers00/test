import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
    themes: {
            light: {
        // add color
            myBlack: '#212322',
            myGrey: '#f7f8f8'
      },
    },
  },
});
