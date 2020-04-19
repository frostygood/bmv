import Vue from 'vue'
import Vuex from 'vuex'
import geoIp from './modules/geoip.js';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  namespaced: true,
  state: {
    openModals: {
      contactUs: false,
    }
  },
  mutations: {
    closeAllModals(state) {
      for (var key in state.openModals) {
        state.openModals[key] = false;
      }
    },
    openModal(state, key) {
      for (var i in state.openModals) {
        state.openModals[i] = false;
      }
      state.openModals[key] = true;
    },
  },
  actions: {

  },
  getters: {

  },
  modules: {
    geo: geoIp,
  },
});

export default store
