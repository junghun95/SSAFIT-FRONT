
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {
      username: String,
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
    boards: Array,
    loginDialog: false,
    generalLoginDialog: false,
    searchVideos: [

    ],
    video: {
      thumbnail: String,
      id: String,
      title: String
    }
  },
  getters: {
    getUsername(state) {
      return state.username = "hong";
    },
    isLogin(state) {
      return state.isLogin;
    },
    getBoards(state) {
      const boards = [{
        id: 1,
        title: "hhhhh",
        writer: 'hong',
        content: 'hello',
        regDate: '2022-05-22',
        likes: 5,
        comments: 44,
        tags: [
          { id: 1, name: '등' }, { id: 2, name: '어깨' }
        ],
        isReport: false,
        isLiked: true
      },
      {
        id: 2,
        title: "jjjjj",
        writer: 'hu',
        content: 'hello2',
        regDate: '2022-05-22',
        likes: 5,
        tags: [
          { id: 3, name: '복부' }, { id: 2, name: '어깨' }
        ],
        comments: 1,
        isReport: false,
        isLiked: false
      },
      {
        id: 3,
        title: "jjjjj",
        writer: 'hu',
        tags: [
          { id: 1, name: '등' }, { id: 4, name: '요가' }
        ],
        content: 'hello2',
        regDate: '2022-05-22',
        likes: 5,
        comments: 1,
        isReport: false,
        isLiked: false
      },
      {
        id: 4,
        title: "jjjjj",
        writer: 'hu',
        content: 'hello2',
        regDate: '2022-05-22',
        likes: 5,
        comments: 1,
        isReport: false,
        isLiked: false
      },
      {
        id: 5,
        title: "jjjjj",
        writer: 'hu',
        content: 'hello2',
        regDate: '2022-05-22',
        likes: 5,
        comments: 1,
        isReport: false,
        isLiked: false
      },
      {
        id: 6,
        title: "jjjjj",
        writer: 'hu',
        content: 'hello2',
        regDate: '2022-05-22',
        likes: 5,
        comments: 1,
        isReport: false,
        isLiked: false
      },
      {
        id: 7,
        title: "jjjjj",
        writer: 'hu',
        content: 'hello2',
        regDate: '2022-05-22',
        likes: 5,
        comments: 1,
        isReport: false,
        isLiked: false
      },
      {
        id: 8,
        title: "jjjjj",
        writer: 'hu',
        content: 'hello2',
        regDate: '2022-05-22',
        likes: 5,
        comments: 1,
        isReport: false,
        isLiked: false
      },
      {
        id: 9,
        title: "jjjjj",
        writer: 'hu',
        content: 'hello2',
        regDate: '2022-05-22',
        likes: 5,
        comments: 1,
        isReport: false,
        isLiked: false
      },
      {
        id: 10,
        title: "jjjjj",
        writer: 'hu',
        content: 'hello2',
        regDate: '2022-05-22',
        likes: 5,
        comments: 1,
        isReport: false,
        isLiked: false
      },
      ]

      return state.boards = boards;
    },
    getBoard(state) {
      return state.board;
    },
  },
  mutations: {
    GET_BOARD(state, board) {
      state.board = board;
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
          title: videos[content].snippet.title
        }
        state.searchVideos.push(video)
      }
    },
  
  },
  actions: {
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
  },
  modules: {
  }
})
