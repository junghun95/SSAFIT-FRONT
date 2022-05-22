import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '@/components/board/Board.vue'
import BoardList from '@/components/board/BoardList.vue'
import BoardDetail from '@/components/board/BoardDetail.vue'
import BoardModify from '@/components/board/BoardModify.vue'
import VideoList from '@/components/video/VideoList.vue'
import LoginForm from '@/components/login/LoginForm.vue'
import GeneralLoginForm from '@/components/login/GeneralLoginForm.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/board/:type',
    name: 'board',
    component: Board,
    children: [
      {
        path: 'list',
        name: 'boardList',
        component: BoardList,
      },
      {
        path: 'detail',
        name: 'boardDetail',
        component: BoardDetail,
      },
      {
        path: 'modify',
        name: 'boardModify',
        component: BoardModify,
      }
    ]
  },
  {
    path: '/video',
    name: 'video',
    component: VideoList,
  },
  // {
  //   path: '/videoDetail/:videoId',
  //   name: 'videoDetail',
  //   component: VideoDetail,
  // }
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
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
