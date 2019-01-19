<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/discover">Търси филми</b-nav-item>
          <b-nav-item to="/trending">Популярни</b-nav-item>
          <b-nav-item to="/movies">Филми</b-nav-item>
          <b-nav-item to="/series">Сериали</b-nav-item>
          <b-nav-item to="/favorite">Любими</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <st-movie-search></st-movie-search>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
  import StMovieSearch from '../common/MovieSearch';
  export default {
    components: {
      StMovieSearch,
    }
  };
</script>
