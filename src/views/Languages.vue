<template>
  <div id="languages">
    <languages-list />
  </div>
</template>

<script>
export default {
  name: 'Languages',
  components: {
    LanguagesList: () => import('@/containers/LanguagesList.vue'),
  },
};
</script>

<style scoped>

</style>
