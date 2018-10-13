<template>


  <a v-bind:href="`images/${group}/${item.name}`" download>
    <pimg fetchOnDemand v-bind:src="`images/${group}/${item.name}`" v-bind:alt="`${item.name}`"/>
  </a>

</template>


<script>
  import pimg from 'pimg/vue';
  export default {
    components: {
      pimg
    },
    props: ['item', 'group'],
    methods: {
      download(item, setting) {}
    }
  }
</script>



<style lang="css" scoped>
  .v-lazy-image {
    filter: blur(10px);
    transition: filter 0.7s;
  }

  .v-lazy-image-loaded {
    filter: blur(0);
  }
</style>