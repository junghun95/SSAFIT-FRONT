
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isSocial: false,
    user: {
      username: String,
      email: String,
      regDate: String,
      myComments: [],
      myVideos: [],
      Authorization: String,
    },
    comment: {
      id: Int32Array,
      writer: String,
      content: String,
      regDate: String,
      likes: Int32Array,
      isReport: false,
      isLiked: false
    },
    tag: {
      id: Int32Array,
      name: String,
    },
    board: {
      id: Int32Array,
      title: String,
      writer: String,
      content: String,
      regDate: String,
      viewCnt: Int32Array,
      likes: Int32Array,
      tags: Array,
      comments: Array,
      isReport: false,
      isLiked: false
    },
    boards: [],
    loginDialog: false,
    generalLoginDialog: false,
    searchVideos: [
    ],
    video: {
      thumbnail: String,
      id: String,
      title: String,

    }
  },
  getters: {
    getUsername(state) {
      return state.username = "hong";
    },
    isLogin(state) {
      return state.isLogin;
    },
    getUserInfo(state) {
      return state.user;
    },
    getBoards(state) {
      return state.boards;
    },
    getBoard(state) {
      return state.board;
    },
  },
  mutations: {
    GET_BOARD(state, board) {
      state.board = board;
    },
    GET_BOARDS(state, boards){
      console.log('GET_BOARDS called')
      for(let board in boards){
        state.boards.push(boards[board]);
      }
      console.log(state.boards)
    },
    CLOSE_LOGIN_DIALOG(state) {
      state.loginDialog = false;
    },
    OPEN_LOGIN_DIALOG(state) {
      state.loginDialog = true;
    },
    CLOSE_GENERAL_LOGIN_DIALOG(state) {
      state.generalLoginDialog = false;
    },
    OPEN_GENERAL_LOGIN_DIALOG(state) {
      state.generalLoginDialog = true;
    },
    SEARCH_YOUTUBE(state, videos) {
      console.log(videos)
      for (var content in videos) {
        let video = {
          thumbnail : videos[content].snippet.thumbnails.medium.url,
          id: videos[content].id.videoId,
          title: videos[content].snippet.title,
          modal: false,
        }
        state.searchVideos.push(video)
      }
    },
    LOGOUT(state) {
      state.isLogin = false;
    },
    LOGIN(state, user) {
      
      state.user = user;
      state.isLogin = true;
    },
    SOCIAL_LOGIN(state, email) {
      state.isLogin = true;
      email
    }
  
  },
  actions: {
    getBoards({commit}, params){
      console.log(params)
      axios({
        url: 'http://localhost:8888/api/board/list',
        method: 'GET',
        params,
      })
        .then((res) => {
          commit("GET_BOARDS", res.data.items)
        }).catch((err) => {
          console.log(err);
        })
    },
    getBoard({ commit }, id) {
      const board = {
        id: id,
        title: "jjjjj",
        writer: 'hu',
        content: 'hello2',
        regDate: '2022-05-22',
        tags: [
          { id: 3, name: '복부' }, { id: 2, name: '어깨' }
        ],
        likes: 5,
        comments: 1,
        isReport: false,
        isLiked: false
      };
      commit('GET_BOARD', board);
    },
    // getUser(context) {
    //   // axios로 서버에서 로그인할때 정보 가져오기 -> 그럴거면 로그인 할때 기본유저정보를
    //   // 같이 받아서 user객체에 저장을 해놓아야 할듯
    //   // -> 그러면 이미 로그인 된 상태일때는 userdetail에서 state에 있는 user객체 가져오는걸로 하면 되겠다.
    //   context
    // },
    closeLoginDialog(context) {
      context
      this.commit('CLOSE_LOGIN_DIALOG')
    },
    openLoginDialog(context) {
      context
      this.commit('OPEN_LOGIN_DIALOG')
    },
    closeGeneralLoginDialog(context) {
      context
      this.commit('CLOSE_GENERAL_LOGIN_DIALOG')
    },
    openGeneralLoginDialog(context) {
      context
      this.commit('OPEN_GENERAL_LOGIN_DIALOG')
    },
    searchYoutube({ commit }, value) {
      const YOUTUBE_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
      const API_URL = `https://www.googleapis.com/youtube/v3/search`

      const params = {
        key: YOUTUBE_KEY,
        part: 'snippet',
        type: 'video',
        q: value,
        maxResults: 10
      }

      axios({
        url: API_URL,
        method: 'GET',
        params,
      })
        .then((res) => {
          commit("SEARCH_YOUTUBE", res.data.items)
        }).catch((err) => {
          console.log(err);
        })
    },
    doLogout(context) {
      context
      this.commit('LOGOUT')
    },
    doLogin({commit}, user) {
      axios.post(
        'http://localhost:8888/api/auth/login',
        user
      )
        .then((res) => {
          console.log(res)
          commit('LOGIN', user)
          router.push('home')
        }).catch((err) => {
          console.log(err);
        })
    },
    socialLogin({commit}) {
      axios.get('http://localhost:8888/api/auth/social/google')
        .then((res) => {
          console.log(res)
          commit('SOCIAL_LOGIN', res)
        })
    },
    joinUser(context, userInfo) {
      context
      userInfo
      // axios로 서버에 연결해서 회원가입시키기
      // 이미 등록된 유저일때는 어떻게하지?->응답을 보고 처리해서 다시 회원가입페이지로 보내야될듯
    },
    zzimVideo(context, video) {
      context
      video
    },
    homeSearch(context, keyword) {
      context
      keyword
    }
  },
  modules: {
  }
})
