<template>
  <div class="think">
    <div v-for="n in thinkList" :key="n.id" class="think-box">
      <div v-html="n.content" v-highlight></div>
      <div class="time">{{n.date | timeFormat}}</div>
    </div>
  </div>
</template>

<script>
  import timeFormat from '@/utils/timeFormat'

  export default {
    name: 'think',
    created () {
      this.$store.dispatch('getThinkList')
    },
    computed: {
      thinkList () {
        return this.$store.state.thinkList
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
  .time{
    font-size: 14px;
    color: #767676;
  }
</style>
