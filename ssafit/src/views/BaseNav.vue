<template>
  <v-app-bar app color="primary" dark>
    <v-btn :to="{ name: 'home' }" text>
      <span class="mr-0">SSAFIT</span>
    </v-btn>

    <div class="d-flex justify-md-center flex-grow-1">


      <v-btn :to="{ name: 'board', params: { type: 'fitness' } }" text>
        <span class="mr-0">포럼</span>
      </v-btn>
      <v-btn :to="{ name: 'video', params: { type: 'video' } }" text>
        <span class="mr-0">운동 영상</span>
      </v-btn>
      <v-btn :to="{ name: 'boardList', params: { category: 'notice' } }" text>
        <span class="mr-0">커뮤니티</span>
      </v-btn>
      <v-btn :to="{ name: 'board', params: { type: 'pilates' } }" text>
        <span class="mr-0">루틴</span>
      </v-btn>
      <v-btn :to="{ name: 'board', params: { type: 'pilates' } }" text>
        <span class="mr-0">식단</span>
      </v-btn>
    </div>
    <div class="d-flex justify-md-center ">
      <v-btn icon>
        <SearchIcon></SearchIcon>
      </v-btn>
      <BeforeLogin v-if="isLogin"></BeforeLogin>
      <AfterLogin v-else></AfterLogin>
    </div>

  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import BeforeLogin from './BeforeLogin.vue'
import AfterLogin from './AfterLogin.vue'
import SearchIcon from '../components/icons/SearchIcon.vue'
export default {
  name: "BaseNav",
  computed: {
    ...mapGetters([
      "isLogin"
    ]),
  },
  components: { BeforeLogin, AfterLogin, SearchIcon }
}
</script>

<style>
</style>