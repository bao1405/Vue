<template>
  <div>
    <button @click="toggleChild">
      {{ isChildVisible ? "Hide" : "Show" }} Toggle
    </button>
    <Child v-if="isChildVisible" />
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import Child from "./Child.vue";

const isChildVisible = ref(false);
const toggleChild = () => {
  isChildVisible.value = !isChildVisible.value;
};
</script>
  