import type { Product } from '~/types/product'

const API_URL = 'http://localhost:50013/products';

export function useProducts() {
  // Fetch all products
  const getProducts = async () => {
    const { data, error } = await useFetch<Product[]>(API_URL)
    return { data, error }
  }

  // Fetch a single product by ID
  const getProductById = async (id: number) => {
    const { data, error } = await useFetch<Product>(`${API_URL}/${id}`)
    return { data, error }
  }

  return { getProducts, getProductById }
}