<template>
  <div>
    <h1>States</h1>
    <ul>
      <li v-for="state in stateList" :key="state.index">
        <router-link :to="state.stateSlug">
          {{ state.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from '../store';
import { mapState } from 'vuex';

export default {
  name: 'HomePage',

  async created() {
    await store.dispatch('getStates');
  },

  computed: {
    ...mapState({
      stateList: (state) => state.stateList,
    }),
  },
};
</script>
