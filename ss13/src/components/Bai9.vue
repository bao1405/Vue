<template>
<div>
    <h1>Bai 9</h1>
    <v-container>
    <v-row>
      <!-- Basic Layout Column -->
      <v-col>
        <v-form>
          <v-text-field label="Name" v-model="name"></v-text-field>
          <v-text-field label="Company" v-model="company"></v-text-field>
          <v-text-field label="Email" v-model="email"></v-text-field>
          <v-text-field label="Phone No" v-model="phone"></v-text-field>
          <v-textarea label="Message" v-model="message"></v-textarea>
          <v-btn color="primary">Send</v-btn>
        </v-form>
      </v-col>
      
      <!-- Basic with Icons Column -->
      <v-col>
        <v-form>
          <v-text-field label="Name" prepend-icon="mdi-account" v-model="name"></v-text-field>
          <v-text-field label="Company" prepend-icon="mdi-office-building" v-model="company"></v-text-field>
          <v-text-field label="Email" prepend-icon="mdi-email" v-model="email"></v-text-field>
          <v-text-field label="Phone No" prepend-icon="mdi-phone" v-model="phone"></v-text-field>
          <v-textarea label="Message" prepend-icon="mdi-message" v-model="message"></v-textarea>
          <v-btn color="primary">Send</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    };
  }
};
</script>
