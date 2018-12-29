<template>
  <b-pagination align="center" :total-rows="totalRows" v-model="currentPage" :per-page="20" @input="input">
  </b-pagination>
</template>

<script>

  export default {
    name: 'st-pagination',
    data() {
      return {
        currentPage: 1,
      };
    },
    computed: {
      totalRows() {
        return this.$store.state.totalResults;
      },
    },
    methods: {
      input(value) {
        this.$emit('changePage', value);
      },
    },
  };
</script>
