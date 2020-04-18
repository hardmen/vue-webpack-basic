import Vue from 'vue';
import Vuex from 'vuex';

// Add a polyfill for unsupport promise
import 'es6-promise/auto';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
  },
});
