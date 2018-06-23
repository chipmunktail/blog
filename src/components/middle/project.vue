<template>
  <div class="project">
    <div class="box" v-for="n in 5" :key="n">
      <div>Ashe-UI</div>
      <div class="describe">Material design ui for vue2</div>
      <div class="describe" v-if="n===3">Material design ui for vue2</div>
      <div class="describe" v-if="n===5">Material design ui for vue2Material design ui for vue2</div>
      <div class="describe" v-if="n===5">Material design ui for vue2Material design ui for vue2</div>
      <div class="info">
        <span>star</span>
        <span>fork</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'project'
  }
</script>

<style scoped>
  .project {
    width: 640px;
    height: 100%;
    color: rgba(67, 67, 67, 0.9);
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .box {
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items:center;
    margin: 5px;
    padding: 5px;
    width: auto;
    height: auto;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }

  .box:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.1);
  }
</style>
