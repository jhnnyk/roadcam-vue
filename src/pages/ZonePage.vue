<template>
  <div>
    <div v-if="currentZone">
      <p>
        <router-link to="/">Home</router-link> >
        <router-link :to="$route.params.zoneSlug">
          {{ currentZone.name }}
        </router-link>
        > roads
      </p>

      <h1 class="text-4xl p-4">{{ currentZone.name }} roads</h1>
    </div>

    <!-- <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="hwy in sortedHwys" :key="hwy.index">
        <router-link :to="{ name: 'HwyPage', params: { hwySlug: hwy.slug } }">{{
          hwy.slug
        }}</router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { store } from '../store';
import { mapState } from 'vuex';

export default {
  name: 'ZonePage',

  async created() {
    await store.dispatch('selectZone', this.$route.params.zoneSlug);
  },

  computed: {
    ...mapState({
      currentZone: (state) => state.currentZone,
    }),
    // sortedHwys() {
    //   const sortHwys = this.hwys;
    //   return sortHwys.sort((a, b) => {
    //     if (a.slug > b.slug) return 1;
    //     if (a.slug < b.slug) return -1;
    //     return 0;
    //   });
    // },
  },
};
</script>
