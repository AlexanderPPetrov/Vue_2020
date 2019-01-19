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
  [mutations.SET_RESULT_TYPE](state, resultType) {
    state.resultType = resultType;
  },
  [mutations.ADD_FAVORITE](state, movie) {
    state.favoriteMovies.push(movie);
  },
  [mutations.SET_FAVORITE_MOVIES](state, movies) {
    state.favoriteMovies = movies;
  },
  [mutations.SET_CURRENT_MOVIE](state, movie) {
    state.currentMovie = movie;
  },
  [mutations.SET_MOVIES_GENRES](state, genres) {
    state.movieGenres = genres;
  },
};
