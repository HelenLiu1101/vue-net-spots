<template>
    <input type="text" v-model="msg" />
    <h3>Hello,{{ msg }}</h3>
</template>
<script setup>
import { ref } from 'vue'
const msg = ref("")
</script>
<style scoped>
h3 {
    color: green;
}
</style>