<template>
  <div>
    <h2>bài 4</h2>
    <p>tiến độ hoàn thành:{{inputRange}}%</p>
    <input type="range" v-model="inputRange">
  </div>
</template>

<script setup>
import {ref} from "vue";
    const inputRange = ref("");
</script>

<style>

</style>