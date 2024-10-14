<template>
  <div class="main">
    <header class="d-flex justify-content-between mb-3">
      <h3>Nhân viên</h3>
      <button class="btn btn-primary" @click="openAddModal">Thêm mới nhân viên</button>
    </header>

    <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
      <input
        v-model="searchTerm"
        style="width: 350px"
        type="text"
        class="form-control"
        placeholder="Tìm kiếm theo email"
      />
      <i class="fa-solid fa-arrows-rotate" title="Refresh" @click="refreshData"></i>
    </div>

    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Trạng thái</th>
          <th colspan="3">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in filteredEmployees.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage)" :key="employee.id">
          <td>{{ index + 1 + (currentPage - 1) * recordsPerPage }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.dob }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.address }}</td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <div :class="['status', employee.active ? 'status-active' : 'status-stop']"></div>
              <span>{{ employee.active ? 'Đang hoạt động' : 'Ngừng hoạt động' }}</span>
            </div>
          </td>
          <td>
            <button class="button button-block" @click="toggleBlock(employee)">
              {{ employee.active ? 'Chặn' : 'Bỏ chặn' }}
            </button>
          </td>
          <td>
            <button class="button button-edit" @click="editEmployee(employee)">
              Sửa
            </button>
          </td>
          <td>
            <button class="button button-delete" @click="deleteEmployee(employee.id)">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showAddModal" class="modal">
    <div class="modal-content">
        <span class="close" @click="closeAddModal">&times;</span>
        <h3>Thêm mới nhân viên</h3>
        <form @submit.prevent="addEmployee">
        <div>
            <label for="name">Họ và tên:</label>
            <input type="text" v-model="newEmployee.name" required />
        </div>
        <div>
            <label for="dob">Ngày sinh:</label>
            <input type="date" v-model="newEmployee.dob" required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" v-model="newEmployee.email" required />
        </div>
        <div>
            <label for="address">Địa chỉ:</label>
            <input type="text" v-model="newEmployee.address" required />
        </div>
        <button type="submit">Lưu</button>
        </form>
    </div>
    </div>
    <!-- Edit Employee Modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h3>Sửa thông tin nhân viên</h3>
        <form @submit.prevent="updateEmployee">
          <div>
            <label for="name">Họ và tên:</label>
            <input type="text" v-model="currentEmployee.name" required />
          </div>
          <div>
            <label for="dob">Ngày sinh:</label>
            <input type="date" v-model="currentEmployee.dob" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" v-model="currentEmployee.email" required />
          </div>
          <div>
            <label for="address">Địa chỉ:</label>
            <input type="text" v-model="currentEmployee.address" required />
          </div>
          <button type="submit">Lưu</button>
        </form>
      </div>
    </div>

    <footer class="d-flex justify-content-end align-items-center gap-3">
        <ul class="pagination">
        <p class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="prevPage"> << </a>
        </p>
        <p
          class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <a class="page-link" href="#" @click.prevent="setPage(page)">{{ page }}</a>
        </p>
        <p class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="nextPage"> >> </a>
        </p>
      </ul>
      <select v-model="recordsPerPage" class="form-select">
        <option :value="2">Hiển thị 2 bản ghi trên trang</option>
        <option :value="5">Hiển thị 5 bản ghi trên trang</option>
        <option :value="10">Hiển thị 10 bản ghi trên trang</option>
        <option :value="20">Hiển thị 20 bản ghi trên trang</option>
      </select>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const employees = ref([]);
const searchTerm = ref('');
const recordsPerPage = ref(2);
const currentPage = ref(1);
const showModal = ref(false);
const currentEmployee = ref({});
const showAddModal = ref(false);
const newEmployee = ref({
  name: '',
  dob: '',
  email: '',
  address: '',
  active: true 
});

const openAddModal = () => {
  newEmployee.value = { name: '', dob: '', email: '', address: '', active: true }; // Reset fields
  showAddModal.value = true; 
};

const closeAddModal = () => {
  showAddModal.value = false;
  newEmployee.value = {}; 
};

const addEmployee = async () => {
  try {
    const response = await axios.post("http://localhost:3000/user", newEmployee.value);
    
    employees.value.push(response.data);

    alert('Employee added successfully!');
    closeAddModal();
  } catch (error) {
    console.error('Error adding employee:', error);
    alert('Failed to add employee. Please try again.');
  }
};
const fetchEmployees = async () => {
  try {
    const res = await axios.get("http://localhost:3000/user");
    employees.value = res.data;
    console.log(res.data);
  } catch (error) {
    console.error('Error fetching employee data:', error);
  }
};

const filteredEmployees = computed(() => {
  return employees.value.filter(employee =>
    employee.email.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const totalPages = computed(() => {
  return Math.ceil(filteredEmployees.value.length / recordsPerPage.value);
});

const toggleBlock = async (employee) => {
  const newActiveStatus = !employee.active;

  try {
    await axios.put(`http://localhost:3000/user/${employee.id}`, {
      ...employee, 
      active: newActiveStatus, 
    });
    employee.active = newActiveStatus;

    alert(`Employee has been ${newActiveStatus ? 'unblocked' : 'blocked'} successfully!`);
  } catch (error) {
    console.error('Error updating employee status:', error);
    alert('Failed to update employee status. Please try again.');
  }
};


const editEmployee = (employee) => {
  currentEmployee.value = { ...employee }; 
  showModal.value = true; 
};

const updateEmployee = async () => {
  try {
    await axios.put(`http://localhost:3000/user/${currentEmployee.value.id}`, currentEmployee.value);
    
    const index = employees.value.findIndex(emp => emp.id === currentEmployee.value.id);
    if (index !== -1) {
      employees.value[index] = currentEmployee.value;
    }

    alert('Employee updated successfully!');
    closeModal();
  } catch (error) {
    console.error('Error updating employee:', error);
    alert('Failed to update employee. Please try again.');
  }
};

const closeModal = () => {
  showModal.value = false;
  currentEmployee.value = {}; 
};

const deleteEmployee = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/user/${id}`);
    
    employees.value = employees.value.filter(employee => employee.id !== id);
    
    alert('Employee deleted successfully!');
  } catch (error) {
    console.error('Error deleting employee:', error);
    alert('Failed to delete employee. Please try again.');
  }
};

const refreshData = () => {
  alert('Data refreshed!');
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const setPage = (page) => {
  currentPage.value = page;
};

onMounted(() => {
  fetchEmployees();
});
</script>

<style scoped>
header{
    display: flex;
}
.btn.btn-primary{
    margin-left: 580px;
    height: 30px;
    margin-top: 15px;
    background-color: blue;
    color: white;
    border:none ;
    border-radius:5px ;
}

button{
    cursor: pointer;
}
.main {
  margin: 50px 100px;
}

.fa-arrows-rotate {
  font-size: 20px;
  cursor: pointer;
  color: gray;
}

.fa-arrows-rotate:hover {
  color: rgb(184, 180, 180);
  transform: rotate(20deg);
  transition: all 0.5s linear;
}

.table th,
.table td {
  vertical-align: middle;
  text-align: center;
}

.table tr:nth-child(odd) th,
.table tr:nth-child(odd) td {
  border-color: #ff5733;
}

.table tr:nth-child(even) th,
.table tr:nth-child(even) td {
  border-color: #33ff57; 
}

.table tr:nth-child(odd) {
  background-color: #dddada; 
}

.table tr:nth-child(even) {
  background-color: #ffffff;
}

.button {
  padding: 4px 12px;
  line-height: 30px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

.button-edit {
  background-color: orange;
}

.button-delete {
  background-color: red;
}

.button-block {
  background-color: green;
}

.status {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid transparent;
}

.status-active {
  background-color: green;
}

.status-stop {
  background-color: red;
}

.pagination {
  margin-top:20px;
  display: flex;
  padding: 10px;
}
.form-select{
    margin-top: 40px;
    margin-left:440px ;
}

a{
    text-decoration: none;
    color: black;
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
}

.modal-content {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px; 
    animation: fadeIn 0.3s; 
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.page-link{
    margin-left: 5px;
}

footer{
    display: flex;
    height: 70px;
}
</style>
