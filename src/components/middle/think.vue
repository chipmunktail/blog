<template>
  <div class="think">
    <div v-for="n in thinkList" :key="n.id" class="think-box">
      <tag v-for="z in matchTags(n.tag,tags)" :key="z.id" :tag="z" />
      <div v-html="n.content" v-highlight></div>
      <div class="time">{{n.date | timeFormat}}</div>
    </div>
  </div>
</template>

<script>
  import {timeFormat} from '@/utils/filter'
  import Tag from '../common/tag'

  export default {
    components: {Tag},
    name: 'think',
    created () {
      this.$store.dispatch('getThinkList')
      this.$store.dispatch('getTags', 1)
    },
    computed: {
      thinkList () {
        return this.$store.state.thinkList
      },
      tags () {
        return this.$store.state.tags
      }
    },
    methods: {
      matchTags (id, tags) {
        if (id) {
          let ids = id.split(',')
          let arr = []
          const t = () => {
            for (let i of ids) {
              for (let n of tags) {
                if (+n.id === +i) {
                  arr.push(n)
                }
              }
            }
          }
          t()
          return arr
        } else {
          return ''
        }
      }
    },
    filters: {
      timeFormat
    }
  }
</script>

<style scoped>
  .think {
    width: 640px;
    height: 100%;
    color: rgba(67, 67, 67, 0.9);
    /*background-color: rgba(255, 255, 255, 0.3);*/
  }

  .think-box {
    border-radius: 3px;
    margin: 0 0 5px 0;
    padding: 5px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.8);
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }

  .time {
    font-size: 14px;
    color: #767676;
  }
</style>
