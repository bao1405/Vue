<template>
  <div style="margin: 20px">
    <a :href="url" @click="preventNavigation">google</a>
  </div>
</template>

<script>
const url = "http://www.google.com/";
const isValidUrl = url.startsWith("https://");

const preventNavigation = (event) => {
  if (!isValidUrl) {
    event.preventDefault();
    alert("Đường dẫn không hợp lệ");
  }
};
</script>

<style>

</style>