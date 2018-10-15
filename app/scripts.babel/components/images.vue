<template>


  <a v-bind:href="`images/${group}/${item.name}`" class="img" download>
    <pimg fetchOnDemand placeholder="images/1/loading.gif" class="img responsive-image" v-bind:src="`images/${group}/${item.name}`"
      v-bind:alt="`${item.name}`" />
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
  img,
  .pimg,
  .img>>>img {
    display: block;
    max-width: 100%;
    height: auto;
    margin-right: auto;
    margin-left: auto;
  }
</style>