<template>
  <v-layout
    id="slang"
    row
  >
    <v-flex xs12>
      <v-scroll-y-transition mode="out-in">
        <slang-text :slangId="slangId" />
      </v-scroll-y-transition>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Slang',
  components: {
    SlangText: () => import('@/containers/SlangText.vue'),
  },
  computed: {
    slangId() { return this.$route.params.slangId; },
  },
};
</script>

<style scoped>

</style>
