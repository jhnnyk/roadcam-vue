<template>
  <div>
    <h1>States</h1>
    <ul>
      <li v-for="state in states" :key="state.index">
        <router-link :to="state.stateSlug">
          {{ state.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'HomePage',

  data() {
    return {
      states: [],
    };
  },

  async created() {
    const data = await db.collection('cams').get();
    data.forEach((doc) => {
      this.states.push({ stateSlug: doc.id, name: doc.data().name });
      // console.log(doc.id, ' => ', doc.data());
    });
  },
};
</script>
