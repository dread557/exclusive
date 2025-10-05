import React from "react";
import SectionHeader from "./SectionHeader";
import ProductSlide2 from "./ProductSlide2";
import Button from "@/UI/Button";
import ViewAllButton from "../ViewAllButton";

const OurProduct = () => {
  return (
    <section className="mx-[3rem] md:mx-[7rem] lg:mx-[10rem] pt-[6.5rem] border-black  pb-[6.5rem]">
      <SectionHeader title="Our Products" />
      <h4 className="text-black text-[2rem] md:text-[3.6rem] font-semibold absolute mt-[2rem]">
        Explore Our Products
      </h4>
      <ProductSlide2 />
      <div className="flex justify-center items-center mt-[5rem] md:mt-[20rem] lg:mt-[30rem]">
        <ViewAllButton />
      </div>
    </section>
  );
};

export default OurProduct;
