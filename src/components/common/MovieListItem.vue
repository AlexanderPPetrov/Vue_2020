<template>
  <div class="col-md-6">
    <div class="card flex-row mt-3 movie-container">
      <st-movie-image :poster="poster"></st-movie-image>
      <div class="movie-info d-flex flex-column p-3">
        <st-movie-rating :rating="rating"></st-movie-rating>
        <h5>{{ title }}</h5>
        <div>
          <i @click="addToFavorite" class="fa fa-star fav-icon" :class="getIsFav"></i>
        </div>
        <p class="text-dark"><span>{{ date | moment("MMMM D Y") }}</span>
        <p class="text-black-50 overview-info">{{ overview }}</p>
        <div class="mt-auto d-flex justify-content-between">
          <b-button @click="displayRateModal" variant="warning">Rate Movie</b-button>
          <b-button @click="viewMovieDetails" variant="success">View details</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import constants from '../../constants';
  import StMovieImage from './MovieImage';
  import StMovieRating from './MovieRating';
  import mutations from '../../store/mutation-types';

  export default {
    name: 'st-movie-list-item',
    props: {
      poster: {
        type: String,
      },
      id: Number,
      overview: String,
      rating: Number,
      title: String,
      date: String,
    },
    components: {
      StMovieImage,
      StMovieRating,
    },
    computed: {
      getIsFav() {
        if(this.$store.state.favoriteMovies.filter(movie => movie.id == this.id).length){
          return 'active';
        }
        return '';
      }
    },
    methods: {
        addToFavorite(){
          if(this.getIsFav){
            const remainingMovies = this.$store.getters.getRemainingFavMovies(this.id);
            this.$store.commit(mutations.SET_FAVORITE_MOVIES, remainingMovies);
          }else{
            const movie = this.$store.getters.getMovieById(this.id);
            this.$store.commit(mutations.ADD_FAVORITE, movie);
          }
        },
        viewMovieDetails(){
          this.setCurrentMovie();
          this.$router.push({ name: 'Movie', params: { id: this.id} });
        },
        setCurrentMovie(){
          const currentMovie = this.$store.getters.getMovieById(this.id);
          this.$store.commit(mutations.SET_CURRENT_MOVIE, currentMovie);
        },
        displayRateModal(){
          this.setCurrentMovie();
          this.$emit('displayModal');
        }
    }

  };
</script>

<style lang="scss" scoped>
  .movie-thumbnail {
    width: 189px;
  }
  .overview-info {
    max-height: 66px;
    overflow: hidden;
    font-size: .875rem;
  }
  .movie-container {
    max-height: 286px;
  }
  .fav-icon {
    cursor: pointer;
    &.active {
      color: orange;
    }
  }
</style>
