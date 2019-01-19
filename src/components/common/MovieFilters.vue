<template>
  <div class="row">
    <div class="col-sm-4">
        <st-select-year @selectYearChange="selectYearChange"></st-select-year>
    </div>
    <div class="col-sm-4">
        <st-sort-by @sortByChange="sortByChange"></st-sort-by>
    </div>
    <div class="col-sm-4">
        <st-select-genres @selectGenresChange="selectGenresChange"></st-select-genres>
    </div>
  </div>
</template>

<script>
import StSelectYear from './SelectYear';
import StSortBy from './SortBy';
import actions from '../../store/action-types';
import StSelectGenres from './SelectGenres';
export default {
  name: 'st-movie-filters',
  data() {
    return {
      filters: {
        year: '2019'
      }
    }
  },
  created(){
    this.getFilteredMoves();
  },
  components: {
    StSelectYear,
    StSortBy,
    StSelectGenres,
  },
  methods: {
    selectYearChange(value){
      this.changeFilters('year', parseInt(value));
    },
    sortByChange(value){
      this.changeFilters('sort_by', value);
    },
    selectGenresChange(value){
      this.changeFilters('with_genres', value.toString());
    },
    changeFilters(key, value){
      this.filters[key] = value;
      this.getFilteredMoves();
    },
    getFilteredMoves(){
      this.$store.dispatch(actions.GET_FILTERED_MOVIES, this.filters);
    }
  }
}
</script>