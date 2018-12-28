<template>
  <b-pagination align="center" :total-rows="totalRows" v-model="currentPage" :per-page="20" @input="input">
  </b-pagination>
</template>

<script>

  export default {
    name: 'st-pagination',
    props: {
      totalRows: Number,
    },
    data() {
      return {
        currentPage: 1,
      };
    },
    methods: {
      input(value) {
        this.$emit('changePage', value);
      },
    },
  };
</script>
