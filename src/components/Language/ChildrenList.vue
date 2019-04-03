<template>
  <v-list subheader>
    <!-- v-subheader>Recent chat</v-subheader -->
    <v-list-tile
      v-for="child in children"
      :key="child.slug"
      :to="`/groups/${child.slug}`"
    >
      <v-list-tile-content>
        <v-list-tile-title>
          {{child.name}}
          <v-icon
            v-if="child.dead"
            color="error"
          >
            mdi-skull
          </v-icon>
        </v-list-tile-title>
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
