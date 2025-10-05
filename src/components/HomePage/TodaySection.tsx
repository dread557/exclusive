import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ProductSlide from "./ProductSlide";
import Button from "@/UI/Button";
import SectionHeader from "./SectionHeader";
import FlashTimer from "./FlashTimer";
import { client } from "../../../sanity/lib/client";
import { ProductCardProps } from "@/types";
import ViewAllButton from "../ViewAllButton";

async function getData() {
  const query = `*[_type == 'product'][0...6] | order(_createdAt desc) {
  _id,
    name,
    price,
    "slug": slug.current,
    "categoryName": category->name,
  "image": images[0].asset->url
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function TodaySection() {
  const data: ProductCardProps[] = await getData();
  return (
    <section className=" px-[3rem] md:px-[7rem] lg:px-[10rem] pt-[6.5rem]">
      <SectionHeader title="Today's" />
      <div className="flex justify-between mt-6 items-center absolute">
        <div className="flex flex-col-reverse md:flex-row gap-[1.5rem] md:gap-[6rem] md:items-center">
          <h4 className="text-black text-[2rem] md:text-[3.6rem] font-semibold">
            Flash Sales
          </h4>
          <FlashTimer />
        </div>
      </div>
      <ProductSlide data={data} />
      <div className="flex justify-center items-center mt-[5rem]">
        <ViewAllButton />
      </div>
    </section>
  );
}
