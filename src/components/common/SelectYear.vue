<template>
  <b-form-group
      label="Година"
      label-for="selectYear"
    >
    <b-form-select @change="selectYearChange" id="selectYear" v-model="selected" :options="options" class="mb-3" />
  </b-form-group>
</template>

<script>
export default {
  name: 'st-select-year',
  data () {
    return {
      selected: '2019',
      options: [
        { value: null, text: 'Избери година' },
        { value: '2019', text: '2019' },
        { value: '2018', text: '2018' },
        { value: '2017', text: '2017' },
        { value: '2016', text: '2016'}
      ]
    }
  },
  methods: {
    selectYearChange(value){
      if(value){
        this.$emit('selectYearChange', value);
      }
    }
  }
}
</script>