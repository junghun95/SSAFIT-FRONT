import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '@/components/board/Board.vue'
import BoardList from '@/components/board/BoardList.vue'
import BoardDetail from '@/components/board/BoardDetail.vue'
import BoardModify from '@/components/board/BoardModify.vue'
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
      {
        path: 'modify',
        name: 'boardModify',
        component: BoardModify,
      }
    ]
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
