<template>
    <h2>台北市景點資料</h2>
</template>
    
<script setup>
import { onMounted } from 'vue';
const loadCategories = async () => {
    const API_URL = "https://localhost:7259/api/Categories";
    const response = await fetch(API_URL);
    const datas = await response.json();
    console.log(datas);
}

onMounted(() => {
    loadCategories();
})



</script>
    
<style></style>