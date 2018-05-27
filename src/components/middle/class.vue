<template>
  <div class="class">
    coming soon！
    <!--{{classList}}-->
    <!--<button @click="getArticle">getArticle</button>-->
  </div>
</template>

<script>
  import store from '@/store/index'
  export default {
    name: 'Class',
    mounted () {
    },
    methods: {
      // 获取文章对象
      getArticle (articleId) {
        store.dispatch('getArticle', articleId)
      }
    },
    computed: {
      classList: state => store.state.classList
    }
  }
</script>

<style scoped>
  .class{
    width: 640px;
    color: rgba(67, 67, 67, 0.9);
    background-color: rgba(255, 255, 255, 0.3);
    text-align: center;
    line-height: 45px;
    /*background: #757575;*/
  }
</style>
