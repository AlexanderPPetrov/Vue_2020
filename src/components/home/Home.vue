<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-8">
        <st-featured-image></st-featured-image>
      </div>
      <div class="col">

      </div>
    </div>
  </div>
</template>

<script>
  import StFeaturedImage from './FeaturedImage';

  export default {
    name: 'st-home',
    components: {
      StFeaturedImage,
    },
  };
</script>
