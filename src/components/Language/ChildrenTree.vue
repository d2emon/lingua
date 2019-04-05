<template>
  <v-treeview
    :active.sync="active"
    :items="children"
    :load-children="load"
    :open.sync="open"
    activatable
    active-class="primary--text"
    class="grey lighten-5"
    open-on-click
    transition
    expand-icon="mdi-chevron-down"
    loading-icon="mdi-loading"
  >
    <template v-slot:prepend="{ item, active }">
      <v-icon
        v-if="item.language"
      >
        mdi-translate
      </v-icon>
    </template>
    <template v-slot:label="{ item }">
      <router-link :to="item.link">{{ item.name }}</router-link>
    </template>
    <template v-slot:append="{ item }">
      <v-icon
        v-if="item.dead"
        color="error"
      >
        mdi-skull
      </v-icon>
    </template>
  </v-treeview>
</template>

<script>
export default {
  name: 'ChildrenTree',
  props: [
    'children',
  ],
  data: () => ({
    active: [],
    open: [],
  }),
  watch: {
    active: 'activate',
  },
  methods: {
    activate(items) { console.log(items); this.$emit('activate', items); },
    load(item) { this.$emit('load', item); },
  },
};
</script>

<style scoped>

</style>
