<template>
  <div id="app">
    <header>
      <div>
        <span class="log" @click="index">&lt;/HJDTL&gt;</span>
        <div class="lantern-con">
          <svg class="icon lantern" aria-hidden="true">
            <use xlink:href="#icon-denglong1"></use>
          </svg>
        </div>
      </div>
    </header>
    <router-view/>
    <div class="robot"></div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      this.log()
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
    /*background: -webkit-linear-gradient(0deg, #FFFFFF, #dff3ff, #CCFFE8, #ffd891, #ffaa9f);*/
    /*background: linear-gradient(0deg, #FFFFFF, #dff3ff, #CCFFE8, #ffd891, #ffaa9f);*/
    background-color: #fff;
    /*background-image: url("http://www.asheicy.com:4000/file/district93.jpg");*/
    /*background-repeat: no-repeat;*/
    /*background-size: 1024px auto;*/
    /*background-attachment:fixed;*/
    /*background-position: top center;*/
  }

  .robot{
    /*position: fixed;*/
    /*z-index: 0;*/
    /*bottom: -50px;*/
    /*left: 0;*/
    /*width: 100%;*/
    /*height: 150px;*/
    /*background-image: url("http://www.asheicy.com:4000/file/district92.jpg");*/
    /*background-repeat: no-repeat;*/
    /*background-size: 120px auto;*/
    /*background-position: bottom ;*/
  }
  header {
    width: 100%;
    margin: 0 0 5px 0;
    padding: 5px;
    font-size: 25px;
    font-family: Arial;
    background: rgba(173, 38, 44, 0.9);
    color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    text-align: center;
    user-select: none;
    position: fixed;
    display: flex;
    justify-content: center;
  }

  header div {
    display: flex;
    align-items: center;
    width: 1024px;
    height: 29px;
    line-height: 29px;
    text-align: left;
  }

  .log {
    display: inline-block;
    transform: rotate(-5deg);
    cursor: pointer;
  }
  /*new year theme*/
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .lantern-con{
    display: inline-block;
    width: 40px;
    height: 25px;
    line-height: 25px;
  }
  .lantern{
    width: 40px;
    height: 25px;
  }
  /*}*/
</style>
