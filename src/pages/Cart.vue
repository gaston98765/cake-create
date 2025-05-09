<template>
  <div class="cart-checkout-page">
    <h1>🛒 Your Cart</h1>

    <div v-if="cartStore.cart.length > 0">
      <ul>
        <li v-for="item in cartStore.cart" :key="item.id">
          🍰 {{ item.name }} (x{{ item.quantity }}) - ${{ item.price * item.quantity }}
          <button class="remove-btn" @click="cartStore.removeFromCart(item.id)">❌</button>
        </li>
      </ul>

      <h2>🚚 Delivery Options</h2>
      <label>
        <input type="radio" v-model="deliveryOption" value="delivery" />
        Home Delivery (Estimated: {{ estimatedDelivery }})
      </label>
      <label>
        <input type="radio" v-model="deliveryOption" value="pickup" />
        Pickup from Store
      </label>

      <h2>Total: ${{ cartStore.calculateTotal() }}</h2>

      <button class="btn btn-primary" @click="completeOrder">Place Order</button>
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useCartStore } from '@/store/cart';
import { useOrderStore } from '@/store/order';
import '@/styles/cart.css';

const cartStore = useCartStore();
const orderStore = useOrderStore();

const deliveryOption = ref("delivery");
const estimatedDelivery = "30-45 mins";




const router = useRouter();
const user = ref(JSON.parse(localStorage.getItem('user')) || null);

const completeOrder = () => {
  if (!user.value) {
    alert("🔐 You must be logged in to place an order.");
    router.push("/login");
    return;
  }

  const total = cartStore.calculateTotal();

  if (cartStore.cart.length > 0) {
    // Add order to store
    orderStore.addOrder({
      id: Date.now(),
      items: [...cartStore.cart],
      total,
      date: new Date().toLocaleString(),
      delivery: deliveryOption.value === "delivery" ? "Home Delivery" : "Store Pickup"
    });

    // Loyalty Points + Save
    const earnedPoints = Math.floor(total);
    cartStore.loyaltyPoints += earnedPoints;
    localStorage.setItem('loyaltyPoints', cartStore.loyaltyPoints);

    // Clear cart
    cartStore.clearCart();
    alert(`🎉 Order placed successfully! You earned ${earnedPoints} points.`);
  }
};

</script>

