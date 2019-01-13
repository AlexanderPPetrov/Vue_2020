<template>
  <div class="col-md-6">
    <div class="card flex-row mt-3 movie-container">
      <div class="image-container">
        <img :src="getPoster" class="movie-thumbnail"/>
      </div>
      <div class="movie-info d-flex flex-column p-3">
        <h5>{{ title }}</h5>
        <div>
          <i @click="addToFavorite" class="fa fa-star fav-icon" :class="getIsFav"></i>
        </div>
        <p class="text-dark"><span>{{ date | moment("MMMM D Y") }}</span>
        <p class="text-black-50 overview-info">{{ overview }}</p>
        <div class="mt-auto d-flex justify-content-end">
          <b-button @click="viewMovieDetails" variant="default">View details</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import constants from '../../constants';
  import mutations from '../../store/mutation-types';

  export default {
    name: 'st-movie-list-item',
    props: {
      poster: {
        type: String,
      },
      id: Number,
      overview: String,
      title: String,
      date: String,
    },
    computed: {
      getPoster() {
        let poster = this.poster;
        if (!poster) {
          poster = '/static/images/default.jpg';
        } else {
          poster = constants.basePosterURL + poster;
        }
        return poster;
      },
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
          const currentMovie = this.$store.getters.getMovieById(this.id);
          this.$store.commit(mutations.SET_CURRENT_MOVIE, currentMovie);
          this.$router.push({ name: 'Movie', params: { id: this.id} });
        }
    }

  };
</script>

<style lang="scss" scoped>
  .movie-thumbnail {
    width: 189px;
  }
  .overview-info {
    max-height: 126px;
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
