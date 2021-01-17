<template>
  <div>
    <h1>States</h1>
    <ul>
      <li v-for="zone in zoneList" :key="zone.index">
        <router-link :to="zone.zoneSlug">
          {{ zone.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomePage',

  computed: {
    ...mapState({
      zoneList: (state) => state.zoneList,
    }),
  },
};
</script>
