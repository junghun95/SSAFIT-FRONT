import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '@/components/board/Board.vue'
import BoardList from '@/components/board/BoardList.vue'
import BoardDetail from '@/components/board/BoardDetail.vue'


import Video from '@/components/video/Video.vue'
import VideoList from '@/components/video/VideoList.vue'
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
    component: Video,
    children: [
      {
        path: 'list',
        name: 'videoList',
        component: VideoList,
      }
    ]
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
