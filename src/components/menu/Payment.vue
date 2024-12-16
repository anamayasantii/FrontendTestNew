<template>
  <div class="payment-summary card shadow p-4">
    <h5 class="text-orange">Payment Summary</h5>
    <ul class="list-unstyled">
      <!-- Tampilkan nama pizza dan harga -->
      <li v-if="selectedPizza">
        <strong>{{ selectedPizza.name }}</strong>
        <span class="float-end">
          ${{ selectedPizza.discount.is_active ? selectedPizza.discount.final_price : selectedPizza.price }}
        </span>
      </li>

      <!-- Tampilkan ukuran yang dipilih dan harga tambahan -->
      <li v-if="selectedSize">
        <strong>Size - {{ selectedSize.name }}</strong>
        <span class="float-end"> ${{ selectedSize.extra_price }} </span>
      </li>

      <!-- Tampilkan topping yang dipilih -->
      <li v-for="topping in selectedToppings" :key="topping.id">
        <strong>{{ topping.name }}</strong>
        <span class="float-end"> ${{ topping.price }} </span>
      </li>
    </ul>

    <hr />

    <!-- Tampilkan Total Harga -->
    <div class="d-flex justify-content-between">
      <strong>Total Price</strong>
      <strong class="text-orange">${{ totalPrice }}</strong>
    </div>

    <!-- Tombol Order Now -->
    <button class="btn btn-orange w-100 mt-3" @click="processOrder"
    :disabled="!hasOrders">Order Now</button>

    <!-- Modal order -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <img src="../../assets/images/modal.png" alt="">
        <h5>Order Success</h5>
        <p>Thank you, we have received your order successfully.</p>
        <button class="btn btn-orange w-50 m-auto" @click="confirmOrder">OK</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const showModal = ref(false);

// Ambil data yang diperlukan dari Vuex
const selectedPizza = computed(() => {
  const selectedId = store.state.pizza.selectedPizzaId;
  return store.state.pizza.pizzas.find((pizza) => pizza.id === selectedId);
});

const selectedSize = computed(() => store.state.pizza.selectedSize);
const selectedToppings = computed(() => store.state.pizza.selectedToppings);

// Hitung harga total
const totalPrice = computed(() => {
  let basePrice = selectedPizza.value
    ? selectedPizza.value.discount.is_active
      ? selectedPizza.value.discount.final_price
      : selectedPizza.value.price
    : 0;

  let sizePrice = selectedSize.value ? selectedSize.value.extra_price : 0;

  // Pastikan selectedToppings.value adalah array
  let toppingsPrice = Array.isArray(selectedToppings.value)
    ? selectedToppings.value.reduce((sum, topping) => sum + topping.price, 0)
    : 0;

  return basePrice + sizePrice + toppingsPrice;
});

function processOrder() {
  showModal.value = true;
}

const resetSelection = () => {
  store.commit('pizza/resetSelection');
}

function confirmOrder() {
  resetSelection();
  showModal.value = false;

  // Debugging log
  console.log("Selected Pizza:", selectedPizza.value);
  console.log("Selected Size:", selectedSize.value);
  console.log("Selected Toppings:", selectedToppings.value);
}

const hasOrders = computed(() => store.state.pizza.selectedPizzaId);
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}

.modal-content img {
  width: 30%;
  margin: auto;
}
</style>
