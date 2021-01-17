import Vue from 'vue';
import Vuex from 'vuex';
import { db } from './firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    zoneList: [],
    currentZone: null,
  },

  getters: {},

  mutations: {
    setzoneList: (state, list) => {
      state.zoneList = list;
    },
    setCurrentZone: (state, currentZone) => {
      state.currentZone = currentZone;
    },
  },

  actions: {
    getZones: async ({ commit }) => {
      const zoneList = [];
      const data = await db.collection('cams').get();
      data.forEach((doc) => {
        zoneList.push({ zoneSlug: doc.id, name: doc.data().name });
      });
      commit('setzoneList', zoneList);
    },

    selectZone: async (context, zoneSlug) => {
      const currentZone = context.state.zoneList.find(
        (z) => z.zoneSlug === zoneSlug
      );
      context.commit('setCurrentZone', currentZone);
      // const docRef = db.collection('cams').doc(zoneSlug);

      // // get current location
      // const doc = await docRef.get();
      // this.stateName = doc.data().name;

      // // get all cams for current location
      // const snapshot = await docRef.collection('roads').get();

      // await snapshot.forEach((doc) => {
      //   // add all cams to local state
      //   this.cams.push(doc.data());

      //   // create list of routes
      //   const hwyIndex = this.hwys.findIndex((hwy) => {
      //     return hwy.slug === doc.data().routeSlug;
      //   });

      //   if (hwyIndex === -1) {
      //     this.hwys.push({
      //       slug: doc.data().routeSlug,
      //       name: doc.data().route,
      //     });
      //   }
      // });
    },
  },
});
