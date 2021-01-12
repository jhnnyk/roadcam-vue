<template>
  <div id="app" class="text-gray-700 text-center">
    <TheHeader />
    <div class="container mb-8">
      <p>hello world</p>
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

<style lang="postcss">
a {
  @apply text-blue-800;
  &:hover {
    @apply underline;
  }
}
</style>
