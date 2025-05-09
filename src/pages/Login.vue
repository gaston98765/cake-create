<template>
    <div class="login-page">
      <h1>🔐 Login</h1>
      <form @submit.prevent="login">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import '@/styles/login.css'
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const login = () => {
    if (username.value && email.value && password.value) {
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify({
        username: username.value,
        email: email.value
      }));
      router.push('/MyAccount'); // Redirect to account
    } else {
      alert('Please fill in all fields');
    }
  };
  </script>
  