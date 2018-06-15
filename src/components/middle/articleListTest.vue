<template>
  <div class="article_test">
    <div class="article-box" v-for="n in article" :key="n.title">
      <div class="article-img-con">
        <img :src="n.img_url" class="article-img"/>
      </div>
      <div class="article-left">
        <div class="article-title">
          <router-link class="article-link" :to="`/articletest/${n.id}`">{{n.title}}</router-link>
        </div>
        <div class="article-content">{{n.describe}}</div>
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
    name: 'article-list-test',
    created () {
      this.$store.dispatch('getArticleTest')
    },
    computed: {
      article () {
        return this.$store.state.articleTest
      }
    }
  }
</script>

<style scoped>
  .article_test {
    width: 640px;
    background-color: rgba(255, 255, 255, 0.8);
  }
  .article-box {
    border-radius: 3px;
    margin: 0 0 5px 0;
    padding: 5px;
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

  .article-img-con{
    width: 100px;
    height: 100px;
    border-radius: 2px;
    text-align: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .article-img {
    height: 100%;
    width: auto;
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
