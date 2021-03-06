require('./bootstrap');
import Vuetify from 'vuetify';
window.Vue = require('vue');
Vue.use(Vuetify);

Vue.component('chat-app', require('./components/ChatApp.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
          },
    }),
})
