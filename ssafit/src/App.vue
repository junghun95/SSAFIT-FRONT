<template>
  <v-app>
    <BaseNav></BaseNav>
    <v-main>
      <router-view/>
    </v-main>
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
