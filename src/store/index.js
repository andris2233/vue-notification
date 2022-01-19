import Vue from 'vue';
import Vuex from 'vuex';

import notification from './modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notifications: [],
  },

  mutations: {},

  actions: {},

  modules: { notification },
});
