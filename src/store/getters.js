export default {
  getMovieById: state => id =>
    state.students.find(movie => movie.id === id),
};
