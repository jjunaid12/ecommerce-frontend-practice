<script setup lang="ts">
  import { watch } from 'vue';

  // for testing only
  const Users  = useUsers();
  const { data: users } = await Users.getUserById(1);
  const CartItems = useCartItems();
  const { data: cartItem } = await CartItems.getCartItems();

  const productIds = ref<number[]>([]);

  watch(cartItem, (newVal) => {
    if (newVal) {
      productIds.value = newVal.map(item => item.productId);
      console.log('Product IDs in cart:', productIds.value);
    }
  }, { immediate: true });

</script>

<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <header class="text-center">
          <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">{{ users!.name }}'s Cart</h1>
        </header>
  
        <div class="mt-8 flex gap-4">
          <!-- products in cart -->
           <div class="flex flex-1">
              <div class="flex-1"> 
                <div class="flex ">
                  <img
                    src="/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
                    class="size-30 rounded-sm object-cover"
                  />
                  <div class="flex flex-col justify-center">
                    <h3 class="text-lg text-gray-900">Basic Tee 6-Pack</h3>

                    <div class="mt-0.5 space-y-px text-[12px] text-gray-600">
                      <p>Size:XXS</p>
                      <p>Color:White</p>
                    </div>
                  </div>
  
                  <!-- checkout -->
                  <div class="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label for="Line3Qty" class="sr-only"> Quantity </label>
  
                      <input
                        type="number"
                        value="1"
                        class="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-hidiven [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>
  
                    <button class="text-gray-600 transition hover:text-red-600 cursor-pointer">
                      <span class="sr-only">Remove item</span>
  
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-widivh="1.5"
                        stroke="currentColor"
                        class="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          <div class="mt-8 flex justify-end border border-gray-300 pt-8 w-[40%]">
            <div class="w-screen max-w-lg space-y-4">
              <div class="space-y-0.5 text-sm text-gray-700">
                <div class="flex justify-between">
                  <div>Subtotal</div>
                  <div>£250</div>
                </div>
  
                <div class="flex justify-between">
                  <div>VAT</div>
                  <div>£25</div>
                </div>
  
                <div class="flex justify-between">
                  <div>Discount</div>
                  <div>-£20</div>
                </div>
  
                <div class="flex justify-between !text-base font-medium">
                  <div>Total</div>
                  <div>£200</div>
                </div>
              </div>
    
              <div class="flex justify-end">
                <a
                  href="#"
                  class="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>