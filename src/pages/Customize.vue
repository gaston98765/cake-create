<template>
  <v-container class="customize-page" fluid>
    <h1 class="text-center mb-6">🎨 Customize Your Cake</h1>

    <v-row dense>
      <!-- Left: Form Inputs -->
      <v-col cols="12" md="6">
        <v-card class="pa-4" variant="elevated">
          <v-select
            v-model="selectedSize"
            :items="sizes"
            label="Choose Size"
            variant="outlined"
            class="mb-4"
          />

          <v-select
            v-model="selectedFlavor"
            :items="flavors"
            label="Choose Flavor"
            variant="outlined"
            class="mb-4"
          />

          <v-select
            v-model="selectedFilling"
            :items="fillings"
            label="Choose Filling"
            variant="outlined"
            class="mb-4"
          />

          <v-select
            v-model="selectedDecoration"
            :items="decorations"
            label="Choose Decoration"
            variant="outlined"
            class="mb-4"
          />

          <v-btn color="primary" block @click="confirmCustomization">
            ✅ Confirm Selection
          </v-btn>
        </v-card>
      </v-col>

     <!-- Right: Preview -->
<v-col cols="12" md="6">
  <v-card class="pa-4 text-center" variant="elevated">
    <h3 class="mb-3">🎂 Live Preview</h3>

    <img :src="previewImage" alt="Cake Preview" class="cake-preview mb-4" />

    <!-- 🧪 Debug path -->
    <p style="font-size: 12px; color: gray">
      Image path: {{ previewImage }}
    </p>
    


    <p>
      <strong>Size:</strong> {{ selectedSize || '—' }} <br />
      <strong>Flavor:</strong> {{ selectedFlavor || '—' }} <br />
      <strong>Filling:</strong> {{ selectedFilling || '—' }} <br />
      <strong>Decoration:</strong> {{ selectedDecoration || '—' }}
    </p>
  </v-card>
</v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';

const sizes = ['Small', 'Medium', 'Large'];
const flavors = ['Vanilla', 'Chocolate', 'Red Velvet', 'Strawberry'];
const fillings = ['Cream Cheese', 'Buttercream', 'Strawberry Jam', 'Nutella'];
const decorations = ['Sprinkles', 'Fruit Topping', 'Chocolate Drizzle', 'Fondant Flowers'];

const selectedSize = ref('');
const selectedFlavor = ref('');
const selectedFilling = ref('');
const selectedDecoration = ref('');

const previewImage = computed(() => {
  const flavor = selectedFlavor.value?.toLowerCase().replace(/\s+/g, '');
  const size = selectedSize.value?.toLowerCase().replace(/\s+/g, '');
  const filling = selectedFilling.value?.toLowerCase().replace(/\s+/g, '');
  const topping = selectedDecoration.value?.toLowerCase().replace(/\s+/g, '');

  if (!flavor || !size || !filling || !topping) {
    return new URL('@/assets/cakes/cake-default.png', import.meta.url).href;
  }

  const filename = `cake-${flavor}-${size}-${filling}-${topping}.png`;

  try {
    return new URL(`@/assets/cakes/${filename}`, import.meta.url).href;
  } catch (err) {
    console.warn(`❌ Image not found: ${filename}`);
    return new URL('@/assets/cakes/cake-default.png', import.meta.url).href;
  }
});




const confirmCustomization = () => {
  if (
    !selectedSize.value ||
    !selectedFlavor.value ||
    !selectedFilling.value ||
    !selectedDecoration.value
  ) {
    alert('⚠️ Please select all cake options before confirming.');
    return;
  }

  const flavor = selectedFlavor.value.toLowerCase().replace(/\s+/g, '');
  const size = selectedSize.value.toLowerCase().replace(/\s+/g, '');
  const filling = selectedFilling.value.toLowerCase().replace(/\s+/g, '');
  const topping = selectedDecoration.value.toLowerCase().replace(/\s+/g, '');

  const imageName = `cake-${flavor}-${size}-${filling}-${topping}.png`;
  const imagePath = new URL(`@/assets/cakes/${imageName}`, import.meta.url).href;

  const customCake = {
    flavor: selectedFlavor.value,
    size: selectedSize.value,
    filling: selectedFilling.value,
    topping: selectedDecoration.value,
    image: imagePath,
  };

  localStorage.setItem('customCake', JSON.stringify(customCake));

  alert(`🎉 Your custom cake is set!`);
};


</script>


<style scoped>
.cake-preview {
  width: 200px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}
.cake-preview:hover {
  transform: scale(1.05);
}
</style>
