<template>
  <NavBar />
 <RouterView />
 
 <Fouter />
</template>


<script setup>
 import {RouterLink, RouterView } from 'vue-router'
  import NavBar from '@/components/Navbar.vue'
  import Fouter from '@/components/Fouter.vue'
</script>

<style scoped>

</style>
