import networkClient from './network-client';

export default {
  getTrendingMovies(params, success, failure) {
    networkClient.get('trending/movie/day', success, failure, params);
  },
};
