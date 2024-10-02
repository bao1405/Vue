<template>
  <div>
    <h2>Bài 6</h2>
    <h2>count :{{count }}</h2>
    <button @click="handleUpdate">Counter</button>
  </div>
</template>

<script setup>
import { onUpdated,ref } from 'vue';
    const count = ref(0);
    const handleUpdate =()=>{
        count.value++;
    }
    onUpdated(()=>{
        console.log("Dữ liệu đã thay đổi");
        document.title=count.value;
    })
    
</script>

<style>

</style>