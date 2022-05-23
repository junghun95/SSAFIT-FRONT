<template>
  <div class="login-form">
      <v-card height="300" rounded="true">
        <v-card-title class="text-h5">
            로 그 인
        </v-card-title>

        <v-card-text>
          <v-col>
            <v-row>
                <v-btn dark @click="generalLoginDialogOpen">
                    <span class="mr-2">회원 로그인</span>
                </v-btn>
            </v-row>

            <v-row>
                <v-btn  @click.stop="dialogSocial = true">
                    <img src="../icons/btn_google_signin_dark_focus_web.png"/>
                </v-btn>
            </v-row>

            <v-row>
                <v-btn @click.stop="dialogJoin = true">
                    <span class="mr-2">회원 가입</span>
                </v-btn>
            </v-row>
          </v-col>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="loginDialogClose">
                취소
            </v-btn>
        </v-card-actions>
      </v-card>

        <v-dialog v-model="generalLoginDialog" @click:outside="generalLoginDialogClose" width="500">
            <general-login-form></general-login-form>
        </v-dialog>
  </div>
</template>

<script>
import GeneralLoginForm from './GeneralLoginForm.vue'
import {mapState} from 'vuex'
export default {
    name: 'LoginForm',
    data () {
      return {
      }
    },
    components:{
        GeneralLoginForm,
    },
    computed:{
        ...mapState([
            'generalLoginDialog'
        ])
    },
    methods:{
        loginDialogClose(){
            this.$store.dispatch("closeLoginDialog")
        },
        generalLoginDialogClose(){
            this.$store.dispatch("closeGeneralLoginDialog")
        },
        generalLoginDialogOpen(){
            this.$store.dispatch("openGeneralLoginDialog")
        }
    }
}
</script>

<style>

</style>