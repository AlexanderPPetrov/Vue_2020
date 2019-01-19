<template>
  <b-form-group
      label="Критерий"
      label-for="sortBy"
    >
    <b-form-select @change="sortByChange" id="sortBy" v-model="selected" :options="options" class="mb-3" />
  </b-form-group>
</template>

<script>
export default {
  name: 'st-sort-by',
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Сортирай по' },
        { value: 'popularity.desc', text: 'Най-популярни' },
        { value: 'release_date.desc', text: 'Най-нови' },
        { value: 'release_date.asc', text: 'Най-стари' },
        { value: 'vote_average.desc', text: 'Най-висок рейтинг'},
        { value: 'vote_average.asc', text: 'Най-нисък рейтинг'},
      ]
    }
  },
  methods: {
    sortByChange(value){
      this.$emit('sortByChange', value);
    }
  }
}
</script>