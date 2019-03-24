<template>
  <div class="col-md-4">
      <b-card :title="name"
          tag="article"
          class="mb-2">
          <div>
            <b-button @click="removeGame" variant="danger">
              Премахни
            </b-button>
          </div>
        <span>{{ name }}</span>
        <span>{{ image }}</span>
        <p class="card-text">
          {{ description }}
        </p>
      </b-card>
  </div>
</template>
<script>
  import mutations from '../../store/mutation-types';
  export default {
    props: {
      id: String,
      name: String,
      description: String,
      image: String,
    },
    name: 'st-game-item',
    methods: {
      removeGame(){
        console.log('remove game');
      }
    }
  };
</script>
