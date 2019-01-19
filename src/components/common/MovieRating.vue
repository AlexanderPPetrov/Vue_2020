<template>
    <div class="rating-container d-flex align-items-center mb-2">
      {{ getRating }}
      <div class="star-ratings-css ml-2">
        <div class="star-ratings-css-top" :style="getRatingStyle"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'st-movie-rating',
    props: {
      rating: {
        type: Number,
      },
    },
    computed: {
      getRating() {
        let rating = this.rating;
        rating = rating * 10 + '%';
        return rating;
      },
      getRatingStyle(){
        let rating = this.rating;
        rating = 'width: ' + rating*10 + '%';
        return rating;
      }
    },
  };
</script>

<style lang="scss" scoped>
.star-ratings-css {
  unicode-bidi: bidi-override;
  color: #c5c5c5;
  font-size: 20px;
  height: 25px;
  width: 100px;
  position: relative;
  padding: 0;
  overflow: hidden;
  text-shadow: 0px 1px 0 #a2a2a2;
  
  &-top {
    color: #e7711b;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  &-bottom {
    padding: 0;
    display: block;
    z-index: 0;
  }
}

</style>
