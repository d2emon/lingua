<template>
  <v-app>
    <main-toolbar />
    <main-drawer />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <main-footer />
  </v-app>
</template>

<script>
export default {
  name: 'Main',
  components: {
    MainToolbar: () => import('@/components/MainToolbar'),
    MainDrawer: () => import('@/components/MainDrawer'),
    MainFooter: () => import('@/components/MainFooter'),
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  blockquote {
    border-left: .25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
  }
</style>
