<template>
  <div>
    <h1>Header</h1>
    <p>giá trị count:{{store.state.count}}</p>
    <button @click="handleClick">increase</button>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
const store = useStore();
console.log(store);
const handleClick = () =>{
    increase
}
</script>

<style>

</style>