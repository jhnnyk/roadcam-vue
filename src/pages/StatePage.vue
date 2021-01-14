<template>
  <div>
    <h1>State Page here</h1>
    {{ $route.params }}
    hwy count: {{ hwys.length }}
    <ul>
      <li v-for="hwy in sortedHwys" :key="hwy.index">
        {{ hwy.slug }}
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
      cams: [],
      hwys: [],
    };
  },

  async created() {
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
