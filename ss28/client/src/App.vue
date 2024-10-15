<template>
  <div class="container">
    <div class="product-list">
      <h2>List Product</h2>
      <div v-for="(product, index) in products" :key="product.id" class="product-item">
        <div style="display:flex">
          <img :src="product.image" alt="Product Image" />
          <div style="display:flex">
            <div>
              <h3 style="margin-top:-1px">{{ product.name }}</h3>
              <p style="width:270px">{{ product.content }}</p>
              <h3>Total: {{ product.total }}</h3>
            </div>
            <div>
              <input type="number" v-model.number="product.quantity" min="0" />
              <p style="margin-left:30px">Price: ${{ product.price }}</p>
              <button @click="addToCart(index)">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="shopping-cart">
      <h2>Shopping Cart</h2>
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <div style="display:flex;margin-top:-1px">
          <img :src="item.image" alt="Product Image" />
          <div>
            <div style="display:flex">
              <h3>{{ item.name }}</h3>
              <h3 style="margin-left:200px"> ${{ item.price }}.00</h3>
            </div>
            <input class="inputcart" type="number" v-model.number="item.quantity" min="1"/>
            <div style="display:flex">
              <p style="margin-left:30px">quantity: {{ item.quantity }}</p>
              <button class="remove" @click="removeFromCart(index)">Remove</button>
            </div>
            <hr style="width: 100%;">
          </div>
        </div>
      </div>
      <div style="display:flex">
        <p>Subtotal:</p>
        <p style="margin-left:400px"> ${{ subtotal }}.00</p>
      </div>
      <p v-if="message" class="success-message">{{ message }}</p>
      <hr>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
const products = ref([]);
const cart = ref([]);
const message = ref('');

const subtotal = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0);
});

async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:3000/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    products.value = data; // Assuming your API returns an array of products directly
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

async function addToCart(index) {
  const product = products.value[index];
  if (product.quantity > 0) {
    const cartItem = cart.value.find(item => item.id === product.id);
    if (cartItem) {
      cartItem.quantity += product.quantity; // Increase quantity in cart
    } else {
      cart.value.push({ ...product, quantity: product.quantity }); // Add new item to cart
    }
    
    // Reset the quantity of the product
    product.quantity = 0; 
    message.value = 'Product added to cart successfully!';
    
    const success = await updateCartOnAPI(cart.value);
    console.log("shsahd");
    
    if (!success) {
      message.value = 'Failed to update cart on the server.';
    }
    
    // Clear the success message after a few seconds
    setTimeout(() => {
      message.value = ''; 
    }, 3000);
  }
}

async function updateCartOnAPI(cartData) {
  try {
    const response = await axios.post('http://localhost:3000/cart', cartData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Optionally check the response body for confirmation
    console.log("Cart updated on server:", response.data);
    return true; // Indicate success
  } catch (error) {
    console.error('Error updating cart on API:', error);
    return false; // Indicate failure
  }
}

async function removeFromCart(index) {
  cart.value.splice(index, 1);
  message.value = 'Product removed from cart successfully!';
  
  // Update the cart on API after removal
  const success = await updateCartOnAPI(cart.value);
  if (!success) {
    message.value = 'Failed to update cart on the server.';
  }
}

// Fetch products when the component is mounted
onMounted(fetchProducts);
</script>

<style>
.container {
  display: flex;
}
.product-list,
.shopping-cart {
  width: 50%;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
.product-item,
.cart-item {
  margin-bottom: 15px;
}
.success-message {
  color: green;
}
input {
  width: 100px;
  padding: 4px;
  margin-left: 28px;
}
button {
  cursor: pointer;
  margin-left: 28px;
  margin-top: 15px;
  background-color: blue;
  color: white;
  border: none;
  width: 100px;
  border-radius: 5px;
  object-fit: contain;
  padding: 8px;
}
img {
  height: 100px;
  width: 100px;
}
.inputcart {
  width: 10%;
}
.remove {
  cursor: pointer;
  margin-left: 250px;
  margin-top: 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  object-fit: contain;
  padding: 0;
}
</style>
