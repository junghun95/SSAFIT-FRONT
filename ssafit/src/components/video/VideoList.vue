<template>
  <div>
    <div v-if="searchVideos.length">
      <h2 class="d-flex justify-center">검색결과</h2>
      <div class="video-list">
        <v-row>
          <v-col class="card d-flex flex-wrap" v-for="(video, index) in searchVideos" :key="index" cols="4">
            <div>
            <iframe
            width="320"
            height="180"
            :src="`${video.thumbnail}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
            </div>
            <br/>
          <div>{{video.title}}</div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-else><h2 class="d-flex justify-center">검색어를 입력하세요</h2></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "VideoList",
  data(){
    return{

    }
  },
  computed:{
    ...mapState([
      'searchVideos',
    ])
  }
}
</script>

<style>

</style>