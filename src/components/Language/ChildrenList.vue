<template>
  <v-list subheader>
    <!-- v-subheader>Recent chat</v-subheader -->
    <v-list-tile
      v-for="child in children"
      :key="child.slug"
      :to="`/groups/${child.slug}`"
    >
      <v-list-tile-content>
        <v-list-tile-title v-html="child.name"></v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'ChildrenList',
  props: [
    'children',
  ],
};
</script>

<style scoped>

</style>
