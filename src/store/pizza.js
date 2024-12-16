//Mengimport data dari JSON
import pizzaData from "@/pizza-list.json";
import sizeData from "@/size-list.json";
import toppingData from "@/topping-list.json";

export default {
  namespaced: true,
  state() {
    return {
      //Menyimpan data pizza, ukuran, topping dan kesediaan toping.
      //Jika tidak ada data maka akan digunakan array kosong
      pizzas: pizzaData.data || [],
      sizes: sizeData.data || [],
      toppings: toppingData.data || [],
      availableToppings: [],
      selectedPizzaId: null,
      selectedSize: null,
    };
  },

  getters: {},

  mutations: {
    setPizzaData(state, payload) {
      state.pizzas = payload;
    },
    setSizeData(state, payload) {
      state.sizes = payload;
    },
    setToppingData(state, payload) {
      state.toppings = payload;
    },
    setAvailableToppings(state, toppingIds) {
      state.availableToppings = toppingIds;
    },
    setSelectedPizzaId(state, pizzaId) {
      state.selectedPizzaId = pizzaId;
    },
    setSelectedSize(state, size) {
      state.selectedSize = size;
    },
    setSelectedToppings(state, toppings) {
      state.selectedToppings = toppings;
    },
    resetSelection(state) {
      state.selectedPizzaId = null;
      state.selectedSize = null;
      state.selectedToppings = [];
      state.availableToppings = [];
    },
  },
};
