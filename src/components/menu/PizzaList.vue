<template>
  <div class="pizza__list-pizza">
    <div
      class="card shadow-sm position-relative"
      v-for="(pizza, index) in pizzas"
      :key="pizza.id"
      :class="{
        selected: selectedPizza === pizza.id, 
        hovered: hoveredPizza === pizza.id,
      }"
      @click="selectedPizza = pizza.id"
      @mouseover="hoveredPizza = pizza.id"
      @mouseleave="hoveredPizza = null"
    >
      <!-- Pita Offer hanya untuk Veggie Pizza -->
      <div v-if="index === 1" class="ribbon">
        <img src="../../assets/images/ribbon.svg" alt="Offer Ribbon" />
      </div>

      <!-- Kontainer horizontal untuk gambar dan deskripsi -->
      <div class="d-flex align-items-center">
        <img :src="pizzaImages[index]" alt="Pizza Image" class="card-img-top" />
        <div class="card-body">
          <h5 class="pizza-name">{{ pizza.name }}</h5>
          <p v-if="pizza.discount.is_active" class="old-price">
            ${{ pizza.price }}
          </p>
          <p :class="{ 'discounted-price': pizza.discount.is_active }">
            ${{ pizza.discount.final_price }}
          </p>
        </div>
      </div>

      <input
        type="radio"
        class="radio-input"
        :value="pizza.id"
        v-model="selectedPizza"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const pizzas = store.state.pizza.pizzas;

// Impor gambar pizza secara manual
import cheesePizzaImg from "../../assets/images/Cheese Pizza.png";
import veggiePizzaImg from "../../assets/images/Veggie Pizza.png";
import classicalPizzaImg from "../../assets/images/Classical Pizza.png";

// Peta ID pizza ke gambar
const pizzaImages = [cheesePizzaImg, veggiePizzaImg, classicalPizzaImg];

// State untuk hover dan selected
const hoveredPizza = ref(null);

// Gunakan computed untuk sinkronisasi dengan Vuex
const selectedPizza = computed({
  get: () => store.state.pizza.selectedPizzaId,
  set: (value) => {
    store.commit("pizza/setSelectedPizzaId", value);
    const selectedPizzaData = pizzas.find((pizza) => pizza.id === value);
    if (selectedPizzaData) {
      store.commit("pizza/setAvailableToppings", selectedPizzaData.toppings);
    }
  },
});
</script>


<style scoped>
/* Kontainer utama dengan scroll horizontal */
.pizza__list-pizza {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 10px;
}

/* Kartu pizza */
.card {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Warna teks berubah menjadi putih ketika hover atau terpilih */
.card.hovered .pizza-name,
.card.hovered .current-price,
.card.hovered .old-price,
.card.selected .pizza-name,
.card.selected .current-price,
.card.selected .old-price {
  color: white;
}

/* Warna latar belakang berubah menjadi oranye */
.card.hovered {
  background-color: orange;
  border-color: orange;
}

.card.selected {
  background-color: orange;
  border-color: orange;
}

/* Gambar pizza */
.card-img-top {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}

.card-img-top:hover {
  transition: transform 0.6s ease-in-out;
  transform: rotate(50deg);
}

/* Informasi pizza */
.card-body {
  flex: 1;
  margin-top: 10px;
}

.pizza-name {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #000;
}

.current-price {
  font-size: 16px;
  color: orange;
  margin-top: 5px;
}

.old-price {
  font-size: 14px;
  color: gray;
  text-decoration: line-through;
  margin: 0;
}

/* Radio input */
.radio-input {
  display: none;
}

.ribbon {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 90px;
}

.ribbon img {
  width: 100%;
  height: auto;
}
</style>
