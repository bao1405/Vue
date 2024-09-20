<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="inputValue" placeholder="Enter something" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '', 
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submission prevented!');
    },
  },
};
</script>

<style scoped>

</style>
