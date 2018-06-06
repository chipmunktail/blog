<template>
  <div class="tags-con">
    <a class="tag" v-for="n in tags" v-bind:key="n.id" :title="n.describes">
      <i :class="'iconfont '+n.icon"></i>
      {{n.text}}
    </a>
    <tag v-for="n in tags" v-bind:key="n.id" :tag="n" />
  </div>
</template>

<script>
  import Tag from '../common/tag'

  export default {
    components: {Tag},
    name: 'right',
    data () {
      return {
        tags: []
      }
    },
    created () {
      this.getTag()
    },
    methods: {
      getTag () {
        this.$axios.get('/getTag')
          .then((e) => {
            this.tags = e.data.data
          })
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
    color: #000;
  }

  .tags-con::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .tags-con::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #000;
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
  i:hover{
    color: #55a532;
  }
</style>
