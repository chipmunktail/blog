<template>
  <div class="menu">
    <ul>
      <li v-for="n in menuList" :key="n.href" :class="{active:(active===n.href.split('/')[1])}" @click="action">
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
      },
      // 相应路由 相关操作
      action () {
        if (this.$route.name === 'articlelisttest') {
          this.$store.dispatch('getArticleTest')
          this.$store.dispatch('getTags', 0)
        }
        if (this.$route.name === 'think') {
          this.$store.dispatch('getThinkList')
          this.$store.dispatch('getTags', 1)
        }
      }
    },
    computed: {
      menuList: state => store.state.menuList
    },
    watch: {
      $route: function (n, o) {
        if (n.name === 'articles' || n.name === 'articlelist') {
          this.active = 'articlelist'
        } else if (n.name === 'articlelisttest' || n.name === 'articletest') {
          this.active = 'articlelisttest'
        } else {
          this.active = n.name
        }
        // if (n.name === 'class') {
        //   this.active = 'class'
        // }
        // if (n.name === 'think') {
        //   this.active = 'think'
        // }
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
    color: #000;
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
    background: rgba(67, 67, 67, 0.9);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    border-radius: 2px;
    a {
      color: #f0f0f0;
    }
  }
</style>
