import type { User } from '~/types/types';

const cachedUsers = ref<User[] | null>(null);

export const useUsers = () => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.API_URL;
  
  const getUsers = async () => {
    if (cachedUsers.value)
      return { data: cachedUsers.value, error: null };
    
    const { data, error } = await useFetch<User[]>(`${apiUrl}/users`);

    if (!error.value)
      cachedUsers.value = data.value;
    
    return { data, error };
  };

  const getUserById = async (id: number) => {
    const user = cachedUsers.value?.find(user => user.id === id);
    
    if (user)
      return { data: user, error: null };
    
    const { data, error } = await useFetch<User>(`${apiUrl}/users/${id}`);
    return { data, error };
  };

  return { getUsers, getUserById };
}
