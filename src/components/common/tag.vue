<template>
  <span>
    <a class="tag" :title="tag.describes">
      <i :class="'iconfont '+tag.icon"></i>
      {{tag.text}}
    </a>
  </span>
</template>

<script>
  export default {
    props: ['tag'],
    name: 'tag'
  }
</script>

<style scoped>
  .tag {
    height: 25px;
    line-height: 25px;
    border-radius: 2px;
    display: inline-block;
    margin: 5px;
    padding: 0 8px;
    cursor: pointer;
    background-color: rgba(248, 248, 248, 0.75);
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }

  .tag:hover {
    background-color: rgb(195, 195, 195);
  }

  i:hover {
    color: #55a532;
  }
</style>
