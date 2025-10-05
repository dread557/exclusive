// "use client"
import { ProductCardProps } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem extends ProductCardProps {
  count: number;
}

type CartStore = {
  cart: CartItem[];
  count: () => number;
  add: (product: ProductCardProps) => void;
  remove: (ProductId: number) => void;
  removeAll: () => void;
  updateQuantity: (_id: number, count: number) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      count: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.count, 0);
      },
      add: (product: ProductCardProps) => {
        const { cart } = get();
        const updatedCart = updateCart(product, cart);
        set({ cart: updatedCart });
        toast.success(`${product.name} added to cart`);
      },
      remove: (productId) => {
        const { cart } = get();
        const updatedCart = removeFromCart(productId, cart);
        set({ cart: updatedCart });
      },
      removeAll: () => set({ cart: [] }),
      updateQuantity: (_id, count) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === _id ? { ...item, count } : item
          ),
        })),
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);

function updateCart(product: ProductCardProps, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1 };
  const productInCart = cart.find((item) => item._id === product._id);

  if (!productInCart) {
    return [...cart, cartItem];
  } else {
    return cart.map((item) =>
      item._id == product._id ? { ...item, count: item.count + 1 } : item
    );
  }
}

function removeFromCart(productId: number, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) =>
      item._id == productId ? { ...item, count: item.count - 1 } : item
    )
    .filter((item) => item.count > 0);
}
