<template>
    <div>
        <p>khi giá trị của <b>isShow: {{ isShow }}</b></p>
        <button @click="handleClick">hiện</button>
        <p v-if="isShow">Rikkei Education</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false);

const handleClick = () => {
    isShow.value = true; 
}
</script>

<style>
</style>
