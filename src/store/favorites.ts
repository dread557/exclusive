import { ProductCardProps } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useFavStoreProps {
  favorites: ProductCardProps[];
  add: (product: ProductCardProps) => void;
  remove: (ProductId: number) => void;
  removeAll: () => void;
}

export const useFavStore = create<useFavStoreProps>()(
  persist(
    (set, get) => ({
      favorites: [],
      add: (product) => {
        const { favorites } = get();
        const updatedFavorites = addFavorite(product, favorites);
        set({ favorites: updatedFavorites });
      },
      remove: (productId) => {
        const favorites = get().favorites;
        const updatedFavorites = removeFavorite(productId, favorites);
        set({ favorites: updatedFavorites });
      },
      removeAll: () => set({ favorites: [] }),
    }),
    {
      name: "favorites",
      getStorage: () => localStorage,
    }
  )
);

function addFavorite(
  product: ProductCardProps,
  favorites: ProductCardProps[]
): ProductCardProps[] {
  const previouslyLiked = favorites.find((item) => item._id === product._id);

  if (!previouslyLiked) {
    return [...favorites, product];
  } else {
    return [...favorites];
  }
}

function removeFavorite(
  productId: number,
  favorites: ProductCardProps[]
): ProductCardProps[] {
  return favorites.filter((item) => item._id == productId);
}
