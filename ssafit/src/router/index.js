import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '@/components/board/Board.vue'
import BoardList from '@/components/board/BoardList.vue'
import BoardDetail from '@/components/board/BoardDetail.vue'


import VideoList from '@/components/video/VideoList.vue'
import LoginForm from '@/components/login/LoginForm.vue'
import GeneralLoginForm from '@/components/login/GeneralLoginForm.vue'

import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/board/:type',
    name: 'board',
    component: Board,
    children: [
      {
        path: 'list/:category',
        name: 'boardList',
        component: BoardList,
      },
      {
        path: 'detail/:id',
        name: 'boardDetail',
        component: BoardDetail,
      },
    ]
  },
  {
    path: '/video',
    name: 'video',
    component: VideoList,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
    children: [
      {
        path: 'general',
        name: 'generalLogin',
        component: GeneralLoginForm
      }
    ],
  },
  {
    path: '/',
    name: 'home',
    component: HomeView

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
