<template>
        <v-icon>
            mdi-comment-outline
        </v-icon>
</template>

<script>
import { mdiCommentOutline } from '@mdi/js';
export default{
    name:'IconCollection',
    data(){
        return{
             "mdi-comment-outline": mdiCommentOutline,
        }
    }
}
</script>

<style>
</style>