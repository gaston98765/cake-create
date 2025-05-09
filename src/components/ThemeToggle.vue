<!-- src/components/ThemeToggle.vue -->
<template>
    <v-btn icon class="theme-toggle" @click="toggleTheme" elevation="2">
      <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue'
  import { useTheme } from 'vuetify'
  
  const theme = useTheme()
  
  // Computed to check current theme
  const isDark = computed(() => theme.global.name.value === 'dark')
  
  // Toggle function with localStorage
  const toggleTheme = () => {
    const newTheme = isDark.value ? 'light' : 'dark'
    theme.global.name.value = newTheme
    localStorage.setItem('preferredTheme', newTheme)
  }
  
  // On mount: load stored theme
  onMounted(() => {
    const storedTheme = localStorage.getItem('preferredTheme')
    if (storedTheme && storedTheme !== theme.global.name.value) {
      theme.global.name.value = storedTheme
    }
  })
  </script>
  
  <style scoped>
  .theme-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    background-color: var(--v-theme-surface);
    color: var(--v-theme-on-surface);
    transition: background-color 0.5s ease, color 0.5s ease;
  }
  </style>
  
  