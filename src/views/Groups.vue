<template>
  <div id="groups">
    <groups-list />
  </div>
</template>

<script>
export default {
  name: 'Groups',
  components: {
    GroupsList: () => import('@/components/GroupsList.vue'),
  },
}
</script>

<style scoped>

</style>
