<template>
  <div class="size-list">
    <p>Size</p>
    <div class="size-options">
      <label v-for="(size, index) in sizes" :key="index" class="size-option">
        <input
          type="radio"
          :name="size.name"
          :value="size.name"
          v-model="selectedSize"
          :class="{ selected: selectedSize === size.name }"
        />
        <span :class="{ 'selected-text': selectedSize === size.name }">
          {{ size.name }} (+{{ size.extra_price }}$)
        </span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const sizes = store.state.pizza.sizes;

// Gunakan computed untuk sinkronisasi dengan Vuex
const selectedSize = computed({
  get: () => store.state.pizza.selectedSize?.name || null,
  set: (value) => {
    const selectedSizeData = sizes.find((size) => size.name === value);
    store.commit("pizza/setSelectedSize", selectedSizeData);
  },
});
</script>

<style scoped>
.size-list {
  font-family: Arial, sans-serif;
}

.size-options {
  display: flex;
  flex: 1;
  gap: 20px;
  text-align: center;
}

.size-option {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: gray;
}

.size-option input {
  margin-right: 10px;
  cursor: pointer;
}

.size-option input:checked {
  accent-color: orange; /* Ganti warna pilihan radio button */
}

.size-option input:focus {
  outline: none;
}
</style>
