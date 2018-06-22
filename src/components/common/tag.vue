<template>
  <span @click="getByfilter">
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
  .tag {
    height: 25px;
    line-height: 25px;
    border-radius: 2px;
    display: inline-block;
    margin: 5px;
    padding: 0 8px;
    cursor: pointer;
    color: rgba(67, 67, 67, 0.9);
    background-color: rgba(248, 248, 248, 0.75);
    /*box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);*/
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16);
    transition-duration: 0.4s;
    transition-property: background-color, transform, box-shadow, margin, opacity, width;
    transition-timing-function: ease;
    -webkit-transition-property: background-color, transform, box-shadow, margin, opacity, width;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }

  .tag:hover {
    box-shadow: 0 3px 2px 1px rgba(0,0,0,0.1);
    /*background-color: rgb(195, 195, 195);*/
    /*box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);*/
  }

  i {
    color: #000;
  }

  i:hover {
    color: #55a532;
  }
</style>
