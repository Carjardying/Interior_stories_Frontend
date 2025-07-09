<template>
    <div class="bg-light-beige-100">
        <div class="min-h-screen flex flex-col">
            <Header></Header>
            <main class="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pb-8 sm:pb-12 md:pb-16">
                <h1
                    class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-heading text-dark-aubergine-800 mb-6 sm:mb-8">
                    My cart
                </h1>
                <div class="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
                    <div class="w-full lg:w-1/2">
                        <hr class="h-px mb-6 sm:mb-8 bg-dark-beige-400 border-0">
                        <h2 class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800 mb-6 sm:mb-8">
                            PRODUCTS
                        </h2>
                        <div class="space-y-6 sm:space-y-8">
                            <CartItem 
                                v-for="order in orderList" 
                                :furnitureId ="order.id" 
                                :name="order.name"
                                :price="parseInt(order.price).toFixed(2)" 
                                :image="order.image"
                                :alt="order.alt"
                                @item-removed="loadOrders" />
                        </div>
                    </div>
                    <div class="w-full lg:flex-1 flex justify-start lg:justify-end">
                        <div class="w-full sm:max-w-md lg:w-80 xl:w-96 2xl:w-[28rem]">
                            <div class="outline-solid outline-1 outline-dark-beige-400 p-4 sm:p-6 mb-4 sm:mb-6">
                                <div class="flex justify-between items-center mb-3 sm:mb-4">
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        Order Value
                                    </span>
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        EUR {{ amountFurnitures.toFixed(2) }}
                                    </span>
                                </div>
                                <div class="flex justify-between items-center mb-3 sm:mb-4">
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        Delivery
                                    </span>
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        EUR {{ deliveryFees.toFixed(2) }}
                                    </span>
                                </div>
                                <hr class="h-px my-3 sm:my-4 bg-dark-beige-400 border-0">
                                <div class="flex justify-between items-center">
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        TOTAL
                                    </span>
                                    <span class="text-base sm:text-lg md:text-xl font-body text-dark-aubergine-800">
                                        EUR {{ amountTotal.toFixed(2) }}
                                    </span>
                                </div>
                            </div>
                            <button
                                class="w-full bg-dark-aubergine-800 hover:bg-dark-brown-800 px-6 sm:px-12 lg:px-20 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-body text-medium-beige-300 mb-4 sm:mb-6 cursor-pointer transition-colors duration-200"
                                @click="checkout">
                                Checkout
                            </button>
                            <!-- Backdrop + Modal -->
                            <div v-if="open"@click.self="closeModal"
                                class="fixed inset-0 w-screen h-screen bg-medium-beige-300/50 backdrop flex items-center justify-center z-50 min-h-screen min-w-full">
                                <!-- Modal box -->
                                <div ref="modal"
                                    class="modal w-4xl size-90 p-20 place-content-evenly bg-off-white-50 shadow-lg flex flex-col items-center space-y-4"
                                    role="dialog" aria-modal="true" aria-labelledby="modal-title"
                                    aria-describedby="modal-description"> 
                                    <span class="font-heading text-dark-aubergine-800 text-4xl">Your order has been placed!</span>
                                    
                                    <RouterLink to="/home" @click="closeModal"
                                            class="bg-dark-brown-800 text-medium-beige-300 px-4 py-2 font-body hover:bg-dark-aubergine-800 transition-colors duration-200">
                                            Back to homepage
                                    </RouterLink>
                                </div>
                            </div>

                            <div class="text-left sm:text-justify">
                                <router-link to="/catalogue"
                                    class="text-sm sm:text-base md:text-lg font-body text-dark-aubergine-800 underline underline-offset-2 sm:underline-offset-3 inline-flex items-center gap-2 hover:text-dark-brown-800 transition-colors duration-200">
                                    Continue shopping
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
        <Footer></Footer>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CartItem from '../components/CartItem.vue';
import Home from '../pages/Home.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { useAuthStore } from '../stores/auth';

const orderList = ref([]);
const authStore = useAuthStore();
let open = ref(false);

let amountFurnitures = ref(0);
let amountTotal = ref(0);
let deliveryFees = 80;

function loadOrders(){
  fetch("http://localhost:8000/api/orders", {
    method: 'GET',
    headers: { Authorization: `Bearer ${authStore.token}` }
    })
  .then(response => response.json())
  .then(data => {
    orderList.value = data;

    amountFurnitures.value = 0;
    amountTotal = 0;

    orderList.value.forEach((elem) => {
    amountFurnitures.value += Number(elem.price)
    })

    amountTotal = amountFurnitures.value + deliveryFees;
  })
  .catch(error => {
    console.log(error);
  });
}

onMounted(() => {
    loadOrders();
})

function checkout() {
    fetch("http://localhost:8000/api/orders", {
        method: 'PUT',
        headers: { Authorization: `Bearer ${authStore.token}` }
    })
        .then(() => {
            loadOrders()
            open.value = true
        })
}

function closeModal() {
    open.value = false
    router.push('/home');
}
</script>