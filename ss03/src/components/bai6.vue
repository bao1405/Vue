<template>
  <button @click="handleClick('Rikkei Academy')">Get param</button>
</template>

<script>
export default {
  methods: {
    handleClick(param) {
      console.log(param); 
    },
  },
};
</script>

<style >

</style>
