<template>
  <div>
    <h2>bài 2</h2>
    <p>màu sắc</p>
    <input type="color" v-model="inputColor">
    <p>Mã màu {{inputColor}}</p>
  </div>
</template>

<script setup>
import {ref} from "vue";
    const inputColor = ref("");
</script>

<style>

</style>