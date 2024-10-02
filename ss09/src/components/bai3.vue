<template>
  <div>
    <h2>bài 3</h2>
    <p>ngày sinh:{{inputDate}}</p>
    <input type="date" v-model="inputDate">
  </div>
</template>

<script setup>
import {ref} from "vue";
    const inputDate = ref("");
</script>

<style>

</style>