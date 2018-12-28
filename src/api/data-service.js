import networkClient from './network-client';

export default {
  getTrendingMovies(success, failure) {
    networkClient.get('trending/movie/day', success, failure);
  },
};
