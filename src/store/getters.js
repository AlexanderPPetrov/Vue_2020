export default {
  getMovieById: state => id =>
    state.movies.find(movie => movie.id === id),
};
