<script setup lang="ts">
  const route = useRoute();

  const isActiveLink = (routePath: string) => {
    return route.path === routePath;
  };
</script>

<template>
  <header class="body-font sticky bg-gray-800 top-0 shadow z-1">
    <div class="container mx-auto flex lg:flex-1 flex-none flex-wrap py-5 px-20 flex-col md:flex-row items-center gap-2">
      <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <RouterLink 
          to="/" 
          class="flex items-center"
        >
          <span class="text-white">(LOGO)</span>
          <span class="ml-3 text-xl font-bold text-white border-r-2 pr-3">E-COMMERCE</span>
        </RouterLink>
      </div>

      <div class="flex flex-3 justify-start">
        <!-- input search bar logo in a div -->

        <input 
          type="search" 
          placeholder="Search..." 
          class="px-4 md:w-[65%] focus:outline-none bg-gray-50 text-gray-800 focus:bg-gray-100 h-8"
        >
      </div>
      
      <div class="block flex flex-1 flex-shrink justify-between gap-2">
        <RouterLink 
          to="/" 
          class="text-md md:mt-0 bg-transparent text-gray-300 "
          :class="[isActiveLink('/') ? 'text-white border-b' : 'hover:border-white']"
        >Home
        </RouterLink>
        <RouterLink 
          to="/about" 
          class="text-md md:mt-0 bg-transparent text-gray-300"
          :class="[isActiveLink('/about') ? 'text-white  border-b' : 'hover:border-white']"
        >About
        </RouterLink>
        <RouterLink 
          to="/contact-t"
          class="text-md md:mt-0 bg-transparent text-gray-300 "
          :class="[isActiveLink('/contact-t') ? 'text-white  border-b' : 'hover:border-white']"
        >Contact
        </RouterLink>
        <RouterLink 
        to="/cart" 
        class="text-md bg-transparent text-gray-300 relative"
        :class="[isActiveLink('/cart') ? 'text-white ' : 'hover:border-white']"
        >
        <img src="/public/images/icons/cart-icon.png" class="h-7 inline-flex">
        <span class="absolute right-3.25 -top-1 text-sm text-yellow-600">9</span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>


