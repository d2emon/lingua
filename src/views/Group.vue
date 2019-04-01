<template>
  <div id="group">
    <language-group :group="group" />
  </div>
</template>

<script>
export default {
  name: 'Group',
  components: {
    LanguageGroup: () => import('@/components/LanguageGroup.vue'),
  },
  computed: {
    group() { return this.$route.params.group; },
  },
};
</script>

<style scoped>

</style>
