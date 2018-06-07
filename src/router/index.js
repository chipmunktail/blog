import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
import articlelist from '@/components/middle/articlelist'
import class_ from '@/components/middle/class'
import articles from '@/components/middle/articles'
import think from '@/components/middle/think'
import qq from '@/components/qq'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'qq',
      component: qq,
      // redirect: '/articlelist',
      children: [
        {
          path: '/articlelist',
          name: 'articlelist',
          component: articlelist
        },
        {
          path: '/class',
          name: 'class',
          component: class_
        },
        {
          path: '/articles/:articleid',
          name: 'articles',
          component: articles
        },
        {
          path: '/think',
          name: 'think',
          component: think
        }
      ]
    },
    {
      path: '/qq',
      name: 'qq',
      component: qq
    }
  ]
})
