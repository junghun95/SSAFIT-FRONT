<template>
    <div class = "after-login d-flex justify-md-center">

        <v-btn target="_blank" text>
            <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn target="_blank" text>
            <span class="mr-0">{{getUsername}}</span>
        </v-btn>
        <v-btn target="_blank" text>
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
    computed: {
        ...mapGetters([
            'getUsername'
        ]),
    },
}
</script>

<style>
</style>