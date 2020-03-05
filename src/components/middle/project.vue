<template>
  <div class="project">
    <a class="box" v-for="n in projectList" :key="n.name" :href="n.href" target="_blank">
      <div class="name">{{n.name}}</div>
      <div class="describe">{{n.describe}}</div>
      <div class="info">
        <div class="star">
          <div class="iconfont icon-star"> star</div>
          <div class="count">{{n.star}}</div>
        </div>
        <div class="fork">
          <div class="iconfont icon-codefork"> fork</div>
          <div class="count">{{n.fork}}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'project',
    data () {
      return {
        projectList: [{href: 'https://github.com/hjdtl/blog', name: 'golb', describe: 'golb UI', star: 2, fork: 0},
          {
            href: 'https://github.com/hjdtl/blog-admin',
            name: 'golb-admin',
            describe: 'golb内容管理',
            star: 0,
            fork: 0
          },
          {href: 'https://github.com/hjdtl/AsheUI', name: 'AsheUI', describe: 'Vue2.x UI框架', star: 0, fork: 0},
          {
            href: 'https://github.com/hjdtl/web-token-validation',
            name: 'web-token-validation',
            describe: 'Web Token 实现方法',
            star: 0,
            fork: 0
          },
          {
            href: 'https://github.com/hjdtl/noteIt',
            name: 'noteIt',
            describe: 'react app',
            star: 0,
            fork: 0
          },
          {
            href: 'https://github.com/hjdtl/nestpress',
            name: 'nestpress',
            describe: '尝试用Ts实现的web server app',
            star: 0,
            fork: 0
          }]
      }
    }
  }
</script>

<style lang="less" scoped>
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
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 5px 0;
    padding: 10px;
    width: 100%;
    height: auto;
    border-radius: 3px;
    color: rgba(67, 67, 67, 0.9);
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }

  .box:hover {
    cursor: pointer;
    /*background-color: rgba(255, 255, 255, 1);*/
    box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.1);
  }

  .name {
    font-size: 22px;
    font-weight: bold;
  }

  .describe{
    margin: 10px 0;
  }

  .star, .fork {
    display: inline-flex;
    min-width: 80px;
    height: 25px;
    border-radius: 3px;
    overflow: hidden;
    font-size: 14px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
    .iconfont {
      background: rgba(67, 67, 67, 0.9);
      color: #ffffff;
      width: 60px;
      height: 25px;
      line-height: 25px;
      padding: 0 5px;
      text-align: center;
      font-size: 14px;
    }
    .count{
      min-width: 20px;
      height: 23px;
      line-height: 25px;
      padding: 0 5px;
      text-align: center;
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      border: 1px solid rgba(67, 67, 67, 0.4);
    }
  }
  .star:hover, .fork:hover {
    box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.1);
  }
</style>
