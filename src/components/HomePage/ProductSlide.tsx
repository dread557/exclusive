"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { ProductCardProps } from "@/types";
import ProductCard from "../Cards/ProductCard";

const ProductSlide = ({ data }: { data: ProductCardProps[] }) => {
  // const
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={30}
        breakpoints={{
          256: {
            width: 256,
            slidesPerView: 1.2,
          },
          768: {
            width: 768,
            slidesPerView: 2.5,
          },
          1024: {
            width: 1024,
            slidesPerView: 3.5,
          },
          1300: {
            width: 1300,
            slidesPerView: 4.5,
          },
        }}
        className="p-swiper tday"
      >
        <NavigationButtons top={true} />
        {data?.map((product, i) => (
          <SwiperSlide key={i}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductSlide;

export const NavigationButtons = ({ top }: { top?: boolean }) => {
  const swiper = useSwiper();

  return (
    <div
      className={`flex gap-4 absolute ${
        top ? "top-[64px] " : "top-[13px]"
      } sm:top-[13px] right-0 z-10`}
    >
      <button
        onClick={() => swiper && swiper.slidePrev()}
        className="rounded-full p-2 bg-[#f5f5f5] w-[3rem] h-[3rem] sm:w-[4.6rem] sm:h-[4.6rem] flex justify-center items-center hover:border border-black"
      >
        <IoIosArrowRoundBack className="w-[3rem] h-[3rem] text-black" />
      </button>
      <button
        onClick={() => swiper && swiper.slideNext()}
        className="rounded-full p-2 bg-[#f5f5f5] w-[3rem] h-[3rem] sm:w-[4.6rem] sm:h-[4.6rem]  flex justify-center items-center hover:border border-black"
      >
        <IoIosArrowRoundForward className="w-[3rem] h-[3rem] text-black" />
      </button>
    </div>
  );
};
