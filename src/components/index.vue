<template>
  <div class="index">
    <div class="menu">
      <Menu/>
    </div>
    <router-view/>
    <div class="right">coming soon!</div>
  </div>
</template>

<script>
  import Menu from './left/menu'
  import Class from './middle/class'

  export default {
    components: {
      Class,
      Menu},
    name: 'index'
  }
</script>

<style scoped>
  .index{
    width: 1024px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 54px 0 0 0;
  }
  .menu{
    width: 130px;
  }
  .class{
    width: 640px;
  }
  .right{
    width: 238px;
    height: 300px;
    display: inline-block;
    line-height: 250px;
    text-align: center;
    background: rgba(0, 0, 0, 0.9);
    color: #f0f0f0;
    border-radius: 3px;
  }
</style>
