"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Button from "@/UI/Button";
import { BestSellingProducts } from "@/data/data";
import ProductCard from "../Cards/ProductCard";

const BestSelling = () => {
  return (
    <section className=" mx-[3rem] md:mx-[7rem] lg:mx-[10rem]  pt-[6.5rem]   pb-[6.5rem] ">
      <SectionHeader title="Best Selling" />
      <div className="flex items-center justify-between ">
        <h4 className="text-black text-[2rem] md:text-[3.6rem] font-semibold mt-[2rem]">
          Best Selling Products
        </h4>
        <Button size="15.9rem">view all</Button>
      </div>
      <div className="flex justify-between mt-[5rem] overflow-scroll gap-[3rem]">
        {BestSellingProducts.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
