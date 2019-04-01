<template>
  <v-layout row>
    <v-flex xs12>
      <v-scroll-y-transition mode="out-in">
        <groups-list />
      </v-scroll-y-transition>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'LanguageGroups',
  components: {
    GroupsList: () => import('@/components/GroupsList.vue'),
  },
};
</script>

<style scoped>

</style>
