import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let state = {
  menuList: [{text: '文章', href: '/articlelist'}],
  classList: [],
  article: [],
  articleTest: [],
  thinkList: [],
  tags: [] // 标签数组
}

let getters = {
  getState (state) {
    return state
  }
}

let actions = {
  getMenusList ({commit}) {
    // commit('fill_menusList', [{text: '文章', href: '/articlelist'}, {text: '其他', href: '/class'}])
    axios.get('http://www.asheicy.com:4000/menu')
      .then((res) => {
        commit('fill_menusList', res.data.data)
      })
  },
  // 类别
  getClassList ({commit, classId}) {
    const classList = [{title: 'title', subscript: 'subscript'}, {title: 'title', subscript: 'subscript'}] // 服务器的classList
    commit('change_classList', classList)
  },
  // 在action传递id之类的数据，用id异步获取服务器数据，触发mutation更新state
  getArticle ({commit, articleId}) {
    // axios.get('/getArticle?'+articleId).then()
    commit('change_get_Article', {title: 'title', content: 'contentcontentcontent'})
  },
  // TEST 获取article
  getArticleTest ({commit}) {
    axios.get('http://www.asheicy.com:4000/articleTest')
      .then((res) => {
        commit('setArticleTest', res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  // 过滤 文章
  filterArticle ({commit}, tagId) {
    axios.get('http://www.asheicy.com:4000/filterArticle', {params: {tagId: tagId}})
      .then((res) => {
        commit('setArticleTest', res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  // 过滤 想法
  filterThink ({commit}, tagId) {
    axios.get('http://www.asheicy.com:4000/filterThink', {params: {tagId: tagId}})
      .then((res) => {
        commit('setThinkList', res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  // 想法列表
  getThinkList ({commit}, thinkId) {
    const params = thinkId ? {thinkId: thinkId} : ''
    axios.get('http://www.asheicy.com:4000/thinkList', {params: params})
      .then((res) => {
        commit('setThinkList', res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  // 获取tag
  getTags ({commit}, type) {
    let params = {}
    if (typeof type === 'number') {
      params = {type: type}
    }
    axios.get('http://www.asheicy.com:4000/getTag', {params: params})
      .then((res) => {
        commit('setTags', res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// 建议一次性的数据放在组件里，需要在多个组件间使用的and需要改变的 放在store里
// fill一次性 change改变 spread多处使用的 change_get首次获取和需要改变
// ↑↑↑↑ 动作应该放到action里，mutation专注于填充和改变数据
let mutations = {
  // 填充左侧栏列表数据
  fill_menusList (state, menuList) {
    state.menuList = menuList
  },
  // 更换中间类别数据
  change_classList (state, classList) {
    state.classList = classList
  },
  // 获取和改变文章数据
  change_get_Article (state, article) {
    state.article = article
  },
  // TEST 获取文章
  setArticleTest (state, list) {
    state.articleTest = list
  },
  // 想法列表
  setThinkList (state, list) {
    state.thinkList = list
  },
  // 标签
  setTags (state, list) {
    state.tags = list
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store
