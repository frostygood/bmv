import Vue from 'vue'
import Vuex from 'vuex'
import geoIp from './modules/geoip.js';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  namespaced: true,
  state: {
    overlay: false,
    mobileMenu: false,
    openModals: {
      contactUs: false,
    }
  },
  mutations: {
    setOverlay(state, overlay) {
      state.overlay = overlay
    },
    closeAllModals(state) {
      state.overlay = false;
      state.mobileMenu = false;
      for (var key in state.openModals) {
        state.openModals[key] = false;
      }
    },
    openModal(state, key) {
      state.overlay = false;
      state.mobileMenu = false;
      for (var i in state.openModals) {
        state.openModals[i] = false;
      }
      state.openModals[key] = true;
    },
    openMobileMenu(state) {
      for (var i in state.openModals) {
        state.openModals[i] = false;
      }
      state.overlay = true;
      state.mobileMenu = true;
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
