<template>
  <div>
      <v-btn dark @click="loginDialogOpen">
        <span class="mr-2">login</span>
      </v-btn>

      <v-dialog v-model="loginDialog" max-width="500" @click:outside="loginDialogClose">
        <login-form></login-form>
      </v-dialog>
  </div>
</template>

<script>
import LoginForm from '@/components/login/LoginForm.vue'
import {mapState} from 'vuex'
export default{
  name: "BeforeLogin",
  data () {
    return {
    }
  },
  computed:{
    ...mapState([
      'loginDialog'
    ]),
  },
  components:{
    LoginForm,
  },
  methods:{
    loginDialogOpen(){
        this.$store.dispatch("openLoginDialog")
    },
    loginDialogClose(){
      this.$store.dispatch("closeLoginDialog")
    }
  }
}
</script>

<style>
</style>