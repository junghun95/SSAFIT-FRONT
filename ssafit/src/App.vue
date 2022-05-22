<template>
  <v-app>
    <header>
      <BaseNav></BaseNav>
    </header>

    <v-main>
      <router-view />
    </v-main>

    <footer>
      
    </footer>
  </v-app>
</template>

<script>
import BaseNav from '@/views/BaseNav.vue';
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { BaseNav }
};
</script>
