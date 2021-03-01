import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    todo: []
  },
  getters: {
    login (state) {
      return state.isLogin
    },
    getTodo (state) {
      return state.todo
    }
  },
  mutations: {
    setLogin (state, value) {
      state.isLogin = value
    },
    setTodo (state, value) {
      state.todo = value
    }
  },
  actions: {
    setLoginAction ({ commit }, value) {
      commit('setLogin', value)
      const axiosConfig = {
        url: '/',
        method: 'get',
        baseURL: 'https://jsonplaceholder.typicode.com/todos'
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e)
          commit('setTodo', e.data)
        })
        .catch(e => console.log(e))
    }
  }
})
