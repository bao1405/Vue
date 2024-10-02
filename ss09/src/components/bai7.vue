<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h1>thêm mới sản phẩm</h1>
    <p>Mã sản phẩm</p>
    <input type="text" v-model="productCode">
    <p>Tên sản phẩm</p>
    <input type="text" v-model="productName">
    <p>Giá</p>
    <input type="text" v-model="price">
    <p>Số lượng</p>
    <input type="number" v-model="quantity">
    <br>
    <button type="submit">thêm mới</button>
  </form>
</template>

<script setup>
    import {ref} from "vue";
    const productCode = ref("");
    const productName = ref("");
    const price = ref(0);
    const quantity = ref(0);

    const handleSubmit = () => {
        const product = {
            productCode:productCode.value,
            productName:productName.value,
            price:price.value,
            quantity:quantity.value,
        };
        console.log("sản phẩm đã đc thêm mới",product);
    }
</script>

<style>
.form{
    height: 300px;
    width: 100%;
}

button{
    height: 30px;
    width: 177px;
    margin-bottom: 20px;
    margin-top:20px;
    color: white;
    background-color: blue;
    border: white;
}
</style>