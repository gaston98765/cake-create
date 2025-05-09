<template>
  <div class="account-page">
    <h1>👤 My Account</h1>

    <p v-if="user">
      Welcome back, <strong>{{ user.username }}</strong>!
    </p>
    
    
    <div v-else>
      
      <p>Please log in to access your account.</p>
      <br>
      <router-link to="/login" class="btn btn-danger">🔐 Login</router-link>
    </div>

    <br />
    <h2>📦 Order History</h2>
    <div v-if="orderStore.orders.length > 0">
      <ul>
        <li v-for="order in orderStore.orders" :key="order.id">
          🛍️ Order #{{ order.id }} - {{ order.items.length }} items - ${{ order.total.toFixed(2) }}
          <br />📅 {{ order.date }} | 🚚 {{ order.delivery }}
        </li>
      </ul>
    </div>
    <p v-else>No orders yet.</p>

    <h2>🎉 Loyalty Points</h2>
    <p>You have <strong>{{ cartStore.loyaltyPoints }}</strong> points.</p>
    <p v-if="cartStore.totalDiscount > 0">Total discount applied: ${{ cartStore.totalDiscount }}</p>

    <button class="btn btn-danger" @click="logout" v-if="user">Logout</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/store/cart';
import { useOrderStore } from '@/store/order';
import '@/styles/myaccount.css';

const cartStore = useCartStore();
const orderStore = useOrderStore();
const user = ref(JSON.parse(localStorage.getItem('user')) || null);
const router = useRouter();

const logout = () => {
  cartStore.clearCart();
  cartStore.loyaltyPoints = 0;
  cartStore.totalDiscount = 0;
  orderStore.clearOrders();

  localStorage.removeItem('loyaltyPoints');
  localStorage.removeItem('user');

  alert('🔒 You have been logged out.');
  router.push('/login');
};

</script>

  
 
  

 

  
 
  
  
  
 
  
  
  

  
 
  