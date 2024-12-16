<template>
    <header class="head container-fluid py-4">
        <div class="d-flex justify-content-between align-items-center mx-5">
            <img src="../../assets/images/logo.svg" alt="">
            <navigation-bar></navigation-bar>
            <signup-menu></signup-menu>
        </div>    
        <h1 class="h1">Pizza Order</h1>
    </header>
</template>

<style>
    .head {
        background-image: url('../../assets/images/hero.png'); /* Ganti dengan path gambar */
        background-size: cover; /* Membuat gambar menutupi seluruh area */
        background-position: center; /* Memastikan gambar tetap di tengah */
        height: 77vh; /* Membuat header memenuhi tinggi layar */
        color: white;
    }
    .h1 {
        text-align: center;
        margin-top: 150px;
        font-size: 80px;
        color: orange;
    }
</style>

<script setup>
import NavigationBar from "../header/NavigationBar.vue";
import SignupMenu from "./SignupMenu.vue";
</script>
