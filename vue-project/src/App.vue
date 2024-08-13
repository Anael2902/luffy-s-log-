<template>
  <NavBar />
 <RouterView />
 <!-- <div id="layout"> -->
  <!-- <MapView /> -->
  <!-- </div> -->
 

<!--  
 <Fouter /> -->
</template>


<script setup>

 import {RouterLink, RouterView } from 'vue-router'
  import NavBar from '@/components/Navbar.vue'
  // import MapView from '@/components/MapView.vue';
  // import '../node_modules/mapbox-gl/dist/mapbox-gl.css';

  
  // import Fouter from '@/components/Fouter.vue'
</script>

<style scoped>
 /* #layout {
    flex: 1;
    display: flex;
    position: relative;
  } */
</style>
