<script setup lang="ts">
  const route = useRoute();

  const isActiveLink = (routePath: string) => {
    return route.path === routePath;
  };
</script>

<template>
  <header class="body-font sticky bg-gray-800 top-0 shadow z-1">
    <div class="container mx-auto flex flex-wrap py-5 px-10 flex-col md:flex-row items-center gap-2">
      <RouterLink 
        to="/" 
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-auto"
      >
        <div class="text-white">(LOGO)</div>
        <span class="ml-3 text-xl font-bold text-white border-r-2  pr-3">E-COMMERCE</span>
      </RouterLink>

      <div class="relative">
        <!-- input search bar logo in a div -->

        <input 
          type="search" 
          placeholder="Search..." 
          class="px-4 p sm:w-auto focus:outline-none bg-gray-50 text-gray-800 focus:bg-gray-100"
        >
      </div>
      
      <div class="md:block">
        <RouterLink 
          to="/" 
          class="inline-flex items-center my-1 mx-4 text-base md:mt-0 bg-transparent text-gray-300 "
          :class="[isActiveLink('/') ? 'text-white border-b' : 'hover:border-white']"
        >Home
        </RouterLink>
        <RouterLink 
          to="/about" 
          class="inline-flex items-center my-1 mx-4 text-base md:mt-0 bg-transparent text-gray-300"
          :class="[isActiveLink('/about') ? 'text-white  border-b' : 'hover:border-white']"
        >About
        </RouterLink>
        <RouterLink 
          to="/contact-t"
          class="inline-flex items-center my-1 mx-4 text-base md:mt-0 bg-transparent text-gray-300 "
          :class="[isActiveLink('/contact-t') ? 'text-white  border-b' : 'hover:border-white']"
        >Contact
        </RouterLink>
        <RouterLink 
          to="/cart" 
          class="inline-flex items-center my-1 mx-4 text-base md:mt-0 bg-transparent text-gray-300 "
          :class="[isActiveLink('/cart') ? 'text-white  border-b' : 'hover:border-white']"
        >Cart
        </RouterLink>
      </div>
    </div>
  </header>
</template>


