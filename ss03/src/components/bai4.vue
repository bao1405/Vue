<template>
  <div :class="{ active: isActive }" :style="{ backgroundColor: backgroundColor }">
    Nội dung của thẻ div
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      backgroundColor: 'blue',
    };
  },
};
</script>

<style scoped>
.active {
  color: #fff;
}
</style>
