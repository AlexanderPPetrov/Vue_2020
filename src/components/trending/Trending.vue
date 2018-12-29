<template>
  <div class="container mt-3">
      <st-movies-list></st-movies-list>
      <st-pagination @changePage="getTrendingMovies"></st-pagination>
  </div>
</template>

<script>
  import StMoviesList from '../common/MoviesList';
  import StPagination from '../common/Pagination';
  import actions from '../../store/action-types';
  import mutations from '../../store/mutation-types';

  export default {
    name: 'st-featured',
    components: {
      StMoviesList,
      StPagination,
    },
    beforeCreate() {
      this.$store.commit(mutations.SET_RESULT_TYPE, 'movie');
      this.$store.commit(mutations.SET_MOVIES, []);
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
