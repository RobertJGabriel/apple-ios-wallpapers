<template>
  <a v-bind:href="`images/${group}/${item.name}`" :aria-label="item.name" class="img" download>
    <lazy-image :src="`images/${group}/${item.name}`" :img-class="['img', 'responsive-image']" :placeholder="`images/1/loading.gif`"
      :alt="item.name" />
  </a>
</template>


<script>
  export default {
    cache: false,
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