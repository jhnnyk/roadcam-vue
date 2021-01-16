<template>
  <div>
    <p>
      <router-link to="/">Home</router-link> >
      <router-link :to="`/${$route.params.stateSlug}`">{{
        stateName
      }}</router-link>
      >
      {{ $route.params.hwySlug }}
    </p>

    <h1 class="text-4xl p-4">{{ stateName }} - {{ $route.params.hwySlug }}</h1>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'HwyPage',

  data() {
    return {
      stateName: '',
    };
  },

  async created() {
    const docRef = db.collection('cams').doc(this.$route.params.stateSlug);

    // get current location
    const doc = await docRef.get();
    this.stateName = doc.data().name;
  },
};
</script>
