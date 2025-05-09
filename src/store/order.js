import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrderStore = defineStore('order', () => {
  const orders = ref([]);

  const addOrder = (order) => {
    orders.value.push(order);
  };

  const clearOrders = () => {
    orders.value = [];
  };

  return {
    orders,
    addOrder,
    clearOrders,
  };
});


