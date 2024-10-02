<template>
    <div>
        <h1>lifecycle!</h1>

        <!-- 
            React :
            1. khởi tạo create : khởi tạo state, props
            2. mount  : gắt kết đưa vào DOM
            3. update : quá trình cập nhật thay đổi state (re-render)
            4. unmount : loại bỏ khỏi DOM 
            Vuejs cũng tương tự gồm 4 giai đoạn
            khởi tạo-gắn kết- cập nhật- loại bỏ.

         -->
        <Lifecycle :count="countA" v-if="isShow"></Lifecycle>
        <button @click="handleClick">click</button>
        <button @click="unmountComponent">click-unmount</button>
        <div>
           <Bai1 />
          <Bai2 />
          <Bai3 />
          <Bai4 />
          <Bai5/>
          <Bai7/>
          <Bai8/>
          <Bai9/>
          <Bai10/>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import Lifecycle from "./components/Lifecycle.vue";
const isShow = ref(true);
const countA = ref(0);
const handleClick = () => {
    countA.value++;
};
const unmountComponent = () => {
    isShow.value = false;
};
import Bai1 from "./components/Bai1.vue";
import Bai2 from "./components/Bai2.vue";
import Bai3 from "./components/Bai3.vue";
import Bai4 from "./components/Bai4/Parent.vue";
import Bai5 from "./components/Bai5/Parent.vue";
import Bai7 from "./components/Bai7.vue";
import Bai8 from "./components/Bai8.vue";
import Bai9 from "./components/Bai9.vue";
import Bai10 from "./components/BT10.vue";
</script>
<style></style>