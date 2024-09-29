<template>
  <div>
    <h1>Even Numbers</h1>
    <ul>
      <li v-for="number in evenNumbers" :key="number">{{ number }}</li>
    </ul>
  </div>
</template>

<script>
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    evenNumbers=()=> {
      return this.numbers.filter(number => number % 2 === 0);
    }
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
