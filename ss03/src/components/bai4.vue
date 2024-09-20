<template>
  <div :class="{ active: isActive }" :style="{ backgroundColor: backgroundColor }">
    Nội dung của thẻ div
  </div>
</template>

<script>
const isActive = true;
const backgroundColor= 'red';
</script>

<style scoped>
.active {
  color: #fff;
}
</style>
