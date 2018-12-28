<template>
  <div>
    <st-search-filter v-model="searchValue" pholder="Търси по име"></st-search-filter>
    <p v-show="!filteredMovies.length" class="text-center p-3">Няма намерени филми!</p>
    <div class="row">
      <st-movie-list-item v-if="filteredMovies.length"
                               v-for="(movie) in filteredMovies"
                               :key="movie.id"
                               :id="movie.id"
                               :title="movie.title"
                               :overview="movie.overview"
                               :poster="movie.poster_path"
                               :date="movie.release_date"
        ></st-movie-list-item>
    </div>
  </div>
</template>

<script>
  import StSearchFilter from '../common/SearchFilter';
  import StMovieListItem from './MovieListItem';
  import actions from '../../store/action-types';

  export default {
    name: 'st-movies-list',
    components: {
      StSearchFilter,
      StMovieListItem,
    },
    data() {
      return {
        searchValue: '',
      };
    },
    computed: {
      filteredMovies() {
        const searchVal = this.searchValue.toLowerCase();
        const movies = this.$store.state.movies;
        return movies.filter(movie => movie.title.toLowerCase().indexOf(searchVal) !== -1);
      },
    },
    created() {
      this.getTrendingMovies();
    },
    methods: {
      getTrendingMovies() {
        this.$store.dispatch(actions.GET_TRENDING_MOVIES);
      },
    },
  };
</script>
