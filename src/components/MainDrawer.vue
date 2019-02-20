<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <v-list>
      <v-list-tile
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="onClick($event, link)"
      >
        <v-list-tile-title v-text="link.title" />
      </v-list-tile>
    </v-list>  </v-navigation-drawer>
</template>

<script>
import {
  mapGetters,
  mapMutations,
} from 'vuex';

export default {
  name: 'MainDrawer',
  computed: {
    ...mapGetters('menu', ['links']),
    drawer: {
      get() { return this.$store.state.menu.drawer; },
      set(val) { this.setDrawer(val); },
    },
  },
  methods: {
    ...mapMutations('menu', ['setDrawer']),
    onClick(e, item) {
      e.stopPropagation();

      if (item.to === '/') {
        this.$vuetify.goTo(0);
        this.setDrawer(false);
        return;
      }

      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
      this.setDrawer(false);
    },
  },
};
</script>

<style scoped>

</style>
