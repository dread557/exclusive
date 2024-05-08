import React from "react";
import MainLayout from "../layouts/MainLayout";
import SectionHeader from "../components/HomePage/SectionHeader";
import Button from "../UI/Button";
import ItemCard from "../components/Cards/ItemCard";
import { BestSellingProducts } from "../data/data";
import RelatedProducts from "../components/RelatedProducts";

const page = () => {
  return (
    <MainLayout>
      <main className="mx-[3rem] md:mx-[7rem] lg:mx-[10rem]  pt-[6.5rem]   pb-[6.5rem] ">
        <div className="flex justify-between items-center">
          <h4 className="text-[2rem]">Wishlist(7)</h4>
          <Button btnType="secondary">Move All To Bag</Button>
        </div>
        <div className="flex justify-between mt-[5rem] overflow-scroll gap-[3rem]">
          {BestSellingProducts.map((product, i) => (
            <ItemCard key={i} {...product} type="wishlist" />
          ))}
        </div>
        <RelatedProducts />
      </main>
    </MainLayout>
  );
};

export default page;
