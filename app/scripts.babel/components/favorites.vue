<template>

    <li>
      <i class="far" @click="updateFavorites(item, index,true)" v-if="item.favorite == false && paid">
        <font-awesome-icon prefix="far" icon="heart" />
      </i>
      <i class="fav" @click="updateFavorites(item, index,false)" v-if="item.favorite == true && paid">
        <font-awesome-icon prefix="fas" icon="heart" />
      </i>
      <a class="ellipsis" v-bind:href="item.url" target="_blank" v-html="item.value"> </a>
    </li>

</template>


<script>
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart'
  export default {
    props: ['paid', 'item', 'index'],
    methods: {
      updateFavorites(item, index, setting) {
        this.$parent.updateFavorites(item, index, setting);
      }
    }
  }
</script>



<style lang="css" scoped>
  div {
    background-color: rgba(0, 0, 0, .05);
    border-radius: 2px;
    cursor: pointer;
    font-weight: bold;
    overflow: auto;
    background: #fff;
  }

  div>>>i {
    background-position: center;
    background-repeat: no-repeat;
  }

  .fav {
    color: #B9090B !important;
  }

  div>>>a,
  div>>>p {
    display: inline-flex;
    padding-left: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 20px;
    color: #616161;
  }

  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 275px;
  }

  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 275px;
  }

  .ellipsis:hover {
    overflow: visible;
  }

  div>>>.label {
    display: grid;
    font-weight: bold !important;
  }
</style>