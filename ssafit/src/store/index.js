
import Vue from 'vue'
import Vuex from 'vuex'

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
    board: {
      id: Int32Array,
      title: String,
      writer: String,
      content: String,
      regDate: String,
      viewCnt: Int32Array,
      likes: Int32Array,
      comments: {
        comment: Array
      },
      isReport: false,
      isLiked: false
    },
    boards: {
      board: Array
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
          comments: 1,
          isReport: false,
          isLiked: false
        },
        {
          id: 3,
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
    }
  },
  mutations: {
    GET_BOARD(state, board){
      state.board = board;
    },
  },
  actions: {
    getBoard({commit}, id){
      const board={
        id: id,
          title: "jjjjj",
          writer: 'hu',
          content: 'hello2',
          regDate: '2022-05-22',
          likes: 5,
          comments: 1,
          isReport: false,
          isLiked: false
      };
      commit('GET_BOARD', board);
    },
  },
  modules: {
  }
})
