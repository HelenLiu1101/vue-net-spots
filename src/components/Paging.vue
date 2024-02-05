<template>
    <nav aria-label="Page navigation example">
        <!-- <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
        </ul> -->

        <ul class="pagination">
            <li class="page-item" v-for="(value, index) in totalPages" :key="index" @click="pagingHandler(value)">
                <a :class="{ 'page-link': true, 'currentPage': page === value }" href="#">{{ value }}</a>
            </li>
        </ul>
    </nav>
</template>
    
<script setup>
const props = defineProps({
    totalPages: Number,
    page: Number
})

const emit = defineEmits(["abcClick"]);
const pagingHandler = page => {
    emit("abcClick", page)
}

</script>
    
<style scoped>
.pagination li {
    cursor: pointer;
}

.currentPage {
    background-color: lightblue;
}
</style>