<template>
  <div>
    <p>nếu <b>isShow = {{isShow}}</b></p>
    <button @click="toggleShow">{{ isShow ? 'Hiện' : 'Ẩn' }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isShow = ref(true);

const toggleShow = () => {
  isShow.value = !isShow.value; 
};
</script>

<style>
</style>
