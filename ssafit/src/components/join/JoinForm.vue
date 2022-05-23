<template>
  <div>
    <h2>회원가입 페이지</h2>
    <label>이름 : </label>
    <v-text-field></v-text-field>
    <div v-if="isSocial">
        <label>이메일 : </label>
        <input type="text" v-model="email" readonly disabled>
    </div>
    <div v-else>
        <label>이메일 : </label>
        <v-text-field :rules="rules"></v-text-field>
    </div>
    <label>비밀번호 : </label>
    <v-text-field type="password" :rules="passwordRules" :counter="10"></v-text-field>
    <div class="text-center">
        <v-btn rounded color="primary" dark @click="join">회원가입</v-btn>
    
        <v-btn class="ma-2" outlined color="indigo" :to="{name: 'home'}">홈으로</v-btn>
    </div>
  </div>
</template>

<script>
export default {
    name: 'JoinForm',
    data(){
        return{
            username: '',
            email: '',
            password: '',
            isSocial: false,
            rules: [
                value => !!value || 'Required.',
                value => (value || '').length <= 20 || 'Max 20 characters',
                value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
                },
            ],
            passwordRules: [
              v => !!v || 'Name is required',
              v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
        }
    },
    methods:{
        join(){
            const user = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            this.$store.dipatch('joinUser', user)
        }
    },
    computed:{

    },
    created(){
        this.isSocial = this.$store.state.isSocial;
        this.email = this.$store.state.user.email;
    }

}
</script>

<style>

</style>