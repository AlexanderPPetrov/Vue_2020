<template>
<div class="container">
  <div class="row">
    <div class="col">
      <div class="card flex-row mt-3 movie-container">
        <st-movie-image :poster="getCurrentMovie.poster_path"></st-movie-image>
        <div class="movie-info d-flex flex-column p-3">
          <st-movie-rating :rating="getCurrentMovie.vote_average"></st-movie-rating>
          <h5>{{getCurrentMovie.title}}</h5>
          <div>
            <!-- <i @click="addToFavorite" class="fa fa-star fav-icon" :class="getIsFav"></i> -->
          </div>
          <p class="text-dark"><span>{{ getCurrentMovie.release_date | moment("MMMM D Y") }}</span>
          <p class="text-black-50 overview-info">{{ getCurrentMovie.overview }}</p>
        </div>
        </div>
    </div>
  </div>
</div>

</template>

<script>
  import actions from '../../store/action-types';
  import StMovieImage from '../common/MovieImage';
  import StMovieRating from '../common/MovieRating';
  export default {
    name: 'st-movie-details',
    created(){
      if(!this.$store.state.currentMovie){
        const movieId = this.$route.params.id;
        this.$store.dispatch(actions.GET_MOVIE_DETAILS, movieId);
      }
    },
    components: {
      StMovieImage,
      StMovieRating,
    },
    computed: {
      getCurrentMovie(){
        if(this.$store.state.currentMovie){
          return this.$store.state.currentMovie
        }
        return {};
      }
    }
  }
</script>