<template>
  <div id="phrases">
    <phrases-list />
  </div>
</template>

<script>
export default {
  name: 'Phrases',
  components: {
    PhrasesList: () => import('@/containers/PhrasesList.vue'),
  },
};
</script>

<style scoped>

</style>
