<template>
  <div class="signup-container">
    <h2>Create account</h2>
    <form @submit.prevent="submitForm">
      <label for="email">Your email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="name@company.com"
        required
      />

      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="••••••••"
        required
      />

      <label for="confirm-password">Confirm password</label>
      <input
        type="password"
        id="confirm-password"
        v-model="confirmPassword"
        placeholder="••••••••"
        required
      />

      <button type="submit">Create an account</button>
    </form>
    <p>Already have an account? <a href="/login">Login here</a></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    submitForm() {
      if (this.password === this.confirmPassword) {
        // Handle form submission (e.g., send data to an API)
        console.log('Form submitted with:', {
          email: this.email,
          password: this.password
        });
      } else {
        alert("Passwords don't match!");
      }
    }
  }
};
</script>

<style scoped>
.signup-container {
  width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.signup-container h2 {
  margin-bottom: 20px;
}

.signup-container label {
  display: block;
  margin-top: 10px;
  text-align: left;
}

.signup-container input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}
</style>
