<template>
  <div id="app" class="h-100">
    <loader></loader>
    <router-view name="navigation"></router-view>
    <router-view></router-view>
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

</style>
