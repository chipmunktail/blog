<template>
  <div class="tags">
    <div class="title">Tags</div>
    <div class="tags-con">
      <tag v-for="n in tags" v-bind:key="n.id" :tag="n"></tag>
    </div>
  </div>
</template>

<script>
  import Tag from '../common/tag'

  export default {
    components: {Tag},
    name: 'right',
    computed: {
      tags () {
        return this.$store.state.tags
      }
    }
  }
</script>

<style scoped>
  .tags {
    display: inline-block;
    position: fixed;
    /*overflow: hidden;*/
    width: 238px;
    height: 225px;
    background-color: rgba(248, 248, 248, 0.3);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    color: #000;
    border-radius: 3px;
  }

  .tags-con {
    overflow-y: scroll;
    width: 238px;
    height: 204px;
  }

  .tags-con::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .tags-con::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(67, 67, 67, 0.9);
  }

  .title {
    padding: 0 5px;
    height: 21px;
    line-height: 21px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: rgba(67, 67, 67, 0.9);
    color: rgba(240, 240, 240, 0.6);
  }
</style>
