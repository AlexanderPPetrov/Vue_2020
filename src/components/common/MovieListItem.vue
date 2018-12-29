<template>
  <div class="col-md-6">
    <div class="card flex-row mt-3 movie-container">
      <div class="image-container">
        <img :src="getPoster" class="movie-thumbnail"/>
      </div>
      <div class="movie-info d-flex flex-column p-3">
        <h5>{{ title }}</h5>
        <p class="text-dark"><span>{{ date | moment("MMMM D Y") }}</span>
        <p class="text-black-50 overview-info">{{ overview }}</p>
        <div class="mt-auto d-flex justify-content-end">
          <b-button href="#" variant="default">View details</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import constants from '../../constants';

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
    },

  };
</script>

<style scoped>
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
</style>
