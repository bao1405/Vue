<template>
  <div>
    <!-- <p v-if="isCheck">v-if</p>
    <p>v-else</p>
    <p>v-else-if</p>
    <p v-show="isVShow">
      element đc hiện thị
    </p>
    <ul>
      <li v-for="(std,index) in students" :key="std.id">sinh viên số {{index+1}}:{{std.name}}</li>
    </ul> -->
    <Bai1 />
    <Bai2 />
    <Bai4 />
    <Bai5 />
    <Bai7 />
  </div>
  
</template>

<script setup>
  // const isCheck = flase;
  // const isVShow = flase;
  // const students = [
  //   {
  //     id:1,
  //     name :" phuong thao"
  //   }
  // ]

  // const useInfo={
  //   id:1,
  //   name:"nguyên văn A",
  //   age:20,
  //   address:"ha noi"
  // }

  import Bai1 from './components/bai1.vue';
  import Bai2 from './components/bai2.vue';
  import Bai4 from './components/bai4.vue';
  import Bai5 from './components/bai5.vue';
  import Bai7 from './components/bai7.vue';
</script>

<style>

</style>