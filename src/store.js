import Vue from 'vue';
import Vuex from 'vuex';
import { db } from './firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    stateList: [],
  },
  getters: {},
  mutations: {
    setStateList: (state, list) => {
      state.stateList = list;
    },
  },
  actions: {
    getStates: async ({ commit }) => {
      const stateList = [];
      const data = await db.collection('cams').get();
      data.forEach((doc) => {
        stateList.push({ stateSlug: doc.id, name: doc.data().name });
      });
      commit('setStateList', stateList);
    },
  },
});
