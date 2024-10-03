<template>
  <div class="text-center">
    <h1>Bai 7</h1>
    <v-pagination
      v-model="page"
      :length="4"
      rounded="circle"
    ></v-pagination>

    
  </div>
</template>
<script>
  export default {
    data () {
      return {
        page: 1,
      }
    },
  }
</script>