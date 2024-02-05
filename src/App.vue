<script setup>
import First from './components/First.vue';
import HelloWorld from './components/HelloWorld.vue';

</script>

<template>
  <RouterLink to="/">首頁</RouterLink> |
  <RouterLink to="/about">關於我們</RouterLink> |
  <RouterLink to="/contact">聯絡我們</RouterLink> |
  <hr />
  <h2>Vue Project</h2>
  <First></First>
  <hello-world></hello-world>
  <hr />
  <RouterView></RouterView>
</template>

<style scoped></style>
