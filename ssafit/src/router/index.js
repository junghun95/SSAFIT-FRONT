import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '@/components/board/Board.vue'
import BoardList from '@/components/board/BoardList.vue'
import BoardDetail from '@/components/board/BoardDetail.vue'
import BoardModify from '@/components/board/BoardModify.vue'
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
