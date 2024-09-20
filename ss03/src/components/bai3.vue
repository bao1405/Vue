<template>
  <div>
    <input type="text" :disabled="isDisable" :value="isDisable ? '' : value" />
    
  </div>
</template>

<script>
const isDisable = true;
const value = "cho phép";
</script>

<style >

</style>
