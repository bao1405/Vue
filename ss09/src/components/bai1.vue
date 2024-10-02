<template>
  <div>
    <h2>bài 1</h2>
    <p>Email</p>
    <input type="text" v-model="inputText">
    <p>Email: {{inputText}}</p>
  </div>

</template>

<script setup>
    import {ref} from "vue";
    const inputText = ref("");
</script>

<style>

</style>