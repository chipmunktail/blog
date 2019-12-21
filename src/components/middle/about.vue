<template>
  <div class="about">
    <div class="about-box">
      <h2><i class="iconfont icon-Blog"></i>关于blog:</h2>
      <!--<div>为什么自己开发blog呢？</div>-->
      <!--<div>因为从接触电脑开始就一直打算做一个自己的blog，好好经营它（也许）。</div>-->
      <div>写文章的地方，记录我的一些东西，写进blog。</div>
      <div>同时也会分享有意思的东西。</div>
    </div>
    <div class="about-box">
      <h2><i class="iconfont icon-account"></i>关于我：</h2>
      <div>一个 web developer.😄</div>
    </div>
    <div class="about-box">
      <h2><i class="iconfont icon-code2"></i>其他：</h2>
      <a href="https://github.com/hjdtl" target="_blank" title="star吧">
        <svg class="icon icon-github" aria-hidden="true">
          <use xlink:href="#icon-github"></use>
        </svg>
        <span>GitHub</span>
      </a>
      <a href="https://www.npmjs.com/~hjdtl" target="_blank" title="star吧">
        <svg class="icon icon-npm-logo" aria-hidden="true">
          <use xlink:href="#icon-npm-logo"></use>
        </svg>
        <span>npm</span>
      </a>
      <!--<a href="https://www.zhihu.com/people/qd-luo-53" target="_blank" title="没干货">-->
      <!--<svg class="icon" aria-hidden="true">-->
      <!--<use xlink:href="#icon-zhihu"></use>-->
      <!--</svg>-->
      <!--<span>知乎</span>-->
      <!--</a>-->
      <a title="bHFkMjAxMA==">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-WeChat"></use>
        </svg>
        <span>微信</span>
      </a>
      <a href="mailto:hjdtld@163.com" title="hjdtl">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-email"></use>
        </svg>
        <span>Email</span>
      </a>
    </div>
  </div>
</template>

<script>
  import '../../assets/font_697398_i9zborknukf/iconfont'

  export default {
    name: 'about',
    mounted () {
      this.$axios.get('/visit')
        .then((e) => {
          console.log(e)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>

<style lang="less" scoped>
  .about {
    width: 640px;
    height: 100%;
  }

  h2 {
    margin-top: 0;
    i {
      display: inline-block;
      margin: 0 5px 0 0;
      font-size: 25px;
      color: #0086b3;
    }
  }

  a {
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
    vertical-align: top;
    height: 25px;
    line-height: 25px;
    .icon {
      font-size: 25px;
      margin: 0 3px 0 0;
    }
    .icon-github {
      font-size: 21px;
    }
    .icon-npm-logo {
      height: 21.88px;
      width: 21.88px;
      background-color: #cb3837;
      border-radius: 100%;
    }
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .about-box {
    padding: 5px;
    margin: 0 0 10px 0;
    border-radius: 3px;
    color: rgba(67, 67, 67, 0.9);
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease;
  }

  .about-box:hover {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.1);
  }
</style>
