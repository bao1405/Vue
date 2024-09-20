<template>
   <div :class="['div', isActive ? 'active' : '']">Block</div>
</template>

<script>
const isActive = true;
</script>

<style scoped>
.active {
    background-color: red;
  color: #fff;
}
</style>
