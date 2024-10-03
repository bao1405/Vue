<template>
  <div>
    <h1>vuetify</h1>
    <v-btn color="warning">click</v-btn>
    <button class="red">click1</button>
    <v-text-field label="email" width="250px" color="red"></v-text-field>
    <v-select label="chọn 1 phong ban" :items="['kế toán','nhận sự','bảo vệ']"></v-select>
    <Bai1/>
    <Bai2/>
    <Bai3/>
    <Bai4/>
    <Bai5/>
    <Bai6/>
    <Bai7/>
    <Bai8/>
    <Bai9/>
    <Bai10/>
    <Bai11/>
  </div>
</template>

<script setup>
  import Bai1 from "./components/Bai1.vue"
  import Bai2 from "./components/Bai2.vue"
  import Bai3 from "./components/Bai3.vue"
  import Bai4 from "./components/Bai4.vue"
  import Bai5 from "./components/Bai5.vue"
  import Bai6 from "./components/Bai6.vue"
  import Bai7 from "./components/Bai7.vue"
  import Bai8 from "./components/Bai8.vue"
  import Bai9 from "./components/Bai9.vue"
  import Bai10 from "./components/Bai10.vue"
  import Bai11 from "./components/Bai11.vue"
</script>

<style>

</style>