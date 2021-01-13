<template>
  <div>
    <p>home page</p>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'HomePage',
  async created() {
    const data = await db.collection('cams').get();
    data.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  },
};
</script>
