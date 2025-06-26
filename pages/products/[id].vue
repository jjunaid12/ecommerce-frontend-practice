<script setup lang="ts">
  import { useProducts } from '~/composables/useProducts';

  const route = useRoute()
  const { getProductById } = useProducts()
  const { data: product } = await getProductById(Number(route.params.id))

  // move this
  const convertToDollar = (cents: number) => {
    return cents / 100;
  }
</script>

<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-10 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img class="lg:w-1/3 w-full lg:h-auto object-contain h-64 object-center rounded" :src="product!.image">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-between">
          <div>
            <h2 class="text-sm title-font text-black tracking-widest">{{ product!.category }}</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product!.name }}</h1>
            <p>other information like details, quantity, rating, color, and so on...</p>
          </div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">${{ convertToDollar(product!.priceCents) }}</span>
            <button class="flex ml-auto border-black bg-black mt-4 block rounded-md border px-5 py-3 text-sm font-medium text-white hover:opacity-80 cursor-pointer">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>