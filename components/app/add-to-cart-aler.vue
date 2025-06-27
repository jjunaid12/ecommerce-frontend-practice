<template>
  <div role="alert" class="fixed top-20 rounded-md border border-gray-300 bg-white p-4 shadow-sm">
    <div class="flex items-start gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 text-green-600"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
  
      <div class="flex-1">
        <strong class="font-medium text-gray-900"> Successfully Added </strong>
  
        <p class="mt-0.5 text-sm text-gray-700">This product has been saved to your cart</p>
      </div>
    </div>
  </div>
</template>