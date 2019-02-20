<template>
  <div class="home">
    <pages-list />
    <img alt="Vue logo" src="../assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import PagesList from '../components/PagesList.vue';

export default {
  name: 'home',
  components: {
    PagesList: () => import('@/components/PagesList.vue'),
    HelloWorld: () => import('@/components/HelloWorld.vue'),
  },
};
</script>
