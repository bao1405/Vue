<template>
  <div>
    <h2>bài 5</h2>
    <p>giới tính:{{gender}}</p>
    <div>
      <input type="radio"  value="Nam" v-model="gender" />
      <label for="male">Nam</label>
    </div>
    <div>
      <input type="radio" value="Nữ" v-model="gender" />
      <label for="female">Nữ</label>
    </div>
    <div>
      <input type="radio" value="Khác" v-model="gender" />
      <label for="other">Khác</label>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
    const gender= ref("");
</script>

<style>

</style>