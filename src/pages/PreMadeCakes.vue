<template>
    <div class="pre-made-container">
      <h1>🍰 Our Pre-Made Cakes</h1>
      <p>Browse our signature cakes and choose your favorite!</p>
  
      <!--  Category Filter -->
      <div class="category-filter">
        <button v-for="category in categories" :key="category"
        @click="handleCategoryClick(category)"
        :class="{ active: selectedCategory === category }">
  {{ category }}
</button>

      </div>
  
      <!-- Cake Display Grid -->
      <div class="product-grid">
        <div v-for="cake in filteredCakes" :key="cake.id" class="product-card">
          <img :src="cake.image" :alt="cake.name" class="product-image">
          
          <div class="product-info">
            <h3>{{ cake.name }}</h3>
            <span class="price">${{ cake.price }}</span>
          </div>
          <!-- ⭐ Star Rating  -->
        <div class="star-rating">
          <span v-for="star in 5" :key="star" 
                @click="rateCake(cake.id, star)"
                :class="{ filled: star <= (ratings[cake.id] || 0) }">
            ★
          </span>
        </div>
  
          <button class="add-to-cart" @click="addToCart(cake)">Add to cart</button>
        </div>
      </div>

    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from "vue";
  import { useRouter } from "vue-router";

  import { useCartStore } from "@/store/cart";
  import '@/styles/premadecake.css';
  
  

  import BirthdayCake0 from '@/assets/birthdaycakes/BirthdayCake0.jpg';
  import BirthdayCake1 from '@/assets/birthdaycakes/BirthdayCake1.jpg';
  import BirthdayCake2 from '@/assets/birthdaycakes/BirthdayCake2.jpg';
  import BirthdayCake3 from '@/assets/birthdaycakes/BirthdayCake3.jpg';
  import BirthdayCake4 from '@/assets/birthdaycakes/BirthdayCake4.jpg';
  import BirthdayCake5 from '@/assets/birthdaycakes/BirthdayCake5.jpg';
  import BirthdayCake6 from '@/assets/birthdaycakes/BirthdayCake6.jpg';

  import Chocolatecake1 from '@/assets/choclatecakes/Chocolatecake1.jpg';
  import Chocolatecake2 from '@/assets/choclatecakes/Chocolatecake2.jpg';
  import Chocolatecake3 from '@/assets/choclatecakes/Chocolatecake3.jpg';
  import Chocolatecake4 from '@/assets/choclatecakes/Chocolatecake4.jpg';

  import Weddingcake0 from '@/assets/weddingcakes/Weddingcake0.jpg';
  import Weddingcake1 from '@/assets/weddingcakes/Weddingcake1.jpg';
  import Weddingcake2 from '@/assets/weddingcakes/Weddingcake2.jpg';
  import Weddingcake3 from '@/assets/weddingcakes/Weddingcake3.jpg';
  import Weddingcake4 from '@/assets/weddingcakes/Weddingcake4.jpg';

  import cupcake0 from '@/assets/cupcakes/cupcake0.jpg';
  import cupcake1 from '@/assets/cupcakes/cupcake1.jpg';
  import cupcake2 from '@/assets/cupcakes/cupcake2.jpg';
  import cupcake3 from '@/assets/cupcakes/cupcake3.jpg';
  import cupcake4 from '@/assets/cupcakes/cupcake4.jpg';
  import cupcake5 from '@/assets/cupcakes/cupcake5.jpg';
  import cupcake6 from '@/assets/cupcakes/cupcake6.jpg';

  
  const router = useRouter();
  const cartStore = useCartStore(); 
  
  // Define categories
  const categories = ref(["All", "Birthday Cakes", "Wedding Cakes", "Cupcakes", "Chocolate Cakes", "Custom Cakes"]);
  const selectedCategory = ref("All");
  // Persistent Star Ratings (Loaded from Local Storage)
  const savedRatings = JSON.parse(localStorage.getItem("cakeRatings") || "{}");
  const ratings = ref(savedRatings);

// Function to Save Ratings to Local Storage
  const saveRatings = () => {
    localStorage.setItem("cakeRatings", JSON.stringify(ratings.value));
  };


// Function to Rate a Cake
const rateCake = (cakeId, rating) => {
  ratings.value[cakeId] = rating;
  saveRatings(); // Save to local storage
};

// Watch for rating changes and save them persistently
watch(ratings, saveRatings, { deep: true });
  
  // Define cakes with categories
  const cakes = ref([
    { id: 1, name: "Vanilla Birthday Cake", price: 25, category: "Birthday Cakes", image: BirthdayCake0 },
    { id: 1.1, name: "Chocolate Birthday Cake", price: 25, category: "Birthday Cakes", image: BirthdayCake1 },
    { id: 1.2, name: "Dark chocolate Birthday Cake", price: 25, category: "Birthday Cakes", image: BirthdayCake2 },
    { id: 1.3, name: "Happy Birthday Cake", price: 25, category: "Birthday Cakes", image: BirthdayCake3 },
    { id: 1.4, name: "multy flavor Birthday Cake", price: 25, category: "Birthday Cakes", image: BirthdayCake4 },
    { id: 1.5, name: "Strawberry Birthday Cake", price: 25, category: "Birthday Cakes", image: BirthdayCake5 },
    { id: 1.6, name: "jellycat Birthday Cake", price: 25, category: "Birthday Cakes", image: BirthdayCake6 },
    
    { id: 2, name: "Chocolate skittles Cake", price: 30, category: "Chocolate Cakes", image: Chocolatecake1 },
    { id: 2.1, name: "Chocolate strawberry Cake", price: 30, category: "Chocolate Cakes", image: Chocolatecake2 },
    { id: 2.2, name: "All Chocolate Cake", price: 30, category: "Chocolate Cakes", image: Chocolatecake3 },
    { id: 2.3, name: "Dark Chocolate Cake", price: 30, category: "Chocolate Cakes", image: Chocolatecake4 },
    
    { id: 3, name: "Elegant Wedding Cake", price: 100, category: "Wedding Cakes", image: Weddingcake0 },
    { id: 3.1, name: "Elegant Wedding Cake", price: 100, category: "Wedding Cakes", image: Weddingcake1 },
    { id: 3.2, name: "Elegant Wedding Cake", price: 100, category: "Wedding Cakes", image: Weddingcake2 },
    { id: 3.3, name: "Elegant Wedding Cake", price: 100, category: "Wedding Cakes", image: Weddingcake3 },
    { id: 3.4, name: "Elegant Wedding Cake", price: 100, category: "Wedding Cakes", image: Weddingcake4 },

    { id: 4, name: "Standard Cupcake", price: 5, category: "Cupcakes", image: cupcake0 },
    { id: 4.1, name: "chocolate Cupcake", price: 5, category: "Cupcakes", image: cupcake1 },
    { id: 4.2, name: "Oreo Cupcake", price: 5, category: "Cupcakes", image: cupcake2 },
    { id: 4.3, name: "Strawberry Cupcake", price: 5, category: "Cupcakes", image: cupcake3 },
    { id: 4.4, name: "skittles Cupcake", price: 5, category: "Cupcakes", image: cupcake4 },
    { id: 4.5, name: "cherry Cupcake", price: 5, category: "Cupcakes", image: cupcake5 },
    { id: 4.6, name: "vanilla Cupcake", price: 5, category: "Cupcakes", image: cupcake6 },



  ]);
  
  // Filter cakes based on selected category
  const filteredCakes = computed(() => {
    if (selectedCategory.value === "All") return cakes.value;
    return cakes.value.filter(cake => cake.category === selectedCategory.value);
  });

  

const handleCategoryClick = (category) => {
  if (category === "Custom Cakes") {
    router.push("/customizecake"); //  Redirect to the Customize Cake page
  } else {
    selectedCategory.value = category; // Filter cakes normally for other categories
  }
};

  
  // Function to add cake to cart
  const addToCart = (cake) => {
    cartStore.addToCart(cake);
    alert(`${cake.name} added to cart!`);
  };
  </script>
  
 
  