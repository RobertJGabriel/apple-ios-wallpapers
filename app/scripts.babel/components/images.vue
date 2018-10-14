<template>


  <a v-bind:href="`images/${group}/${item.name}`" class="img" download>

    <pimg fetchOnDemand class="img" v-bind:src="`images/${group}/${item.name}`" v-bind:alt="`${item.name}`" />
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
.container-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.img {
 margin: 5px;
 transition: all 2s;
}
.img:hover {
 transform: scale (1.1);
}
</style>