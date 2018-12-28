import mutations from './mutation-types';

export default {
  [mutations.SET_LOADER](state, isLoading) {
    state.isLoading = isLoading;
  },
  [mutations.SET_MOVIES](state, movies) {
    state.movies = movies;
  },
};
