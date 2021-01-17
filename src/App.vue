<template>
  <div id="app" class="text-gray-700 text-center">
    <TheHeader />
    <div class="container mb-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { store } from './store';
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
  async created() {
    await store.dispatch('getZones');

    if (this.$route.params.zoneSlug) {
      await store.dispatch('selectZone', this.$route.params.zoneSlug);
    }
  },
};
</script>
