<template>
  <div>
    <h2>Bài 6</h2>
    <p>Sở thích: {{ [hobbies.join(', ')] }}</p>
    <div>
      <input type="checkbox" id="soccer" value="đá bóng" v-model="hobbies" />
      <label for="soccer">đá bóng</label>
    </div>
    <div>
      <input type="checkbox" id="volleyball" value="bóng chuyền" v-model="hobbies" />
      <label for="volleyball">bóng chuyền</label>
    </div>
    <div>
      <input type="checkbox" id="coding" value="code" v-model="hobbies" />
      <label for="coding">code</label>
    </div>
    <div>
      <input type="checkbox" id="swimming" value="bơi lội" v-model="hobbies" />
      <label for="swimming">bơi lội</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const hobbies = ref([]);  
</script>

<style>
</style>
