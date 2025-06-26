<!-- HOMEVIEW -->
<script setup lang="ts">
  const { data } = await useFetch('/api/products');

  // move this
  const convertToDollar = (cents: number) => {
    return cents / 100;
  }
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 pt-5 pb-20 mx-auto">
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
        <AppCards
          class="cursor-pointer"
          v-for="product in data"
          :key="product.id"
        >
            <div class="group relative block overflow-hidden h-[100%] flex flex-col justify-between">
              <RouterLink :to="`products/${product.id}`">
                <img
                  :src="product.image"
                  class="h-50 w-full object-contain"
                />
              </RouterLink>

              <div class="relative bg-white p-6">
                <h3 class="text-gray-500 text-xs title-font mb-1">{{ product.category }}</h3>
                <h3 class="mt-1.5 text-lg font-medium text-gray-900">{{ product.name }}</h3>
                <p class="text-gray-700">${{ convertToDollar(product.priceCents) }}</p>

                <div class="mt-4 flex gap-4">
                  <button
                    class="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105 cursor-pointer"
                  >
                    Add to Cart
                  </button>
            
                  <button
                    type="button"
                    class="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 cursor-pointer"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
        </AppCards>
      </div>
    </div>
  </section>
</template>