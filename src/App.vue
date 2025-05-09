<template>
  <v-app>
    <!-- 🌗 Dark/Light Toggle Button -->
    <ThemeToggle />

    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo">Cake & Create</div>

      <ul class="nav-links">
        <li><router-link to="/">🏠 Home</router-link></li>
        <li><router-link to="/customizecake">🎨 Customize Cake</router-link></li>
        <li><router-link to="/pre-made-cakes">🍰 Pre-Made Cakes</router-link></li>
        <li><router-link to="/About">📖 About us</router-link></li>
        <li><router-link to="/contact">📩 Contact</router-link></li>
      </ul>

      <div class="nav-icons">
        <router-link to="/Myaccount">👤 My Account</router-link>
        <router-link to="/Cart">🛒 Cart</router-link>
      </div>
    </nav>

    <!-- Page content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue';


</script>

<style>
body, html, #app {
  margin: 0;
  padding: 0;
  background-color: var(--v-theme-background);
  color: var(--v-theme-on-background);
  transition: background-color 0.5s ease, color 0.5s ease;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: var(--v-theme-surface);
  color: var(--v-theme-on-surface);
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: background-color 0.5s ease, color 0.5s ease;
}

.nav-links,
.nav-icons {
  display: flex;
  gap: 16px;
  align-items: center;
}

.nav-links li {
  list-style: none;
}

.nav-links a,
.nav-icons a {
  text-decoration: none;
  font-weight: bold;
  color: var(--v-theme-on-surface);
  transition: color 0.5s ease;
}

.nav-links a:hover,
.nav-icons a:hover {
  color: var(--v-theme-primary);
}

.theme-toggle {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 9999;
}
</style>


      
      
  