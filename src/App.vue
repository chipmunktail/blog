<template>
  <div id="app">
    <header>
      <div>
        <span class="log" @click="index">&lt;/HJDTL&gt;</span>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import config from '../config/dev.env'

  export default {
    name: 'App',
    mounted () {
      if (config.NODE_ENV !== '"development"') {
        this.log()
      }
    },
    methods: {
      index () {
        this.$router.push('/')
      },
      log () {
        if (document.referrer) {
          this.$axios.get(`/from/${document.referrer}`)
            .then((res) => {
              console.log(res)
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }
    }
  }
</script>

<style>
  /*@media screen and (min-width: 1024px) {*/
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  body::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: rgba(67, 67, 67, 0.9);
  }
    #app {
      margin: 0;
      padding: 0;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100%;
      height: auto;
      min-width: 1024px;
      /*background: -webkit-linear-gradient(to right, #c5eaff, #ffd891, #ffaa9f);*/
      /*background: linear-gradient(to right, #c5eaff, #ffd891, #ffaa9f);*/
      /*background: -webkit-linear-gradient(0deg,#FFFFFF, #dff3ff,#CCFFE8, #ffd891, #ffaa9f);*/
      /*background: linear-gradient(0deg,#FFFFFF, #dff3ff,#CCFFE8, #ffd891, #ffaa9f);*/
      background-color: rgba(227,227,227,0.7);
    }

    header {
      width: 100%;
      margin: 0 0 5px 0;
      padding: 5px;
      font-size: 25px;
      font-family: Arial;
      background: rgba(67, 67, 67, 0.9);
      color: rgba(240, 240, 240, 0.6);
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
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
      cursor: pointer;
    }
  /*}*/
</style>
