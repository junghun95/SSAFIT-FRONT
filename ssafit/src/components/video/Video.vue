<template>
  <div class="video">
      <h2>video</h2>
      <div class="video-search d-flex margin-auto">
        <v-text-field placeholder="검색" v-model="keyword"></v-text-field>
        <v-btn color="primary" elevation="2" outlined rounded @click="search">검색</v-btn>
      </div>
      <VideoList></VideoList>
      
  </div>
</template>

<script>
import VideoList from '@/components/video/VideoList.vue'
export default {
    name: 'VideoView',
    data(){
        return{
            keyword: "",
        }
    },
    components:{
        VideoList,
    },
    methods:{
        search(){
            console.log(this.keyword)
            this.$store.dispatch("searchYoutube", this.keyword)
        }
    }
}
</script>

<style>

</style>