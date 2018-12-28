import mutations from './mutation-types';

export default {
  [mutations.SET_LOADER](state, isLoading) {
    state.isLoading = isLoading;
  },
  [mutations.SET_MOVIES](state, movies) {
    state.movies = movies;
  },
  [mutations.SET_CURRENT_PAGE](state, currentPage) {
    state.currentPage = currentPage;
  },
  [mutations.SET_TOTAL_RESULTS](state, totalResults) {
    state.totalResults = totalResults;
  },
};
