<template>
  <div class="tags-con">
    <tag v-for="n in tags" v-bind:key="n.id" :tag="n"></tag>
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
  .tags-con {
    display: inline-block;
    position: fixed;
    width: 238px;
    height: 225px;
    overflow-y: scroll;
    background-color: rgba(248, 248, 248, 0.3);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    color: #000;
    border-radius: 3px;
  }

  .tags-con::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .tags-con::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(67, 67, 67, 0.9);
  }

  .tag {
    height: 25px;
    line-height: 25px;
    border-radius: 2px;
    display: inline-block;
    margin: 5px;
    padding: 0 8px;
    cursor: pointer;
    background-color: rgba(248, 248, 248, 0.75);
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }

  .tag:hover {
    background-color: rgb(195, 195, 195);
  }

  i:hover {
    color: #55a532;
  }
</style>
