"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import CategorySlide from "./CategorySlide";

const Category = () => {
  return (
    <section className="  mx-[3rem] md:mx-[7rem] lg:mx-[10rem] pt-[6.5rem] border-black border-t-[.1px] mt-[6rem]  pb-[6.5rem] border-b-[.3px] ">
      <SectionHeader title="Categories" />
      <h4 className="text-black text-[2rem] md:text-[3.6rem] font-semibold absolute mt-[2rem]">
        Browse by Categories
      </h4>
      <CategorySlide />
    </section>
  );
};

export default Category;
