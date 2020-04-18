import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../views/Home.vue';
import DetailPage from '../views/Detail.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: HomePage,
    },
    {
      name: 'Home',
      path: '/home',
      component: HomePage,
    },
    {
      name: 'Detail',
      path: '/detail',
      component: DetailPage,
    },
  ],
});
