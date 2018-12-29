<template>
  <div>
    <st-search-filter v-model="searchValue" pholder="Търси по име"></st-search-filter>
    <p v-show="!filteredResults.length" class="text-center p-3">Няма намерени филми!</p>
    <div class="row mb-3">
      <st-movie-list-item v-if="filteredResults.length"
                               v-for="(movie) in filteredResults"
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
  import StSearchFilter from './SearchFilter';
  import StMovieListItem from './MovieListItem';

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
    methods: {
      transformDateKey(movies) {
        movies.map(movie => this.transformData(movie));
      },
      /*eslint no-param-reassign: ["error", { "props": false }]*/
      transformData(movie) {
        movie.release_date = movie.first_air_date;
        movie.title = movie.name;
      },
    },
    computed: {
      filteredResults() {
        const searchVal = this.searchValue.toLowerCase();
        const movies = this.$store.state.movies;
        let titleKey = 'title';
        if (this.$store.state.resultType === 'tv') {
          titleKey = 'name';
          this.transformDateKey(movies);
        }
        return movies.filter(movie => movie[titleKey].toLowerCase().indexOf(searchVal) !== -1);
      },
    },

  };
</script>
