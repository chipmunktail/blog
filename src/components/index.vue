<template>
  <div>
    <div class="index" ref="index">
      <div class="menu">
        <Menu/>
      </div>
      <router-view/>
      <div class="right">
        <right/>
      </div>
    </div>
    <record/>
  </div>
</template>

<script>
  import Menu from './left/menu'
  import Class from './middle/class'
  import Right from './right/right'
  import Record from './record'

  export default {
    components: {
      Right,
      Class,
      Menu,
      Record},
    name: 'index',
    mounted () {
      this.$refs.index.style.minHeight = (document.body.clientHeight - 70) + 'px'
    }
  }
</script>

<style scoped>
  .index{
    width: 1024px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 44px 0 0 0;
  }
  .menu{
    width: 130px;
  }
  .class{
    width: 640px;
  }
  .right{
    width: 238px;
    height: auto;
    display: inline-block;
    /*line-height: 250px;*/
    /*text-align: center;*/
    /*background: rgba(0, 0, 0, 0.9);*/
    color: #f0f0f0;
    border-radius: 3px;
  }
</style>
