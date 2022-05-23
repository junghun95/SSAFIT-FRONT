<template>
  <div class="user-detail d-flex justify-center align-center">
    <v-col>
      <h2>User Detail 페이지</h2>
      <br>
      <label>이름 : </label>
      <input type="text" v-model="getUserInfo.username" readonly disabled>
      <div>{{getUserInfo.username}}</div>
      <br>
      <label>이메일 : </label>
      <div>{{getUserInfo.email}}</div>
      <br>
      <label>가입일 : </label>
      <div>{{getUserInfo.regDate}}</div>
      <br>
      <label>내가 쓴 리뷰목록</label>
      <!-- <div v-if="getUserInfo.myComments.length"> -->
        <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  내용
                </th>
                <th class="text-left">
                  작성일
                </th>
                <th class="text-left">
                  좋아요 수
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(comment, index) in getUserInfo.myComments" :key="index">
                <td>{{ comment.content }}</td>
                <td>{{ comment.regDate }}</td>
                <td>{{ comment.likes }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      <!-- </div> -->
      <!-- <div v-else>내가 쓴 리뷰가 없습니다.</div> -->
      <br>
      <label>내가 좋아요한 비디오목록</label>
      <!-- <div v-if="getUserInfo.myVideos.length"> -->
        <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  영상 제목
                </th>
                <th class="text-left">
                  작성일
                </th>
                <th class="text-left">
                  좋아요 수
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(video, index) in getUserInfo.myVideos" :key="index">
                <td>{{ video.title }}</td>
                <td>{{ video.regDate }}</td>
                <td>{{ video.likes }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      <!-- </div> -->
      <!-- <div v-else>내가 좋아요 누른 비디오가 없습니다.</div> -->
    </v-col>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'UserDetail',
    data(){
        return {
          username: '',
          email: '',
          regDate: '',
          myVideos:[],
          myComments:[],
        }
    },
    methods:{

    },
    created(){

    },
    computed:{
      ...mapGetters([
        'getUserInfo'
      ])
    }

}
</script>

<style>

</style>