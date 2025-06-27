import type { CartItem } from "~/types/types";

// new
export const useCartItems = () => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.API_URL;

  const getCartItems = async () => {
    const { data, error } = await useFetch<CartItem[]>(`${apiUrl}/carts`);
    return { data, error };
  };

  const getCartItemsByUser = async (userId: number) => {
    const { data, error } = await useFetch<CartItem[]>(`${apiUrl}/carts/${userId}`);
    return { data, error };
  };

  return { getCartItems, getCartItemsByUser };
};
