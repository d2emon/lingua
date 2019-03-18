<template>
  <div id="about">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
export default {
  name: 'about',
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue'),
  },
};
</script>
