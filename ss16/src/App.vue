<template>
  <div>
    <h1>vue-router</h1>
    <router-link to="/">Home</router-link>||
    <router-link to="/about">About</router-link>||
    <router-link to="/contact">contact</router-link>||
    <router-link to="/register">register</router-link>||
    <router-link to="/login">login</router-link>||
    <router-link to="/listuser">listuser</router-link>||
    <!-- <a href="/">click home</a>
    <a href="/about">click about</a>
    <a href="/contact">click contact</a> -->
    <router-view/>
    
  </div>
</template>

<script setup>

</script>

<style>

</style>