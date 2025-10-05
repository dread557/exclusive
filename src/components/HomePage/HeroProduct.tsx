import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TfiArrowRight } from "react-icons/tfi";

export interface HeroProductProps {
  _id: string;
  name: string;
  promoText: string;
  image: string;
  slug: string;
}

const HeroProduct = ({ name, image, slug, promoText }: HeroProductProps) => {
  return (
    <section className="bg-black p-[3rem] px-[2rem] md:px-[5rem] text-[#fafafa] h-full">
      <section className=" flex flex-col md:flex-row  justify-between ">
        <div className="flex flex-col gap-4 mt-8 justify-center">
          <h3 className="text-[1.6rem] ">{name}</h3>
          <p className="text-[3rem] md:text-[3.8rem] md:max-w-[29.4rem] tracking-wider font-semibold">
            {promoText}
          </p>
        </div>
        <Image
          className="mt-[2rem] md:mt-0  md:w-[60%]"
          src={image}
          alt="product"
          width={400}
          height={300}
        />
      </section>
      <Link
        href={`/products/${slug}`}
        className="text-[1.6rem] flex items-center gap-2 "
      >
        <span className="border-b  pb-1">Shop Now</span>
        <TfiArrowRight className="" />
      </Link>
    </section>
  );
};

export default HeroProduct;
