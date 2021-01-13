<template>
  <div id="app" class="text-gray-700 text-center">
    <TheHeader />
    <div class="container mb-8">
      <p>hello <a href="/">world</a></p>
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
