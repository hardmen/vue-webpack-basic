import Vue from 'vue';

import router from './router/index';
import store from './store/index';

import './utils/test.js';
// Use some Third-Part plugins
import './plugins/index';

// import HelloVue from './components/HelloVue.vue';
import App from './App.vue';

Vue.prototype.$$errorHandler = function() {};

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
