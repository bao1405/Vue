<template>
    <div>
      <h2>Bài 3</h2>
      <h2>Current company: {{companies}}</h2>
      <h2>Age :{{count }}</h2>
      <button @click="handleUpdate">Rendom</button>
    </div>
</template>
  
<script setup>
  import { computed, onUpdated,ref } from 'vue';
      const count = ref(0);
      const companies= computed(()=>{
        if (count<4) {
            companies.value="Rikkei Academy"
        }else if (count<8) {
             companies.value="Rikkei Education"
        }else companies.value="Rikkei Fukuoka"
      });
      const handleUpdate =()=>{
          count.value=Math.ceil(Math.random()*10);
      }
</script>
<style>
</style>