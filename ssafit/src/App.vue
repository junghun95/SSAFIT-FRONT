<template>
  <v-app>
    <header>
      <BaseNav></BaseNav>
    </header>

    <v-main>
      <router-view />
      <div id="toast"></div>
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
    connect(){
      const url = "http://localhost:8888/alarm";
      this.session
      const socket = new SockJS(url);
      console.dir(socket);
      this.socket = socket;
      socket.onopen=function(){
        console.log('open');
        const sample = {'type': 'self', 'from-username':'hong', 'to-username':'','to' : 0 , 'id' : 0}
        socket.send(JSON.stringify(sample));
      }
      socket.onmessage = function(event){
        console.log(JSON.parse(event.data))
        const message = JSON.parse(event.data);
        toast(message.msg)
     
      }
      socket.onclose = function(){
        console.log('close');
      }
    }
  },
  components: { BaseNav },
  created(){
    this.connect();
  }
};
let removeToast;

function toast(string) {
    const toast = document.getElementById("toast");

    toast.classList.contains("reveal") ?
        (clearTimeout(removeToast), removeToast = setTimeout(function () {
            document.getElementById("toast").classList.remove("reveal")
        }, 1000)) :
        removeToast = setTimeout(function () {
            document.getElementById("toast").classList.remove("reveal")
        }, 2000)
    toast.classList.add("reveal"),
        toast.innerText = string
}
</script>

<style>
  #toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    padding: 15px 20px;
    transform: translate(-50%, 10px);
    border-radius: 30px;
    overflow: hidden;
    font-size: .8rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s, visibility .5s, transform .5s;
    background: rgba(0, 0, 0, .35);
    color: #fff;
    z-index: 10000;
}

#toast.reveal {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0)
}
</style>
