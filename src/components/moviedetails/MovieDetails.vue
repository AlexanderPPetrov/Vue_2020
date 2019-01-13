<template>
<div>{{getCurrentMovie.title}}</div>
</template>

<script>
  import actions from '../../store/action-types';
  export default {
    name: 'st-movie-details',
    created(){
      if(!this.$store.state.currentMovie){
        const movieId = this.$route.params.id;
        this.$store.dispatch(actions.GET_MOVIE_DETAILS, movieId);
      }
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