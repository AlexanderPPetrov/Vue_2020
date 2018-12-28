<template>
  <div>
    <st-search-filter v-model="searchValue" pholder="Търси по име"></st-search-filter>
    <p v-show="!filteredMovies.length" class="text-center p-3">Няма намерени филми!</p>
    <div class="row mb-3">
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
    <st-pagination :totalRows="totalRows" @changePage="getTrendingMovies"></st-pagination>
  </div>
</template>

<script>
  import StPagination from '../common/Pagination';
  import StSearchFilter from '../common/SearchFilter';
  import StMovieListItem from '../common/MovieListItem';
  import actions from '../../store/action-types';

  export default {
    name: 'st-movies-list',
    components: {
      StPagination,
      StSearchFilter,
      StMovieListItem,
    },
    data() {
      return {
        searchValue: '',
      };
    },
    computed: {
      totalRows() {
        return this.$store.state.totalResults;
      },
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
      getTrendingMovies(page = this.$store.state.currentPage) {
        this.$store.dispatch(actions.GET_TRENDING_MOVIES, {page});
      },

    },
  };
</script>
