<template>
  <div class="menu">
    <ul>
      <li v-for="n in menuList" :key="n.href" :class="{active:(active===n.href.split('/')[1])}">
        <router-link :to="n.href" class="link">{{n.text}}</router-link>
      </li>
      <!--<li @click="getClassList(n)">文章内容</li>-->
    </ul>
  </div>
</template>

<script>
  import store from '@/store/index'

  export default {
    name: 'Menu',
    data () {
      return {
        active: ''
      }
    },
    mounted () {
      this.getMenusList()
      this.active = this.$route.name
    },
    methods: {
      // 获取左侧栏列表数据
      getMenusList () {
        store.dispatch('getMenusList')
      },
      // 更换中间类别数据
      getClassList (classId) {
        store.dispatch('getClassList', classId)
      }
    },
    computed: {
      menuList: state => store.state.menuList
    },
    watch: {
      $route: function (n, o) {
        if (n.name === 'articles' || n.name === 'articlelist') {
          this.active = 'articlelist'
        }
        if (n.name === 'class') {
          this.active = 'class'
        }
        if (n.name === 'think') {
          this.active = 'think'
        }
        console.log(n.name)
      }
    }
  }
</script>

<style lang="less" scoped>
  .menu {
    display: inline-block;
    width: 130px;
    position: fixed;
    user-select: none;
  }

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    text-align: center;
    margin-bottom: 3px;
    height: 21px;
    line-height: 21px;
  }

  .link {
    display: inline-block;
    width: 100%;
  }

  .active {
    background: black;
    border-radius: 3px;
    a {
      color: #f0f0f0;
    }
  }
</style>
