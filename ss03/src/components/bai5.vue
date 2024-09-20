<template>
  <button @click="handleClick">Click me</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('Clicked');
    },
  },
};
</script>

<style scoped>
</style>
