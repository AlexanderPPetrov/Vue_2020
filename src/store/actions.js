import mutations from './mutation-types';
import actions from './action-types';
import dataService from '../api/data-service';

export default {
  [actions.GET_TRENDING_MOVIES]({commit}, page) {
    commit(mutations.SET_LOADER, true);
    dataService.getTrendingMovies(
      page,
      (responseMovies) => {
        commit(mutations.SET_MOVIES, responseMovies.results);
        commit(mutations.SET_TOTAL_RESULTS, responseMovies.total_results);
        commit(mutations.SET_CURRENT_PAGE, responseMovies.page);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.GET_TOP_RATED_MOVIES]({commit}, page) {
    commit(mutations.SET_LOADER, true);
    dataService.getTopRatedMovies(
      page,
      (responseMovies) => {
        commit(mutations.SET_MOVIES, responseMovies.results);
        commit(mutations.SET_TOTAL_RESULTS, responseMovies.total_results);
        commit(mutations.SET_CURRENT_PAGE, responseMovies.page);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.GET_TOP_RATED_TV]({commit}, page) {
    commit(mutations.SET_LOADER, true);
    dataService.getTopRatedTv(
      page,
      (responseMovies) => {
        commit(mutations.SET_MOVIES, responseMovies.results);
        commit(mutations.SET_TOTAL_RESULTS, responseMovies.total_results);
        commit(mutations.SET_CURRENT_PAGE, responseMovies.page);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.GET_MOVIE_DETAILS]({commit}, id) {
    commit(mutations.SET_LOADER, true);
    dataService.getMovieDetails(
      id,
      (responseMovie) => {
        commit(mutations.SET_CURRENT_MOVIE, responseMovie);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.GET_SEARCH_RESULTS]({commit}, params) {
    commit(mutations.SET_LOADER, true);
    dataService.getSearchResults(
      params,
      (response) => {
        commit(mutations.SET_MOVIES, response.results);
        commit(mutations.SET_TOTAL_RESULTS, responseMovies.total_results);
        commit(mutations.SET_CURRENT_PAGE, responseMovies.page);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.GET_MOVIE_GENRES]({commit}, params = {}) {
    commit(mutations.SET_LOADER, true);
    dataService.getMovieGenres(
      params,
      (response) => {
        commit(mutations.SET_MOVIES_GENRES, response.genres);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.GET_FILTERED_MOVIES]({commit}, params = {}) {
    commit(mutations.SET_LOADER, true);
    dataService.getFilteredMovies(
      params,
      (responseMovies) => {
        commit(mutations.SET_MOVIES, responseMovies.results);
        commit(mutations.SET_TOTAL_RESULTS, responseMovies.total_results);
        commit(mutations.SET_CURRENT_PAGE, responseMovies.page);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.SUBMIT_RATING]({commit}, params = {}) {
    commit(mutations.SET_LOADER, true);
    dataService.submitRating(
      params.movieId,
      {value: params.value},
      (response) => {
        console.log(response);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
};
