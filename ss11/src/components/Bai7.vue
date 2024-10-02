<template>
    <div>
        <h2>Bài 7</h2>
        <input type="text" v-model="inputValue"  id="">
    </div>
</template>

<script setup>
import { onUpdated } from 'vue';
    const inputValue= ref("");
    onUpdated(()=>{
        document.title=inputValue.value;
    })
</script>

<style>

</style>