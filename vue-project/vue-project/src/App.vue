<template>
  <NavBar />
 <RouterView />
 <!-- <OpenMap /> -->
 <!-- <Fouter /> -->
</template>


<script setup>
 import {RouterLink, RouterView } from 'vue-router'
  import NavBar from '@/components/Navbar.vue'
  import Fouter from '@/components/Fouter.vue'
  import OpenMap from '@/components/OpemnMap.vue'
</script>

<style scoped>

</style>
