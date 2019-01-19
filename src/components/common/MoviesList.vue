<template>
  <div>
    <st-search-filter v-show="filteredResults.length" v-model="searchValue" pholder="Търси по име"></st-search-filter>
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
                               :rating="movie.vote_average"
                               @displayModal="displayModal"
        ></st-movie-list-item>
    </div>
     <b-modal
        id="rateModal" 
        title="Оцени филм"
        ref="rateModal"
        @ok="submitRating"
        >
        <p class="my-4">Дай своята оценка за</p>
        <p>{{ getCurrentMovieTitle }}</p>
        <st-select-rating @selectRatingChange="selectRatingChange"></st-select-rating>
      </b-modal>
  </div>
</template>

<script>
  import StSearchFilter from './SearchFilter';
  import StMovieListItem from './MovieListItem';
  import StSelectRating from './Rating';
  import actions from '../../store/action-types';

  export default {
    name: 'st-movies-list',
    components: {
      StSearchFilter,
      StMovieListItem,
      StSelectRating,
    },
    data() {
      return {
        searchValue: '',
        rating: 5
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
      displayModal(){
        this.$refs.rateModal.show();
      },
      submitRating(){
        const movieId = this.$store.state.currentMovie.id;
        this.$store.dispatch(actions.SUBMIT_RATING, {
          movieId,
          value: this.rating
        });
      },
      selectRatingChange(value){
        this.rating = value;
      }
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
      getCurrentMovieTitle(){
        if(!this.$store.state.currentMovie){
          return '';
        }
        return this.$store.state.currentMovie.title;
      }
    },

  };
</script>
