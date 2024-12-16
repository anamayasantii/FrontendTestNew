<template>
  <div class="container-lg py-5">
    <div class="row gx-5">
      <!-- Kolom kiri: Pilihan Pizza dan Custom Pizza -->
      <div class="col-lg-8">
        <!-- Pilihan Pizza -->
        <div class="mb-5">
          <h2 class="title">Choose your pizza</h2>
          <pizza-list></pizza-list>
        </div>

        <!-- Custom Pizza -->
        <div>
          <h2 class="title">Custom pizza</h2>
          <size-list></size-list>
          <topping-list></topping-list>
        </div>
      </div>

      <!-- Kolom kanan: Payment Summary -->
      <div class="col-lg-4">
        <payment></payment>
      </div>
    </div>
  </div>
</template>

<script setup>
import PizzaList from "../menu/PizzaList.vue";
import SizeList from "../menu/SizeList.vue";
import ToppingList from "../menu/ToppingList.vue";
import Payment from "../menu/Payment.vue";
</script>

<style scoped>
.title {
  color: orange;
}

.text-orange {
  color: orange;
}

.btn-orange {
  background-color: orange;
  color: white;
  border: none;
}

.btn-orange:hover {
  background-color: darkorange;
}

.payment-summary {
  border-radius: 10px;
  background-color: #fff;
}
</style>
