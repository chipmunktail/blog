import Vue from 'vue'
import Router from 'vue-router'
import {
  index,
  articlelist,
  class_,
  articles,
  think,
  articlelisttest,
  articletest,
  project,
  about
} from '@/components/index.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/articlelisttest',
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
        },
        {
          path: '/articlelisttest',
          name: 'articlelisttest',
          component: articlelisttest
        },
        {
          path: '/articletest/:index',
          name: 'articletest',
          component: articletest
        },
        {
          path: '/project',
          name: 'project',
          component: project
        },
        {
          path: '/about',
          name: 'about',
          component: about
        }
      ]
    }
  ]
})
