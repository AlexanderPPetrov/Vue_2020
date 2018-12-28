<template>
  <div>
    <b-input-group append="Намери">
      <b-form-input :pholder="pholder" v-model="search" @input="input"></b-form-input>
    </b-input-group>
  </div>
</template>

<script>

  export default {
    name: 'mt-search-filter',
    props: {
      pholder: String,
    },
    data() {
      return {
        search: '',
      };
    },
    methods: {
      input(value) {
        this.$emit('input', value);
      },
    },
  };
</script>
