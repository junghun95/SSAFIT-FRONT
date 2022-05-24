<template>
  <div class="video-list">
    <div v-if="searchVideos.length">
      <h2 class="d-flex justify-center">검색결과</h2>
      <div class="video-list">
        <v-row>
          <v-col class="card d-flex flex-wrap" v-for="(video, index) in searchVideos" :key="index" cols="4">
            <div>
            <iframe
            width="320"
            height="180"
            :src="`https://www.youtube.com/embed/${video.id}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
            </div>
            <br/>
            <div>
              <v-btn @click="pushDetail(video)">{{video.title}}</v-btn>
              <v-container>
                <v-btn @click="showDetail(video)" style="display:none;" :id="`${video.id}`"></v-btn>

                <v-dialog persistent max-width="600" v-model="video.modal">
                  <MoDal header-title="Video 상세페이지" submit=1 submit-title="리뷰작성" hide-title="돌아가기"
                        @hide="hideDetail(video)"
                      @submit="submitReview(video)">
                      <template v-slot:body>
                        <v-container fluid>
                          <label>{{video.title}}</label>
                          <iframe
                          width="550"
                          height="300"
                          :src="`https://www.youtube.com/embed/${video.id}`"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                          ></iframe>
                          <br>
                          <label>리뷰</label>
                          <div v-if="videoReviews == !null">
                            <v-simple-table fixed-header height="300px">
                              <template v-slot:default>
                                <thead>
                                  <tr>
                                    <th class="text-left">
                                      작성자
                                    </th>
                                    <th class="text-left">
                                      리뷰
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(review, index) in videoReviews" :key="index">
                                    <td>{{ review.writer }}</td>
                                    <td>{{ review.content }}</td>
                                  </tr>
                                </tbody>
                              </template>
                            </v-simple-table>
                          </div>
                          <div v-else>작성된 리뷰가 없습니다.</div>
                          <br>
                          <v-btn @click="zzimVideo(video)">찜하기</v-btn>
                          <v-textarea counter row="20" label="리뷰" v-model="review"></v-textarea>
                        </v-container>
                      </template>
                  </MoDal>
                
                </v-dialog>
              </v-container>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-else><h2 class="d-flex justify-center">검색어를 입력하세요</h2></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import MoDal from '@/components/util/MoDal.vue'
export default {
  name: "VideoList",
  data(){
    return{
      detail: false,
      videoId : '',
      title: '',
      review: '',
    }
  },
  components:{
    MoDal
  },
  computed:{
    ...mapState([
      'searchVideos', 'videoReviews'
    ])
  },
  methods:{
    pushDetail(video){
      document.getElementById(video.id).click()
    },
    showDetail(video){
      video.modal = true;
    },
    hideDetail(video){
      video.modal = false;
    },
    submitReview(video){
      video.modal = false;
    },
    zzimVideo(video){
      this.$store.dispatch('zzimVideo', video)
    }
  },
}
</script>

<style>

</style>