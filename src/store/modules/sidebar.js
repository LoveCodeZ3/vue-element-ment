const state = {
  sidebar: true,
  sou: true
}
const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar = !state.sidebar
  },
  TOGGLE_SIDEBAR2: (state) => {
    state.sidebar = true
  },
  TOGGLE_SIDEBAR3: (state) => {
    state.sidebar = false
  },
  TOGGLE_SOU: (state) => {
    state.sou = !state.sou
  },
  TOGGLE_SOU2: (state) => {
    state.sou = true
  },
  TOGGLE_SOU3: (state) => {
    state.sou = false
  }
}
const actions = {
  // 改变菜单
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  toggleSideBar2({ commit }) {
    commit('TOGGLE_SIDEBAR2')
  },
  toggleSideBar3({ commit }) {
    commit('TOGGLE_SIDEBAR3')
  },
  // 改变搜索
  toggleSou({ commit }) {
    commit('TOGGLE_SOU')
  },
  toggleSou2({ commit }) {
    commit('TOGGLE_SOU2')
  },
  toggleSou3({ commit }) {
    commit('TOGGLE_SOU3')
  }
}
const getters = {
  sidebar: (state) => state.sidebar,
  sou: (state) => state.sou
}
export default { state, mutations, actions, getters }
