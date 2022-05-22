import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false,
    user:{
      username: String,
    },
  },
  getters: {
    getUsername(state){
      return state.username = "hong";
    },
    isLogin(state) {
      return state.isLogin;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
