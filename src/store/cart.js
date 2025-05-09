import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useOrderStore } from './order';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const loyaltyPoints = ref(Number(localStorage.getItem('loyaltyPoints')) || 0);
  const totalDiscount = ref(0);

  const addToCart = (item) => {
    const existing = cart.value.find(c => c.id === item.id);
    if (existing) {
      existing.quantity++;
    } else {
      cart.value.push({ ...item, quantity: 1 });
    }
  };

  const removeFromCart = (itemId) => {
    cart.value = cart.value.filter(item => item.id !== itemId);
  };
  
  const calculateTotal = () => {
    return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };
  
  const clearCart = () => {
    cart.value = [];
  };
  const checkout = () => {
    const orderStore = useOrderStore();
    const total = calculateTotal();

    if (cart.value.length === 0) {
      alert("🛒 Your cart is empty.");
      return;
    }

    const earnedPoints = Math.floor(total);
    loyaltyPoints.value += earnedPoints;
    localStorage.setItem('loyaltyPoints', loyaltyPoints.value);

    orderStore.addOrder({
      id: Date.now(),
      items: [...cart.value],
      total,
      date: new Date().toLocaleString(),
      delivery: "Processing"
    });

    clearCart();
    alert(`✅ Order placed! You've earned ${earnedPoints} points.`);
  };

  const redeemPoints = () => {
    if (loyaltyPoints.value >= 100) {
      totalDiscount.value = 5;
      loyaltyPoints.value -= 100;
      localStorage.setItem('loyaltyPoints', loyaltyPoints.value);
      return totalDiscount.value;
    } else {
      return 0;
    }
  };

  return {
    cart,
    loyaltyPoints,
    totalDiscount,
    addToCart,
    removeFromCart,
    clearCart,
    calculateTotal,
    checkout,
    redeemPoints,
  };
});
