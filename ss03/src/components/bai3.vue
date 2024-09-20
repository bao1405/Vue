<template>
  <div>
    <input type="text" :disabled="isDisable" placeholder="Nhập văn bản..." />
    <button @click="toggleDisable">
      {{ isDisable ? 'Bỏ vô hiệu hóa' : 'Vô hiệu hóa' }}
    </button>
  </div>
</template>

<script>
const isDisable = true;
const toggleDisable = () =>{
    this.isDisable = !this.isDisable; 
  }
</script>

<style >

</style>
