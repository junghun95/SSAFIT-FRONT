<template>
  <div class="login-form">
      <v-card height="300" rounded="true">
        <v-card-title class="text-h5">
            로 그 인
        </v-card-title>

        <v-card-text>
          <v-container class="d-flex align-flex">
            <v-row>
                <v-btn dark @click.stop="dialogGeneral = true" text>
                    <span class="mr-2">회원 로그인</span>
                </v-btn>
            </v-row>

            <v-row>
                <v-btn  @click.stop="dialogSocial = true">
                    <span class="mr-2">구글 계정으로 로그인하기</span>
                </v-btn>
            </v-row>

            <v-row>
                <v-btn @click.stop="dialogJoin = true">
                    <span class="mr-2">회원 가입</span>
                </v-btn>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text v-on:dialogGeneralClose="dialogGeneral = false">
                취소
            </v-btn>
        </v-card-actions>
      </v-card>

        <v-dialog v-model="dialogGeneral" width="500">
            <general-login-form></general-login-form>
        </v-dialog>
  </div>
</template>

<script>
import GeneralLoginForm from './GeneralLoginForm.vue'
export default {
    name: 'LoginForm',
    data () {
      return {
        dialogGeneral: false,
        dialogSocial: false,
        dialogJoin: false,
      }
    },
    components:{
        GeneralLoginForm,
    },
    methods:{
        dialogGeneralClose(){
            this.dialogGeneral = false;
        }
    }
}
</script>

<style>

</style>