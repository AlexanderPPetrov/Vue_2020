<template>
  <div class="col-md-4">
      <b-card :title="title"
          tag="article"
          class="mb-2">
          <div>
            <b-button @click="removeFavorite" variant="danger">
              Премахни
            </b-button>
          </div>
        <span>{{ date }}</span>      
        <p class="card-text">
          {{ overview }}
        </p>
      </b-card>
  </div>
</template>
<script>
  import mutations from '../../store/mutation-types';
  export default {
    props: {
      id: Number,
      title: String,
      date: String,
      overview: String,
    },
    name: 'st-favorite-item',
    methods: {
      removeFavorite(){
        const remainingFavs = this.$store.getters.getRemainingFavMovies(this.id);
        this.$store.commit(mutations.SET_FAVORITE_MOVIES, remainingFavs);
      }
    }
  };
</script>