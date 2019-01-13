export default {
  getMovieById: state => id =>
    state.movies.find(movie => movie.id === id),
  getRemainingFavMovies: state => id =>
    state.favoriteMovies.filter(movie => movie.id !== id)  
};
