<template>
  <div>
    <div class="app">
    <!-- Header -->
    <header class="header">
      <h1>Header</h1>
    </header>

    <div class="content-wrapper">
      <nav class="sidebar">
        <ul>
          <li>
            <router-link to="/admin" exact-active-class="active">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/admin/manager-user" exact-active-class="active">Manager User</router-link>
          </li>
          <li>
            <router-link to="/admin/manager-product" exact-active-class="active">Manager Product</router-link>
          </li>
        </ul>
      </nav>
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
  </div>
</template>

<script setup>
  import {RouterView} from "vue-router";
</script>
<style >
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column; 
  height: 100vh;
  background-color: #f0f0f0;
}

.header {
  height: 60px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
}

.content-wrapper {
  display: flex;
  flex-grow: 1; 
  background-color: #f0f0f0;
}

.sidebar {
  width: 250px;
  background-color: #333;
  padding-top: 20px;
}

.sidebar ul {
  list-style-type: none;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar li a {
  display: block;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.sidebar li a:hover {
  background-color: #555;
}

.active {
  background-color: #007bff;
  color: white; 
}

.main {
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
}

</style>

