<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Top from './components/top.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <header>
    <Top :home="true"></Top>
  </header>

  <RouterView />
  <Footer></Footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
