<template>
  <v-app-bar app color="primary" dark>
    <!-- <div class="d-flex align-center">
      <v-img alt="Vuetify Logo" class="shrink mr-2" contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />

      <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
    </div> -->

    <v-btn target="_blank" text>
      <span class="mr-0">SSAFIT</span>
    </v-btn>
    
    <v-spacer></v-spacer>

    <v-btn :to="{name:'vedeo', params: {type: 'video'}}" text>
      <span class="mr-0">운동 영상</span>
    </v-btn>
    <v-btn :to="{name:'board', params: {type: 'homt'}}" text>
      <span class="mr-0">홈트</span>
    </v-btn>
    <v-btn :to="{name:'board', params: {type: 'fitness'}}" text>
      <span class="mr-0">피트니스</span>
    </v-btn>
    <v-btn :to="{name:'board', params: {type: 'yogar'}}" text>
      <span class="mr-0">요가</span>
    </v-btn>
    <v-btn :to="{name:'board', params: {type: 'pilates'}}" text>
      <span class="mr-0">필라테스</span>
    </v-btn>

    <v-spacer></v-spacer>

    <BeforeLogin v-if="!isLogin"></BeforeLogin>
    <AfterLogin v-else></AfterLogin>

  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import BeforeLogin from './BeforeLogin.vue'
import AfterLogin from './AfterLogin.vue'
export default {
  name: "BaseNav",
  computed: {
    ...mapGetters([
      "isLogin"
    ]),
  },
  components: { BeforeLogin, AfterLogin, }
}
</script>

<style>
</style>