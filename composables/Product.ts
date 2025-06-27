import type { Product } from '~/types/types'

const cachedProducts = ref<Product[] | null>(null);

export const useProducts = () => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.API_URL;
  
  const getProducts = async () => {
    if (cachedProducts.value)
      return {data: cachedProducts.value, error: null}
    
    const { data, error } = await useFetch<Product[]>(`${apiUrl}/products`);

    if (!error.value)
      cachedProducts.value = data.value;
    
    return { data, error }
  };

  const getProductById = async (id: number) => {
    const product = cachedProducts.value?.find(product => product.id === id);
    
    if (product)
      return { data: product, error: null }; 

    const { data, error } = await useFetch<Product>(`${apiUrl}/products/${id}`);

    return { data, error }
  };

  return { getProducts, getProductById };
}
