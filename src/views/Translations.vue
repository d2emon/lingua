<template>
  <div
    id="languages"
    row
  >
    <v-flex xs12>
      <v-scroll-y-transition mode="out-in">
        <translations-list />
      </v-scroll-y-transition>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'Translations',
  components: {
    TranslationsList: () => import('@/containers/TranslationsList.vue'),
  },
};
</script>

<style scoped>

</style>
