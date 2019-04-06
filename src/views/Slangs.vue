<template>
  <v-layout
    id="slangs"
    row
  >
    <v-flex xs12>
      <v-scroll-y-transition mode="out-in">
        <slangs-list />
      </v-scroll-y-transition>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Slang',
  components: {
    SlangsList: () => import('@/containers/SlangsList.vue'),
  },
};
</script>

<style scoped>

</style>
