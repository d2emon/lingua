<template>
  <div id="home">
    <pages-list />
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    PagesList: () => import('@/components/PagesList.vue'),
  },
};
</script>
