<template>
  <div class="articles">
    <h1>{{article.title}}</h1>
    <div v-html="article.content">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articles',
    data () {
      return {
        article: {}
      }
    },
    mounted () {
      this.getArticle()
    },
    methods: {
      getArticle () {
        this.$axios.get('/article', {params: {articleid: this.$route.params.articleid}})
          .then((e) => {
            this.article = e.data.data[0]
            console.log(this.article.content)
          })
      }
    }
  }
</script>

<style scoped>
  .articles {
    width: 618px;
    background-color: rgba(248, 248, 248, 0.8);
    border-radius: 3px;
    padding: 0 10px;
    /*background: -webkit-linear-gradient(to right, #f8f8f8, #ffffff, #ffffff,#f8f8f8);*/
    /*background: linear-gradient(to right,  #f8f8f8, #ffffff, #ffffff,#f8f8f8);*/
  }
  h1{
    text-align: center;
  }
</style>
