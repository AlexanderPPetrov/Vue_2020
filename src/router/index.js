import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login';
import Navigation from '../components/navigation/Navigation';
import Home from '../components/home/Home';
import Movies from '../components/movies/Movies';

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
      path: '/home',
      name: 'Home',
      components: {
        navigation: Navigation,
        default: Home,
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
  ],
});
