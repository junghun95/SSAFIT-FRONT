<template>
  <div class="general-login-form">
      <v-card height="300" rounded="true">
        <v-card-title class="text-h5">
            회원 로그인
        </v-card-title>

        <v-card-text>
            <v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="user name" required></v-text-field>
                    </v-row>
                    
                    <v-row>
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="green darken-1"
                text
                @click=close()
            >
                취소
            </v-btn>

            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
                로그인
            </v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
export default {
    data(){
        return{
            dialog: false,
            valid: false,
            username: '',
            nameRules: [
              v => !!v || 'Name is required',
              v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }
    },
    methods:{
        close(){
            this.$emit('dialogGeneralClose')
        }
    }
}
</script>

<style>

</style>