<template>
  <div>
    <button
      v-for="(button, index) in buttons"
      :key="index"
      :class="{ active: activeIndex === index + 1 }"
      @click="setActive(index + 1)"
    >
      Button {{ index + 1 }}
    </button>
  </div>
</template>

<script>
    const activeIndex = 1
    const  buttons = [1, 2, 3]

    setActive=(index)=> {
      this.activeIndex = index;
    }
</script>

<style scoped>
button {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
}

button.active {
  background-color: red;
  color: #fff;
}
</style>
