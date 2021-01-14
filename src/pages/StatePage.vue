<template>
  <div>
    <p>
      <router-link to="/">Home</router-link> >
      <router-link :to="$route.params.stateSlug">
        {{ stateName }}
      </router-link>
      > roads
    </p>

    <h1 class="text-4xl p-4">{{ stateName }} roads</h1>

    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="hwy in sortedHwys" :key="hwy.index">
        <router-link :to="{ name: 'HwyPage', params: { hwySlug: hwy.slug } }">{{
          hwy.slug
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'StatePage',

  data() {
    return {
      stateName: '',
      cams: [],
      hwys: [],
    };
  },

  async created() {
    const docRef = db.collection('cams').doc(this.$route.params.stateSlug);

    // get current location
    const doc = await docRef.get();
    this.stateName = doc.data().name;

    // get all cams for current location
    const snapshot = await db
      .collection('cams')
      .doc(this.$route.params.stateSlug)
      .collection('roads')
      .get();

    await snapshot.forEach((doc) => {
      // add all cams to local state
      this.cams.push(doc.data());

      // create list of routes
      const hwyIndex = this.hwys.findIndex((hwy) => {
        return hwy.slug === doc.data().routeSlug;
      });

      if (hwyIndex === -1) {
        this.hwys.push({
          slug: doc.data().routeSlug,
          name: doc.data().route,
        });
      }
    });
  },

  computed: {
    sortedHwys() {
      const sortHwys = this.hwys;
      return sortHwys.sort((a, b) => {
        if (a.slug > b.slug) return 1;
        if (a.slug < b.slug) return -1;
        return 0;
      });
    },
  },
};
</script>
