import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '@/components/board/Board.vue'
import BoardList from '@/components/board/BoardList.vue'
import BoardDetail from '@/components/board/BoardDetail.vue'
// import BoardList1 from '@/components/board/BoardList1.vue'
// import BoardList2 from '@/components/board/BoardList2.vue'
// import BoardList3 from '@/components/board/BoardList3.vue'
// import BoardList4 from '@/components/board/BoardList4.vue'

import Video from '@/components/video/Video.vue'
import HomeView from '@/views/HomeView.vue'
import UserDetail from '@/components/user/UserDetail.vue'
import JoinForm from '@/components/join/JoinForm.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/board/:type',
    name: 'board',
    component: Board,
    children: [
      {
        path: '/list/:category',
        name: 'boardList',
        component: BoardList,
        props: true,
      },
      // {
      //   path: '/list/notice',
      //   name: 'boardList1',
      //   component: BoardList1,
      //   props: true,
      // },
      // {
      //   path: '/list/bbom',
      //   name: 'boardList2',
      //   component: BoardList2,
      //   props: true,
      // },
      // {
      //   path: '/list/tip',
      //   name: 'boardList3',
      //   component: BoardList3,
      //   props: true,
      // },
      // {
      //   path: '/list/question',
      //   name: 'boardList4',
      //   component: BoardList4,
      //   props: true,
      // },

      {
        path: '/detail/:id',
        name: 'boardDetail',
        component: BoardDetail,
      },
    ]
  },
  {
    path: '/video',
    name: 'video',
    component: Video,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView

  },
  {
    path: '/user',
    name: 'userDetail',
    component: UserDetail,
  },
  {
    path: '/join',
    name: 'joinForm',
    component: JoinForm,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
