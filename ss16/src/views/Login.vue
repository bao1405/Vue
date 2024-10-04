<template>
  <div class="login-container">
    <h2>Login Account</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Your email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="name@company.com"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="********"
          required
        />
      </div>
      <button type="submit" class="login-button">Login an account</button>
      <p class="register-link">
        Already have an account? <a href="#">Register here</a>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleLogin = () => {
  console.log("Logging in with:", email.value, password.value);
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.login-button:hover {
  background-color: #0056b3;
}
.register-link {
  text-align: center;
  margin-top: 15px;
}
.register-link a {
  color: #007bff;
}
</style>
