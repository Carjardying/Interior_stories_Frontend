<template>
    <div style="background-color: #f9f1e9;">
        <!-- Main Page Content - Full Screen -->
        <div class="min-h-screen flex flex-col">
            <!-- Header -->
            <Header></Header>

            <!-- Main Content -->
            <main class="flex-1 pl-16 pr-16 pb-16">
                <!-- Page Title -->
                <h1 class="text-6xl font-heading text-dark-aubergine-800 mb-8">My cart</h1>

                <!-- Layout container to align HR and checkout section -->
                <div class="flex gap-16">
                    <!-- Left side with HR -->
                    <div class="w-1/2">
                        <hr class="h-px mb-8 bg-dark-beige-400 border-0">

                        <!-- Products section -->
                        <h2 class="text-lg font-body text-dark-aubergine-800 mb-8">PRODUCTS</h2>

                        <!-- Product List -->
                        <div class="space-y-8">
                            <!-- Product 1 -->
                            <CartItem :product="cartItems[0]" />

                            <!-- Product 2 -->
                            <CartItem :product="cartItems[1]" />
                        </div>
                    </div>

                    <!-- Right side - Order Summary aligned with HR -->
                    <div class="flex-1 flex justify-end">
                        <div class="w-80">
                            <!-- Order Summary -->
                            <div class="outline-solid outline-1 outline-dark-beige-400 p-6 mb-6">
                                <div class="flex justify-between items-center mb-4">
                                    <span class="text-lg font-body text-dark-aubergine-800">Order Value</span>
                                    <span class="text-lg font-body text-dark-aubergine-800">EUR 6500,00</span>
                                </div>
                                <div class="flex justify-between items-center mb-4">
                                    <span class="text-lg font-body text-dark-aubergine-800">Delivery</span>
                                    <span class="text-lg font-body text-dark-aubergine-800">EUR 80,00</span>
                                </div>
                                <hr class="h-px my-4 bg-dark-beige-400 border-0">
                                <div class="flex justify-between items-center">
                                    <span class="text-lg font-body text-dark-aubergine-800">TOTAL</span>
                                    <span class="text-lg font-body text-dark-aubergine-800">EUR 6580,00</span>
                                </div>
                            </div>

                            <!-- Checkout Button -->
                            <button
                                class="w-full bg-dark-aubergine-800 px-20 py-4 text-lg font-body text-medium-beige-300 mb-6 cursor-pointer">Checkout</button>

                            <!-- Continue Shopping Link -->
                            <div class="text-justify">
                                <router-link to="/catalogue"
                                    class="text-base font-body text-dark-aubergine-800 underline underline-offset-3 inline-flex items-center gap-2">
                                    Continue shopping
                                    <img src="../assets/images/icons/arrow_dark_icon.png"
                                        alt="Arrow dark version redirecting to catalogue" class="w-6 h-6" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <!-- Footer Component -->
        <Footer></Footer>
    </div>
</template>

<script setup>
import { ref, } from 'vue'
import CartItem from '../components/CartItem.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// Import images
import eamesChair from '../assets/images/furnitures/eames_lounge_chair.PNG'
import wassilyChair from '../assets/images/furnitures/wassily_chair.jpg'

// Cart data with imported images
const cartItems = ref([
    {
        id: 1,
        name: 'Eames Lounge Chair and Ottoman',
        price: 4000.00,
        image: eamesChair
    },
    {
        id: 2,
        name: 'Wassily Chair',
        price: 2500.00,
        image: wassilyChair
    }
])
</script>