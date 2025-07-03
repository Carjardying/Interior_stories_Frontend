<template>
  <div class="bg-light-beige-100 h-dvh">
    <Header></Header>
    <div>
      <h1 class="font-heading text-6xl m-[2rem] text-dark-aubergine-800">
        Furnitures
      </h1>
    </div>
    <div>
      Furniture's Carts here
      <div>
        <div class="outline-solid m-8">
          <div>
            <img
              src="/src/assets/images/furnitures/soriana_sofa.PNG"
              alt="sofa soriana"
            />
          </div>
          <div class="outline-solid h-1/3">Name</div>
          <div class="outline-solid">Price</div>
          <div class="outline-solid">
            <button>+ Add to cart</button>
          </div>
        </div>
        <div class="outline-solid m-8">
          <div>
            <img
              src="/src/assets/images/furnitures/cassina_lc3_sofa.PNG"
              alt="sofa Cassina"
            />
          </div>
          <div class="outline-solid h-1/3">Name</div>
          <div class="outline-solid">Price</div>
          <div class="outline-solid">
            <button>+ Add to cart</button>
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
</script>
