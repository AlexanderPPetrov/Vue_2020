<template>
  <div class="container mt-3">
      <st-movies-list></st-movies-list>
  </div>
</template>

<script>
  import StMoviesList from './MoviesList';

  export default {
    name: 'st-movies',
    components: {
      StMoviesList,
    },
  };
</script>
