<template>
    <v-icon>mdi-magnify</v-icon>
</template>


<script>
    import { mdiMagnify } from '@mdi/js';
    export default{
        name: 'SearchIcon',
        data(){
            return{
            'mdi-magnify':mdiMagnify,
            }
        },
    }
</script>
<style>
</style>