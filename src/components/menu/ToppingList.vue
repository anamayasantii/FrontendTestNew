<template>
  <div class="container py-4">
    <p>Topping</p>
    <div class="row gy-3">
      <!-- Iterasi topping -->
      <div
        class="col-6 col-md-4 col-lg-2"
        v-for="topping in toppings"
        :key="topping.id"
      >
        <label class="topping-item w-100 text-center">
          <input
            type="checkbox"
            :value="topping"
            v-model="selectedToppings"
            :disabled="!availableToppings.includes(topping.id)"
            class="hidden-input"
          /><!-- Disabled jika tidak tersedia -->
          <span
            class="topping-label d-block"
            :class="{
              selected: selectedToppings.includes(topping),
              disabled: !availableToppings.includes(topping.id),
            }"
            ><!-- Tambahkan kelas untuk topping yang tidak tersedia -->
            {{ topping.name }}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const toppings = store.state.pizza.toppings;

// Ubah menjadi array untuk mendukung banyak pilihan
const selectedToppings = ref([]);

// Ambil topping yang tersedia dari Vuex
const availableToppings = computed(() => store.state.pizza.availableToppings);

watch(
  () => selectedToppings.value,
  (newToppings) => {
    store.commit("pizza/setSelectedToppings", newToppings);
  },
  { deep: true }
);
</script>

<style scoped>
.hidden-input {
  display: none;
}

.topping-label {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 50px;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.topping-label:hover {
  background-color: orange;
  border-color: orange;
}

.topping-label.selected {
  background-color: orange;
  border-color: orange;
  color: white;
}

.topping-label.disabled {
  background-color: #e0e0e0;
  border-color: #b3b3b3;
  color: #999;
  cursor: not-allowed; /* Berikan efek tidak bisa diklik */
}
</style>
