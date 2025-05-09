<template>
  <div class="about-page">
    <h1>🍰 The Story of Cake & Create</h1>
    <p class="subtitle">A journey through sweet flavors and passion</p>

    <div class="about-content " >
      <img src="@/assets/cake-history.jpg" alt="Cake History" class="about-image">
      <p>
        Cake & Create was founded in a small, cozy bakery in Tunis in the early 2000s. 
        It all started when a passionate pastry chef, <strong>Marie Leclair</strong>, 
        dreamed of creating cakes that weren’t just delicious but also works of art. 
        She believed that every celebration deserved a unique, handcrafted cake.
      </p>

      <p>
        Over the years, Marie’s passion turned into a thriving business. 
        With a team of skilled bakers and decorators, Cake & Create became known for its 
        <em>luxurious wedding cakes, fun birthday cupcakes, and traditional French pastries</em>. 
        Every cake is made with love, using only the finest ingredients.
      </p>

      <h2>🎂 Our Specialties</h2>
      <ul>
        <li>Elegant Wedding Cakes</li>
        <li>Fun & Playful Cupcakes</li>
        <li>Traditional French Pastries</li>
        <li>Custom Cakes for Any Occasion</li>
      </ul>

      <p>
        Whether you're celebrating a birthday, a wedding, or simply want a slice of happiness, 
        Cake & Create is here to make your moments sweeter. 
        <strong>Thank you for being part of our journey!</strong> 💕
      </p>
    </div>

    <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
      <div class="d-flex ga-3">
        <v-btn
          v-for="item in icons"
          :key="item.icon"
          :icon="item.icon"
          :href="item.link"
          target="_blank"
          rel="noopener"
          density="comfortable"
          variant="text"
        />
      </div>


      <v-divider class="my-2" thickness="2" width="50"></v-divider>
      <div class="text-caption font-weight-regular opacity-60">
        Cake & Create is your one-stop shop for custom cakes, delightful pastries, and creative confections.  
        Every cake is handcrafted with love, using the finest ingredients to bring joy to your special moments.  
        Whether it's a birthday, wedding, or just a sweet craving, we’re here to make it extra special!  
        <br><br>  
        Follow us on social media for the latest cake designs, baking tips, and exclusive offers! 🎂✨
      </div>


      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>Cake & Create</strong>
      </div>
    </v-footer>
  </div>
</template>

<script setup>
import '@/styles/about.css';

const icons = [
  { icon: 'mdi-facebook', link: 'https://www.facebook.com/' },
  { icon: 'mdi-twitter', link: 'https://twitter.com/' },
  { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/' },
  { icon: 'mdi-instagram', link: 'https://www.instagram.com/' },
];



</script>


  