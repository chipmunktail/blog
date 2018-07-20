<template>
  <div class="think">
    <div v-for="n in thinkList" :key="n.id" class="think-box">
      <div :class="n.tag?'header':''">
        <tag v-for="z in matchTags(n.tag,tags)" :key="z.id" :tag="z"/>
      </div>
      <div v-html="n.content" v-highlight></div>
      <div class="time">{{counter(n.date)}}</div>
    </div>
    <div v-if="thinkList.length===0" class="no-more">没有想法</div>
  </div>
</template>

<script>
  import {timeFormat} from '@/utils/filter' // todo 废弃
  import Tag from '../common/tag'

  export default {
    components: {Tag},
    name: 'think',
    // created () {
    // this.$store.dispatch('getThinkList')
    // this.$store.dispatch('getTags', 1)
    // },
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
      },
      counter (time) {
        return this.$datecounter(time)
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
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }

  .think-box:hover {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.1);
  }

  .header {
    padding-bottom: 3px;
    border-bottom: 1px solid #e5e5e5;
    /*box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.1);*/
  }

  .time {
    font-size: 14px;
    color: #767676;
  }

  .no-more {
    width: 640px;
    border-radius: 3px;
    color: rgba(67, 67, 67, 0.9);
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    text-align: center;
    line-height: 45px;
  }
</style>
