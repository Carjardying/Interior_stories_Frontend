<template>
    <!-- Main container: Uses light beige background with responsive design -->
    <div class="bg-light-beige-100">
        <!-- Main Page Content: Full screen height with flex column layout -->
        <div class="min-h-screen flex flex-col">
            <!-- Header: Header component -->
            <Header></Header>

            <!-- Main Content: Flexible main area with responsive padding -->
            <main class="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pb-8 sm:pb-12 md:pb-16">
                <!-- Page Title: Large responsive heading with responsive margins -->
                <h1
                    class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-heading text-dark-aubergine-800 mb-6 sm:mb-8">
                    My cart
                </h1>

                <!-- Layout container: Responsive layout that stacks on mobile, side-by-side on desktop -->
                <div class="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">

                    <!-- Left side: Products section taking full width on mobile, half on desktop -->
                    <div class="w-full lg:w-1/2">
                        <!-- Horizontal rule: Responsive thickness and margin -->
                        <hr class="h-px mb-6 sm:mb-8 bg-dark-beige-400 border-0">

                        <!-- Products section title: Responsive typography -->
                        <h2 class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800 mb-6 sm:mb-8">
                            PRODUCTS
                        </h2>

                        <!-- Product List: Responsive spacing between items -->
                        <div class="space-y-6 sm:space-y-8">
                            <!-- Product 1: CartItem component for first product -->
                            <CartItem :product="cartItems[0]" />

                            <!-- Product 2: CartItem component for second product -->
                            <CartItem :product="cartItems[1]" />
                        </div>
                    </div>

                    <!-- Right side: Order summary section with responsive positioning -->
                    <div class="w-full lg:flex-1 flex justify-start lg:justify-end">
                        <!-- Order summary container: Responsive width and max-width constraints -->
                        <div class="w-full sm:max-w-md lg:w-80 xl:w-96 2xl:w-[28rem]">

                            <!-- Order Summary: Bordered container with responsive padding -->
                            <div class="outline-solid outline-1 outline-dark-beige-400 p-4 sm:p-6 mb-4 sm:mb-6">

                                <!-- Order Value row: Flex layout with responsive text sizing -->
                                <div class="flex justify-between items-center mb-3 sm:mb-4">
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        Order Value
                                    </span>
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        EUR 6500,00
                                    </span>
                                </div>

                                <!-- Delivery row: Flex layout with responsive text sizing -->
                                <div class="flex justify-between items-center mb-3 sm:mb-4">
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        Delivery
                                    </span>
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        EUR 80,00
                                    </span>
                                </div>

                                <!-- Divider: Horizontal rule with responsive margins -->
                                <hr class="h-px my-3 sm:my-4 bg-dark-beige-400 border-0">

                                <!-- Total row: Final calculation with responsive text sizing -->
                                <div class="flex justify-between items-center">
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        TOTAL
                                    </span>
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        EUR 6580,00
                                    </span>
                                </div>
                            </div>

                            <!-- Checkout Button: Full width with responsive padding and text -->
                            <button
                                class="w-full bg-dark-aubergine-800 hover:bg-dark-brown-800 px-6 sm:px-12 lg:px-20 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-body text-medium-beige-300 mb-4 sm:mb-6 cursor-pointer transition-colors duration-200">
                                Checkout
                            </button>

                            <!-- Continue Shopping Link: Responsive text with icon -->
                            <div class="text-left sm:text-justify">
                                <router-link to="/catalogue"
                                    class="text-sm sm:text-base md:text-lg font-body text-dark-aubergine-800 underline underline-offset-2 sm:underline-offset-3 inline-flex items-center gap-2 hover:text-dark-brown-800 transition-colors duration-200">
                                    Continue shopping
                                    <!-- Arrow icon: Responsive sizing -->
                                    <img src="../assets/images/icons/arrow_dark_icon.png"
                                        alt="Arrow dark version redirecting to catalogue"
                                        class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <!-- Footer Component: Appears after main content -->
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