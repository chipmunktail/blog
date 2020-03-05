<template>
  <span @click="getByfilter" class="tag-con">
    <a class="tag" :title="tag.describes">
      <i :class="'iconfont '+tag.icon" @mouseover="changeColor"
         @mouseout="remainColor"></i>
      {{tag.text}}
    </a>
  </span>
</template>

<script>
  export default {
    props: ['tag'],
    name: 'tag',
    data () {
      return {
        tempColor: ''
      }
    },
    methods: {
      changeColor (event) {
        this.tempColor = event.target.style.cssText.split(';')[0].split(':')[1]
        event.target.style.color = this.randomColors()
      },
      remainColor (event) {
        event.target.style.color = this.tempColor
      },
      randomColors () {
        let r = Math.random() * 255
        let g = Math.random() * 255
        let b = Math.random() * 255
        return `rgb(${r},${g},${b})`
      },
      // 根据tagId过滤文章
      getByfilter () {
        if (this.tag.type === 0) {
          this.$router.push('/articlelisttest')
          this.$store.dispatch('filterArticle', this.tag.id)
        }
        if (this.tag.type === 1) {
          this.$router.push('/think')
          this.$store.dispatch('filterThink', this.tag.id)
        }
      }
    },
    computed: {
      randomColor () {
        return this.randomColors()
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
