<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-side-icon><v-icon>mdi-menu</v-icon></v-toolbar-side-icon>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-view-module</v-icon>
          </v-btn>
        </v-toolbar>

        <!-- v-list two-line subheader>
          <v-subheader inset>{{subtitle}}</v-subheader>

          <v-list-tile
            v-for="page in pages"
            :key="page.title"
            avatar
            :to="page.to"
          >
            <v-list-tile-avatar>
              <v-icon class="grey lighten-1 white--text">{{ page.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ page.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list -->
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PagesList',
  computed: {
    ...mapState('menu', [
      'title',
      'subtitle',
      'pages',
    ]),
  },
};
</script>

<style scoped>

</style>
