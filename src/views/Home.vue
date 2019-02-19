<template>
  <div class="home">
    <pages-list />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import PagesList from "../components/PagesList";

export default {
  name: 'home',
  components: {
    PagesList,
    HelloWorld,
  },
};
</script>
