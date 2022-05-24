<template>
    <div class = "after-login d-flex justify-md-center">

        <v-btn target="_blank" text>
            <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn text :to="{name: 'userDetail'}">
            <span class="mr-0">{{getUsername}}</span>
        </v-btn>
        <v-btn text  @click="logout">
            <span class="mr-0">logout</span>
        </v-btn>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mdiBellOutline } from '@mdi/js';
export default {
    name: "AfterLogin",
    data(){
        return{
            "mdi-bell-outline" : mdiBellOutline,
        }
    },
    methods:{
        logout(){
            this.$store.dispatch('doLogout')
            this.$router.push('home')
        }
    },
    computed: {
        ...mapGetters([
            'getUsername'
        ]),
    },
}
</script>

<style>
</style>