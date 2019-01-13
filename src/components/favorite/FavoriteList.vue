<template>
  <div class="row mt-3">
      <st-favorite-item v-if="getFavoriteMovies.length"
          v-for="(movie) in getFavoriteMovies"
          :key="movie.id"
          :id="movie.id"
          :title="movie.title"
          :date="movie.release_date"
          :overview="movie.overview"
      >
    </st-favorite-item>
  </div>
</template>

<script>
  import StFavoriteItem from './FavoriteItem'
  export default {
    name: 'st-favorite-list',
    components: {
      StFavoriteItem,
    },
    computed: {
      getFavoriteMovies(){
        return this.$store.state.favoriteMovies;
      }
    }
  };
</script>