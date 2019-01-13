import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login';
import Navigation from '../components/navigation/Navigation';
import Trending from '../components/trending/Trending';
import Movies from '../components/movies/Movies';
import Series from '../components/series/Series';
import Favorite from '../components/favorite/Favorite';
import MovieDetails from '../components/moviedetails/MovieDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        default: Login,
      },
    },
    {
      path: '/trending',
      name: 'Trending',
      components: {
        navigation: Navigation,
        default: Trending,
      },
    },
    {
      path: '/movies',
      name: 'Movies',
      components: {
        navigation: Navigation,
        default: Movies,
      },
    },
    {
      path: '/series',
      name: 'Series',
      components: {
        navigation: Navigation,
        default: Series,
      },
    },
    {
      path: '/favorite',
      name: 'Favorite',
      components: {
        navigation: Navigation,
        default: Favorite,
      },
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      components: {
        navigation: Navigation,
        default: MovieDetails,
      },
    },
  ],
});
