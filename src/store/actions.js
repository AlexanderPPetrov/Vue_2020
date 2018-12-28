import mutations from './mutation-types';
import actions from './action-types';
import dataService from '../api/data-service';

export default {
  [actions.GET_TRENDING_MOVIES]({commit}) {
    commit(mutations.SET_LOADER, true);
    dataService.getTrendingMovies(
      (responseMovies) => {
        commit(mutations.SET_MOVIES, responseMovies.results);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
};
