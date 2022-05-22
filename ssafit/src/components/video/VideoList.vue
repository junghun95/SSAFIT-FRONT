<template>
  <div class="video-list">
      <h2>video list</h2>
      <div class="video-search d-flex margin-auto">
        <v-text-field placeholder="검색" v-model="search"></v-text-field>
        <v-btn color="primary" elevation="2" outlined rounded>검색</v-btn>
      </div>
      <div class="video-list">
          <h2 class="d-flex justify-center">리스트</h2> 
          <div class="">
            <v-row>
                <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                    <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'VideoList',
        data(){
            return{
                search: "",
            }
        }
    }
</script>

<style>

</style>