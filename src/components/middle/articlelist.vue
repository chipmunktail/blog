<template>
  <div class="articlelist">
    <div class="article-box" v-for="n in articleList" :key="n.title">
      <img :src="n.imgurl" class="article-img"/>
      <div class="article-left">
        <div class="article-title">
          <router-link class="article-link" :to="`/articles/${n.href}`">{{n.title}}</router-link>
        </div>
        <div class="article-content">{{n.content}}</div>
        <div class="article-info">
          <span>{{n.date}}</span>
          <span>{{n.pv}}</span>
          <span>{{n.comment}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articlelist',
    data () {
      return {
        articleList: []
      }
    },
    mounted () {
      this.getArticleList()
    },
    methods: {
      getArticleList () {
        this.$axios.get('/articles')
          .then((e) => {
            this.articleList = e.data.data
          })
      }
    }
  }
</script>

<style scoped>
  .articlelist {
    width: 640px;
  }

  .article-box {
    border-radius: 3px;
    margin: 0 0 5px 0;
    padding: 5px 0;
    display: flex;
    background-color: rgba(255, 255, 255, 0.3);
    justify-content: space-between;
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }
  .article-box:hover{
    background-color: rgba(255, 255, 255, 0.8);
  }

  .article-img {
    width: 100px;
    height: 100px;
  }

  .article-left {
    width: 518px;
    padding: 0 10px;
  }

  .article-title {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: bold;
  }
  .article-link:hover{
    text-decoration: underline;
  }

  .article-content {
    height: 50px;
    font-size: 13px;
  }

  .article-info {
    color: #767676;
    width: 300px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
</style>
