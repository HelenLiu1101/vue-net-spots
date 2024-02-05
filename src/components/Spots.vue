<template>
    <h2>台北市景點資料</h2>
</template>
    
<script setup>
import { onMounted } from 'vue';
const loadCategories = async () => {
    // console.log(import.meta.env.VITE_API_SPOTURL); //https://localhost:7259/api

    // const API_URL = "https://localhost:7259/api/Categories";
    const API_URL = `${import.meta.env.VITE_API_SPOTURL}/categories`;
    const response = await fetch(API_URL);
    const datas = await response.json();
    console.log(datas);
}

onMounted(() => {
    loadCategories();
})



</script>
    
<style></style>