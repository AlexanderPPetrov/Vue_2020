<template>
  <div class="row mt-3">
      <st-game-item v-if="getGamesList.length"
          v-for="(game) in getGamesList"
          :key="game.id"
          :id="game.id"
          :name="game.name"
          :image="game.image"
          :description="game.description"
      >
    </st-game-item>
  </div>
</template>

<script>
  import StGameItem from './GameItem'
  import actions from '../../store/action-types'
  export default {
    name: 'st-games-list',
    components: {
      StGameItem,
    },
    created() {
      this.getTopRatedTv();
    },
    methods: {
      getTopRatedTv() {
        this.$store.dispatch(actions.GET_GAMES_LIST);
      },
    },
    computed: {
      getGamesList(){
        return this.$store.state.gamesList;
      }
    }
  };
</script>
