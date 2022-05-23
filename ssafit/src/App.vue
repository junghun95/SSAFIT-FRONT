<template>
  <v-app>
    <header>
      <BaseNav></BaseNav>
    </header>

    <v-main>
      <v-btn @click="fn">test</v-btn>
      <router-view />
    </v-main>

    <footer>
      
    </footer>
  </v-app>
</template>

<script>
import BaseNav from '@/views/BaseNav.vue';
import SockJS from 'sockjs-client'
// import Stomp from 'webstomp-client'
export default {
  name: "App",
  methods:{
    fn(){
      console.log(this.$socket);
    },
    connect(){
      const url = "http://localhost:8888/alarm";
      const options={username:'hong'};
      const socket = new SockJS(url,options);
      console.dir(socket);
      this.socket = socket;
      socket.onopen=function(){
        console.log('open');
      }
      socket.onmessage = function(event){
        console.log("onmessage : "+ event.data);
      }
      socket.onclose = function(){
        console.log('close');
      }

      // this.stompClient = Stomp.over(socket);
      // this.stompClient.connect({},frame=>{
      //   console.log('소켓 연결 성공',frame);

      // })
    }
  },
  components: { BaseNav },
  created(){
    this.connect();
  }
};
</script>
