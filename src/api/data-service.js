import networkClient from './network-client';

export default {
  getTrendingMovies(params, success, failure) {
    networkClient.get('trending/movie/day', success, failure, params);
  },
  getTopRatedMovies(params, success, failure) {
    networkClient.get('movie/top_rated', success, failure, params);
  },
  getTopRatedTv(params, success, failure) {
    networkClient.get('tv/top_rated', success, failure, params);
  },
  getMovieDetails(id, success, failure) {
    networkClient.get(`movie/${id}`, success, failure, id);
  },
};
