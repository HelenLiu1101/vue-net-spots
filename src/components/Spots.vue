<template>
    <h2>台北市景點資料</h2>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" v-for="(value, index) in result.totalPages" :key="index" @click="pagingHandler(value)">
                <a :class="{ 'page-link': true, 'currentPage': terms.page === value }" href="#">{{ value }}</a>
            </li>
        </ul>
    </nav>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="{ spotId, spotDescription, address, spotImage, spotTitle } in result.spotsResult"
            :key="spotId">
            <div class="card h-100">
                <img :src="spotImage" class="card-img-top" :alt="spotTitle">
                <div class="card-body">
                    <h5 class="card-title">{{ spotId }} {{ spotTitle }}</h5>
                    <p class="card-text">{{ spotDescription.length <= 100 ? spotDescription : spotDescription.substring(0,
                        100) }}...</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">{{ address }}</small>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { onMounted, reactive } from 'vue';
//ref
//reactive
//搜尋、分頁、排序的條件
const terms = reactive({
    "keyword": "公園",
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
    result.totalPages = datas.totalPages > 8 ? 8 : datas.totalPages;
    result.spotsResult = datas.spotsResult;
    //console.log(result);
}


//分頁
const pagingHandler = page => {
    terms.page = page;
    loadSpots();
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
    
<style scoped>
.pagination li {
    cursor: pointer;
}

.currentPage {
    background-color: lightblue;
}
</style>