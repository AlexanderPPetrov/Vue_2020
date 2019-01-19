<template>
  <b-form-group
      label="Оценка"
      label-for="selectRating"
    >
    <b-form-select 
    @change="selectRatingChange" 
    id="selectRating" 
    v-model="selected" 
    :options="options" class="mb-3" />
  </b-form-group>
</template>

<script>
export default {
  name: 'st-select-rating',
  data () {
    return {
      selected: 5,
      options: [
        { value: 2, text: 'Слаб' },
        { value: 5, text: 'Става' },
        { value: 7, text: 'Добър е' },
        { value: 10, text: 'Уникален'}
      ]
    }
  },
  methods: {
    selectRatingChange(value){
      if(value){
        this.$emit('selectRatingChange', value);
      }
    }
  }
}
</script>