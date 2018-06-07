<template>
  <div class="qq">
    <transition name="fade">
      <div v-if="visible">
        <h1>Got it</h1>
        <h1>You live in my list</h1>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'qq',
    data () {
      return {
        visible: false
      }
    },
    mounted () {
      this.visible = true
      setTimeout(() => {
        this.visible = false
      }, 3000)
    }
  }
</script>

<style>
  .qq {
    text-align: left;
    position: fixed;
    top: 20%;
    padding: 0 5%;
  }

  h1 {
    margin: 0 0 10px 0;
    color: #000;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
