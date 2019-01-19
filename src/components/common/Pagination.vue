<template>
  <b-pagination v-show="isPaginationVisible" 
                align="center" 
                :total-rows="totalRows" 
                v-model="currentPage" 
                :per-page="20" 
                @input="input">
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
      isPaginationVisible(){
        if(this.totalRows < 20){
          return false;
        }
        return true;
      }
    },
    methods: {
      input(value) {
        this.$emit('changePage', value);
      },
    },
  };
</script>
