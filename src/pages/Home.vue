<template>
  <div class="home-container">
  <header class="hero">
    <div class="hero-content">
      <h1>Yummy sweeties delivered to your dining table!</h1>
      <p>Explore our creations</p>
  
        <div class="hero-buttons">
          <router-link to="/pre-made-cakes" class="btn btn-red">Order Now</router-link>
      <router-link to="/About" class="btn btn-secondary">Read More</router-link>
    </div>

  
    </div>
    <div class="hero-image">
      <img :src="muffins" alt="Cake">
    </div>
  </header>

  
  <div class="specials-section">
    <h2>🎂 This Week’s Specials</h2>

    <div class="product-grid">
      <div v-for="cake in cakes" :key="cake.id" class="product-card bg-surface">
        <img :src="cake.image" :alt="cake.name" class="product-image">
        
        <div class="product-info">
          <div class="product-details">
            <h3>{{ cake.name }}</h3>
            
          </div>
          <span class="price">${{ cake.price }}</span>
        </div>

        <button class="add-to-cart" @click="addToCart(cake)">Add to cart</button>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>

import { useCartStore } from '@/store/cart'; 
import '@/styles/navbar.css';
import '@/styles/home.css';


const muffins = new URL('@/assets/muffins.png', import.meta.url).href;



//  Import images directly
import cake1 from '@/assets/cake1.png';
import cake2 from '@/assets/cake2.png';
import cake3 from '@/assets/cake3.png';
import cake4 from '@/assets/cake4.png';

const cartStore = useCartStore(); // Use the cart store

// Use imported images in the array
const cakes = [
  { id: 1, name: "Birthday Cream Milk Cake", price: 25, image: cake1 },
  { id: 2, name: "Strawberry Cream Cake", price: 20, image: cake2 },
  { id: 3, name: "Marriage Cake", price: 100, image: cake3 },
  { id: 4, name: "Chocolate Cake", price: 30, image: cake4 }
];

//  Function to add cake to cart
const addToCart = (cake) => {
  cartStore.addToCart(cake);
  alert(`${cake.name} added to cart!`);
};


</script>



