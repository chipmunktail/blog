<template>
  <div id="app">
    <header>
      <div>
        <span class="log">&lt;/HJDTL&gt;</span>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      if (this.$route.redirectedFrom) {
        this.$axios.get(`/from${this.$route.redirectedFrom}`)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    height: auto;
    min-width: 1024px;
    background: -webkit-linear-gradient(to right, #c5eaff, #ffd891, #ffaa9f);
    background: linear-gradient(to right, #c5eaff, #ffd891, #ffaa9f);
  }

  header {
    width: 100%;
    background: rgba(67, 67, 67, 0.9);
    margin: 0 0 5px 0;
    padding: 10px;
    font-size: 25px;
    font-family: Arial;
    color: rgba(240, 240, 240, 0.6);
    text-align: center;
    user-select: none;
    position: fixed;
  }

  header div {
    display: inline-block;
    width: 1024px;
    text-align: left;
  }

  .log {
    display: inline-block;
    transform: rotate(-5deg);
  }
</style>
