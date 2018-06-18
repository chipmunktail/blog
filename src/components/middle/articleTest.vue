<template>
  <div class="articles">
    <div class="article-con">
      <h1>{{article.title}}</h1>
      <div v-html="article.content" v-highlight>
      </div>
    </div>
    <div class="info-con">
      <div class="tag-con">
        <div>相关标签：</div>
        <tag v-for="n in tags" v-bind:key="n.id" :tag="n"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Tag from '../common/tag'

  export default {
    components: {Tag},
    name: 'article-test',
    data () {
      return {
        tags: []
      }
    },
    mounted () {
      this.articlePV()// 访问次数
      this.getTag(this.article.tag)
    },
    methods: {
      getTag () {
        this.$axios.get('/getTag', {params: {id: this.article.tag}})
          .then((e) => {
            this.tags = e.data.data
          })
      },
      articlePV () {
        this.$axios.get('articlePV', {params: {articleId: this.article.id}})
          .then((e) => {
            console.log(e)
          })
      }
    },
    computed: {
      article () {
        return this.$store.state.articleTest[this.$route.params.index]
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
    align-items: center;
  }
</style>
