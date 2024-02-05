<template>
    <h2>台北市景點資料</h2>
</template>
    
<script setup>
import { onMounted, reactive } from 'vue';
//ref
//reactive
//搜尋、分頁、排序的條件
const terms = reactive({
    "keyword": "北投",
    "categoryId": 0,
    "sortBy": "spotId",
    "sortType": "asc",
    "page": 1,
    "pageSize": 9
});

//回傳的資料
const result = reactive({
    "totalPages": 1,
    "spotsResult": []
});

//呼叫API
const loadSpots = async () => {
    const API_URL = `${import.meta.env.VITE_API_SPOTURL}/spots`;
    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(terms),
        headers: { 'Content-Type': 'application/json' }
    });
    const datas = await response.json();
    console.log(datas);

}








// const loadCategories = async () => {
//     // console.log(import.meta.env.VITE_API_SPOTURL); //https://localhost:7259/api

//     // const API_URL = "https://localhost:7259/api/Categories";
//     const API_URL = `${import.meta.env.VITE_API_SPOTURL}/categories`;
//     const response = await fetch(API_URL);
//     const datas = await response.json();
//     console.log(datas);
// }

onMounted(() => {
    // loadCategories();
    loadSpots();
})



</script>
    
<style></style>