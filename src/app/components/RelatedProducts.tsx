import React from "react";
import SectionHeader from "./HomePage/SectionHeader";
import ItemCard from "./Cards/ItemCard";
import { BestSellingProducts } from "../data/data";

const RelatedProducts = () => {
  return (
    <section className="mt-[12rem]">
      <SectionHeader title="Related Item" />
      <div className="flex justify-between mt-[5rem] overflow-scroll gap-[3rem]">
        {BestSellingProducts.map((product, i) => (
          <ItemCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
