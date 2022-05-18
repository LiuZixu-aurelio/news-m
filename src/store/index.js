import { createStore } from 'vuex'
import { getItem, setItem } from '@/utils/storage'

const TAOKEN_KEY = 'TOUTIAO_USER'

export default createStore({
  state: {
    /* user: null */
    // 从本地拿到token并转为对象
    /* user: JSON.parse(window.localStorage.getItem(TAOKEN_KEY)), */
    user: getItem(TAOKEN_KEY)
  },
  getters: {
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 存入本地持久化
      setItem(TAOKEN_KEY, state.user)
      window.localStorage.setItem(TAOKEN_KEY, JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
