// import _ from 'lodash';
// import { validate } from 'class-validator';

// declare var GLOBAL: any;

// import Product from './product/index';

// const p1 = new Product('A book', 12.99);
// validate(p1).then(err => {
//   console.log(err);

// })

// console.log(p1);

// console.log(_.shuffle([1, 2, 3]))

// console.log(GLOBAL)

import Vue from 'vue';

import router from './router/index';
import store from './store/index';

import './utils/test.js';

// import HelloVue from './components/HelloVue.vue';
import App from './App.vue';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
