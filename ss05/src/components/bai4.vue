<template>
  <div>
    <p>khi giá trị của biến <b>isVisible : {{isVisible}}</b></p>
    <button @click="showMessage">Hiển thị</button>
    <button @click="hideMessage">Ẩn</button>
    <div v-show="isVisible" class="notification">
      thông báo: <b>Welcome to rikkei Education</b>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(false);

const showMessage = () => {
  isVisible.value = true;
};

const hideMessage = () => {
  isVisible.value = false;
};
</script>

<style>
.notification {
  padding: 10px;
  background-color: #f0f4f8;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  color: #333;
}

button{
    margin-left: 4px;
}
</style>
