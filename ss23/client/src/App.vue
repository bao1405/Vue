<template>
  <div>
    <h1>API</h1>
    <td>
      <th style="margin-left:30px ;">name</th>
      <th style="margin-left:30px ;">email</th>
      <th style="margin-left:30px ;">địa chỉ</th>
      <th style="margin-left:30px ;">phone</th>
      <th style="margin-left:30px ;">lựa chọn</th>
    </td>
    <ul>
      <li v-for="student in students" :key="student.id">
        {{ student.name }}
        {{ student.email }}
        {{ student.address }}
        {{ student.phone }}
        <button @click="deleteUser(student.id)">xóa</button>
    <button @click="updateUser(student.id)">cập nhât</button>
      </li>
    </ul>
    <button @click="addUser">thêm user</button>
    <select @click="handleChange">
      <option value="asc">a-z</option>
      <option value="desc">z-a</option>
    </select>
    <input type="text" v-model="valueInput">
    <button @click="findByName">tìm kiếm</button>
  </div>
</template>

<script setup>
  import axios from "axios";
  import {onMounted,ref} from "vue";
  const valueInput = ref([]);
  const students = ref([]);
  const getUsers =async () =>{
    let res = await axios.get("http://localhost:3000/students");
    console.log(res.data);
    students.value=res.data;
   };
   const addUser = () =>{
    let newUser = {
            id:5,
            name:"nhat",
            email:"bao@gmail.com",
            address:"Hà Nội",
            phone:"09283729",
            status:true,
            date:"2023-10-10"
    };
    axios.post("http://localhost:3000/students",newUser)
   };
   const deleteUser=(id)=>{
    axios.delete(`http://localhost:3000/students/${id}`)
    getUsers();
   };
   const updateUser=(id)=>{
    const newUpdate = {
      name :"nhat",
      email:"bao@gmail.com",
      address:"Hà Nội",
      phone:"09283729",
      status:true,
      date:"2023-10-10"
    }
    console.log(id);
    axios.put(`http://localhost:3000/students/${id}`,newUpdate)
    getUsers();
   };
   onMounted(()=>{
    getUsers();
   });
   const handleChange = async (event) =>{
    let response = await axios.get(
      `http://localhost:3000/students?_sort=name&_order=${event.target.value}`,
      students.value=response.data,
    )
   }
  const findByName=async () =>{
    const res = await axios.get(`http://localhost:3000/students?name_like=${valueInput.value}`)
    console.log(res.data);
    students.value=res.data;
    
  }
</script>

<style>
.th{
  margin-left:30px ;
}
</style>