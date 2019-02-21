<template>
  <v-app>
    <!-- main-toolbar / -->
    <!-- main-drawer / -->
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- v-content id="home">
      <router-view />
    </v-content -->
    <!-- main-footer / -->
  </v-app>
</template>

<script>
export default {
  name: 'Main',
  components: {
    // MainToolbar: () => import('@/components/MainToolbar'),
    // MainDrawer: () => import('@/components/MainDrawer'),
    // MainFooter: () => import('@/components/MainFooter'),
  },
};
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
