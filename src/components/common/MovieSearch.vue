<template>
    <b-nav-form>
      <b-form-input v-model="searchValue" size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
      <b-button @click="searchMovies" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
</template>

<script>
  import actions from '../../store/action-types';
  export default {
    name: 'st-movie-search',
    data() {
      return {
        searchValue: '',
      };
    },
    methods: {
      searchMovies(){
        this.$store.dispatch(actions.GET_SEARCH_RESULTS, {query: this.searchValue});
      }
    }
  };
</script>
