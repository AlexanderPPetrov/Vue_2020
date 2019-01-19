<template>
  <div id="app">
    <loader></loader>
    <router-view name="navigation"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
  import Loader from './components/loader/Loader';

  export default {
    name: 'App',
    components: {
      Loader,
    },
  };
</script>

<style scoped>
  #app {
    position: relative;
    padding-bottom: 60px;
    min-height: 100%;
  }
</style>
