<template>
  <div id="conlangs">
    <conlangs-list />
  </div>
</template>

<script>
export default {
  name: 'Conlangs',
  components: {
    ConlangsList: () => import('@/containers/ConlangsList.vue'),
  },
};
</script>

<style scoped>

</style>
