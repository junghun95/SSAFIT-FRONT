<template>
    <div class="home">
        <h2>home</h2>
        <div class="home-search d-flex margin-auto">
            <v-text-field placeholder="통합검색" v-model="keyword"></v-text-field>
            <v-btn color="primary" elevation="2" outlined rounded @click="homeSearch">검색</v-btn>
        </div>
        <HomeSearchList></HomeSearchList>
    </div>
</template>

<script>
import HomeSearchList from '@/components/homesearch/HomeSearchList.vue'
export default{
    name: "HomeView",
    data(){
        return{
            keyword: '',
        }
    },
    component:{
        HomeSearchList,
    },
    methods:{
        homeSearch(){
            this.$store.dispatch('homeSearch', this.keyword)
        }
    }
}
</script>

<style>
</style>