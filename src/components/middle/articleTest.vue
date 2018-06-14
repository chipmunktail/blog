<template>
  <div class="article_test">
    article_test
    {{article}}
  </div>
</template>

<script>
  export default {
    name: 'article-test',
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
    color: rgba(67, 67, 67, 0.9);
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    line-height: 45px;
  }
</style>
