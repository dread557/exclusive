"use client";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import Button from "../../UI/Button";
import { BestSellingProducts } from "../../data/data";
import RelatedProducts from "../../components/RelatedProducts";
import ProductCard from "../../components/Cards/ProductCard";
import { useFavStore } from "@/store/favorites";
import { useCartStore } from "@/store/cart";

const WishList = () => {
  const favorites = useFavStore((state) => state.favorites);
  const clearFavs = useFavStore((state) => state.removeAll);
  const addToCart = useCartStore((state) => state.add);
  const moveAllTocart = () => {
    favorites.forEach((fav) => addToCart(fav));
    clearFavs();
  };
  return (
    <MainLayout>
      <main className="mx-[3rem] md:mx-[7rem] lg:mx-[10rem]  pt-[6.5rem]   pb-[6.5rem] ">
        <div className="flex justify-between items-center">
          <h4 className="text-[2rem]">Wishlist({favorites.length})</h4>
          <Button onClick={moveAllTocart} btnType="secondary">
            Move All To Bag
          </Button>
        </div>
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  mt-[5rem] flex-wrap gap-[3rem]">
            {favorites.map((product, i) => (
              <ProductCard key={i} {...product} type="wishlist" />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center mt-4">
            <p>No favorites at the moment</p>
          </div>
        )}

        <RelatedProducts />
      </main>
    </MainLayout>
  );
};

export default WishList;
