import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueSplide from '@splidejs/vue-splide';

Vue.use( VueSplide );
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#4380B9',
            success: '#88B950'
          },
        },
      },
});
