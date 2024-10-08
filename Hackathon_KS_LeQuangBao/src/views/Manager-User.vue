<template>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="13">
          <v-row class="d-flex justify-space-between align-center my-1 mb-1">
            <v-col>
              <h1 class="text-center">Manager User</h1>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn color="primary" @click="dialog = true">Add New User</v-btn>
            </v-col>
          </v-row>

          <!-- User Table -->
          <v-data-table 
            :headers="headers"
            :items="users"
            item-value="id"
            class="elevation-1"
          >
            <!-- Edit and Delete actions -->
            <template v-slot:[`item.actions`]="{ item }">
            <div class="d-flex align-center">
                <v-btn small color="orange" @click="editUser(item.id)">Edit</v-btn>
                <v-btn small color="red" @click="deleteUser(item.id)">Delete</v-btn>
            </div>
            </template>
          </v-data-table>

          <!-- Add User Dialog -->
          <v-dialog v-model="dialog" max-width="600px">
            <v-card>
                <v-card-title>
                <span class="headline">{{ isEditMode ? 'Edit User' : 'Add New User' }}</span>
                </v-card-title>
                <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-text-field
                    label="Name"
                    v-model="user.name"
                    :rules="[v => !!v || 'Name is required']"
                    required
                    ></v-text-field>
                    <v-btn-toggle v-model="user.gender" mandatory class="d-flex align-center" >
                        <v-btn  :value="'Male'" depressed class="mr-2" color="primary" >
                            Male
                        </v-btn>
                        <v-btn  :value="'Female'" depressed class="mr-2" color="primary">
                            Female
                        </v-btn>  
                        <v-btn  :value="'Other'" depressed color="primary"  >
                            Other
                        </v-btn>
                        </v-btn-toggle>

                    <v-text-field
                    label="Date of Birth"
                    v-model="user.dateOfBirth"
                    :rules="dobRules"
                    type="date"
                    required
                    ></v-text-field>

                    <v-text-field
                    label="Email"
                    v-model="user.email"
                    :rules="emailRules"
                    required
                    ></v-text-field>
                </v-form>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="closeDialog">Close</v-btn>
                <v-btn color="green darken-1" text @click="isEditMode ? updateUser() : addUser()">
                    {{ isEditMode ? 'Save Changes' : 'Add' }}
                </v-btn>
                </v-card-actions>
                </v-card>
                </v-dialog>
                <v-dialog v-model="deleteDialog" max-width="400px">
                    <v-card>
                    <v-card-title class="headline">Xác nhận</v-card-title>
                    <v-card-text>Bạn có chắc chắn muốn xóa tài khoản này?</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="grey" @click="closeDeleteDialog">Cancel</v-btn>
                        <v-btn color="red" @click="confirmDeleteUser">Delete</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const valid = ref(false)
const dialog = ref(false) 
const isEditMode = ref(false)
const editingUserId = ref(null)
const deleteDialog = ref(false)
const deletingUserId = ref(null)

const users = ref([])

onMounted(() => {
  const storedUsers = localStorage.getItem('users')
  if (storedUsers) {
    users.value = JSON.parse(storedUsers)
  } else {
    users.value = [
      { id: 1, name: 'John Doe', gender: 'Male', dateOfBirth: '1990-01-01', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', gender: 'Female', dateOfBirth: '1992-03-15', email: 'jane.smith@example.com' },
      { id: 3, name: 'Mike Johnson', gender: 'Male', dateOfBirth: '1985-06-21', email: 'mike.johnson@example.com' },
      { id: 4, name: 'Emily Davis', gender: 'Female', dateOfBirth: '1997-11-30', email: 'emily.davis@example.com' },
      { id: 5, name: 'Robert Brown', gender: 'Male', dateOfBirth: '1965-07-13', email: 'robert.brown@example.com' },
      { id: 6, name: 'David Miller', gender: 'Male', dateOfBirth: '1980-09-12', email: 'david.miller@example.com' },
      { id: 7, name: 'Lisa White', gender: 'Female', dateOfBirth: '1995-05-24', email: 'lisa.white@example.com' },
      { id: 8, name: 'Sarah Wilson', gender: 'Female', dateOfBirth: '1988-12-11', email: 'sarah.wilson@example.com' },
      { id: 9, name: 'Chris Lee', gender: 'Male', dateOfBirth: '1990-06-04', email: 'chris.lee@example.com' },
      { id: 10, name: 'Anna Taylor', gender: 'Female', dateOfBirth: '1989-08-17', email: 'anna.taylor@example.com' }
    ]
    localStorage.setItem('users', JSON.stringify(users.value))
  }
})

const headers = [
  { text: 'STT', value: 'id', width: '10%' },
  { text: 'Name', value: 'name', width: '25%' },
  { text: 'Gender', value: 'gender', width: '10%' },
  { text: 'Date Of Birth', value: 'dateOfBirth', width: '15%' },
  { text: 'Email', value: 'email', width: '30%' },
  { text: 'Option', value: 'actions', sortable: false, width: '10%' }
]


const user = ref({
  name: '',
  email: '',
  dateOfBirth: ''
})

const emailRules = [
  v => !!v || 'Email is required',
  v => /.+@.+\..+/.test(v) || 'Email must be valid',
  v => !isEmailDuplicate(v) || 'Email already exists'
]

const dobRules = [
  v => !!v || 'Date of Birth is required',
  v => new Date(v) <= new Date() || 'Date of Birth cannot be in the future'
]

function isEmailDuplicate(email) {
  const users = JSON.parse(localStorage.getItem('users')) || []
  return users.some(u => u.email === email)
}

const close = () => {
  dialog.value = false
}

const addUser = () => {
  if (valid.value) {
    const newId = users.value.length ? Math.max(...users.value.map(u => u.id)) + 1 : 1
    
    const newUser = {
      id: newId,
      name: user.value.name,
      gender: user.value.gender,
      dateOfBirth: user.value.dateOfBirth,
      email: user.value.email
    }

    users.value.push(newUser)

    localStorage.setItem('users', JSON.stringify(users.value))

    user.value = { name: '', gender: '', dateOfBirth: '', email: '' }

    dialog.value = false 
  } else {
    console.log('Form is not valid')
  }
}

const editUser = (id) => {
  const userToEdit = users.value.find(u => u.id === id)
  if (userToEdit) {
    user.value = { ...userToEdit } 
    isEditMode.value = true   
    editingUserId.value = id  
    dialog.value = true     
  }
}

const updateUser = () => {
  if (valid.value) {  
    const index = users.value.findIndex(u => u.id === editingUserId.value);  
    if (index !== -1) {
      users.value[index] = { ...user.value, id: editingUserId.value };
      localStorage.setItem('users', JSON.stringify(users.value));
      closeDialog();  
    }
  } else {
    console.log('Form is not valid'); 
  }
}
const resetForm = () => {
  user.value = { name: '', gender: '', dateOfBirth: '', email: '' }
  isEditMode.value = false
  editingUserId.value = null
  dialog.value = false
}

const closeDialog = () => {
  resetForm()
}



const deleteUser = (id) => {
  deletingUserId.value = id 
  deleteDialog.value = true  
}

const confirmDeleteUser = () => {
  users.value = users.value.filter(user => user.id !== deletingUserId.value)
  localStorage.setItem('users', JSON.stringify(users.value))
  closeDeleteDialog()
}

const closeDeleteDialog = () => {
  deleteDialog.value = false
  deletingUserId.value = null
}

</script>
<style scoped>
.v-application {
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-size: 24px;
  font-weight: bold;
}

.v-data-table-header {
  background-color: #f5f5f5;
}

.v-navigation-drawer{
    width: 230px;
}

.v-data-table-header{
    margin-left: 50px;
}
.v-btn {
  margin: 2px;
}
.elevation-1{
    margin-left:"10px";
}

.blur-background {
  background-color: rgb(104, 98, 98);
  padding: 10px;
  position: relative;
}
.v-radio{
    color: black;
}

.v-btn-toggle{
    padding: 20px;
    height: 60px;
}
.v-btn{
    height: 60px;
}
</style>
