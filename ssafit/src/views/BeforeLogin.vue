<template>
  <div>
      <v-btn dark @click.stop="dialog = true">
        <span class="mr-2">login</span>
      </v-btn>

      <v-dialog v-model="dialog" max-width="500">
        <login-form></login-form>
      </v-dialog>
  </div>
</template>

<script>
import LoginForm from '@/components/login/LoginForm.vue'
export default{
  name: "BeforeLogin",
  data () {
    return {
      dialog: false,
    }
  },
  components:{
    LoginForm,
  }
}
</script>

<style>
</style>