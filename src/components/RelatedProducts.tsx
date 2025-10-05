import React from "react";
import SectionHeader from "./HomePage/SectionHeader";
import { BestSellingProducts } from "../data/data";
import ProductCard from "./Cards/ProductCard";

const RelatedProducts = () => {
  return (
    <section className="mt-[12rem]">
      <SectionHeader title="Related Item" />
      <div className="flex justify-between mt-[5rem] overflow-scroll gap-[3rem]">
        {BestSellingProducts.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
