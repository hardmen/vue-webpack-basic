import Vue from 'vue';
import VueRouter from 'vue-router';

import namespaces from './routes/index';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [...namespaces],
});
