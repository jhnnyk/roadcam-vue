<template>
  <div id="app" class="text-gray-700 text-center">
    <TheHeader />
    <div class="container mb-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>
