<template>
  <div class="bg-light-beige-100 min-h-100">
    <Header></Header>
    <div>
      <h1 class="font-heading text-6xl  m-[2rem] text-dark-aubergine-800">
        Furnitures
      </h1>
    </div>
    <div class=" m-4">
      Furniture's Carts here. Will be replaced by cart.vue

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
         
        <div class="col-span-1  m-8">
          <div class="h-150 overflow-hidden">
            <img
              src="/src/assets/images/furnitures/soriana_sofa.PNG"
              alt="sofa soriana"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="font-body text-dark-aubergine-800">Sofa Soriana</div>
          <div class="font-body text-dark-aubergine-800">EUR 450,00</div>
          <div class="font-body bg-dark-aubergine-800 text-medium-beige-300">
            <RouterLink to="/cart">+ Add to cart</RouterLink>
          </div>
        </div>

        <FurnitureItem></FurnitureItem>
        
        <div class="col-span-1  m-8">
          <div class="h-150 overflow-hidden">
            <img
              src="/src/assets/images/furnitures/togo_sofa.PNG"
              alt="sofa Togo"
              class="w-full h-full object-cover"
  
            />
          </div>
          <div class="font-body text-dark-aubergine-800">Sofa Togo</div>
          <div class="font-body text-dark-aubergine-800">EUR 450,00</div>
          <div class="font-body bg-dark-aubergine-800 text-medium-beige-300">
            <RouterLink to="/cart">+ Add to cart</RouterLink>
          </div>
        </div>

        <div class="col-span-1  m-8">
          <div class="h-150 overflow-hidden">
            <img
              src="/src/assets/images/furnitures/eames_lounge_chair.PNG"
              alt="Eames Lounge Chair and Ottoman"
              class="w-full h-full object-cover"

            />
          </div>
          <div class="font-body text-dark-aubergine-800">Eames Lounge Chair and Ottoman</div>
          <div class="font-body text-dark-aubergine-800">EUR 4000,00</div>
          <div class="font-body bg-dark-aubergine-800 text-medium-beige-300">
            <RouterLink to="/cart">+ Add to cart</RouterLink>
          </div>
        </div>

      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import FurnitureItem from "../components/FurnitureItem.vue";
</script>
