<template>
  <div class="articles">
    <div class="article-con">
      <h1>{{article.title}}</h1>
      <div v-html="article.content">
      </div>
    </div>
    <div class="info-con">
      <div class="tag-con">
        <div>相关标签：</div>
        <a href="/#" class="tag" v-for="n in tags" v-bind:key="n.id">{{n.text}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articles',
    data () {
      return {
        article: {},
        tags: []
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
          })
          .then(() => {
            this.getTag(this.article.tag)
          })
      },
      getTag () {
        this.$axios.get('/getTag', {params: {id: this.article.tag}})
          .then((e) => {
            this.tags = e.data.data
          })
      }
    }
  }
</script>

<style scoped>
  .articles {
    width: 638px;
    border-radius: 3px;
    /*background: -webkit-linear-gradient(to right, #f8f8f8, #ffffff, #ffffff,#f8f8f8);*/
    /*background: linear-gradient(to right,  #f8f8f8, #ffffff, #ffffff,#f8f8f8);*/
  }

  h1 {
    text-align: center;
  }

  .article-con {
    background-color: rgba(248, 248, 248, 0.8);
    padding: 1px 10px;
  }

  .info-con {
    background-color: rgba(248, 248, 248, 0.8);
    padding: 10px;
    margin: 5px 0 0 0;
  }

  .tag-con {
    display: flex;
    justify-content: flex-start;
  }

  .tag {
    height: 24px;
    text-align: center;
    line-height: 24px;
    margin: 0 2px;
    padding: 0 5px;
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }

  .tag:hover {
    background-color: #cecece;
  }
</style>
