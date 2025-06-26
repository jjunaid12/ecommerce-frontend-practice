export type Product = {
  id: number;
  image: string;
  category: string;
  name: string;
  priceCents: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export type CartItem = {
  id: number;
  productId: number;
  quantity: number;
};
