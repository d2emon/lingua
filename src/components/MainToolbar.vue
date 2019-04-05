<template>
  <v-toolbar
    app
    flat
  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    >
      <v-icon>mdi-menu</v-icon>
    </v-toolbar-side-icon>
    <v-container
      mx-auto
      py-0
    >
      <v-layout>
        <router-link to="/">
          <v-img
            :src="require('@/assets/logo.png')"
            class="mr-5"
            contain
            height="48"
            width="48"
            max-width="48"
          />
        </router-link>
        <!-- v-toolbar-title>{{title}}</v-toolbar-title -->
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          flat
          @click="onClick($event, link)"
        >
          {{link.title}}
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
} from 'vuex';

export default {
  name: 'MainToolbar',
  computed: {
    ...mapState('menu', ['title']),
    ...mapGetters('menu', ['links']),
  },
  methods: {
    ...mapMutations('menu', ['toggleDrawer']),
    onClick(e, item) {
      e.stopPropagation();

      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
  },
};
</script>

<style scoped>

</style>
