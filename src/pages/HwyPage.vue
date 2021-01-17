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

    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="cam in cams" :key="cam.index" class="p-4">
        <!-- <router-link
          :to="`/${$route.params.stateSlug}/roads/${$route.params.hwySlug}/${cam.slug}`"
        > -->
        <router-link
          :to="{
            path: `/${$route.params.stateSlug}/roads/${$route.params.hwySlug}/${cam.slug}`,
          }"
        >
          {{ cam.name }}
          <img :src="cam.imageURL" :alt="cam.name" />
          {{ cam.description }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'HwyPage',

  data() {
    return {
      stateName: '',
      cams: [],
    };
  },

  async created() {
    const docRef = db.collection('cams').doc(this.$route.params.stateSlug);

    // get current location
    const doc = await docRef.get();
    this.stateName = doc.data().name;

    // get all cameras for current hwy
    const snapshot = await docRef
      .collection('roads')
      .where('routeSlug', '==', this.$route.params.hwySlug)
      .get();

    await snapshot.forEach((doc) => {
      this.cams.push(doc.data());
    });
  },
};
</script>
