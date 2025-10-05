"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ItemCard from "../Cards/ProductCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/bundle";

import { Pagination, Autoplay, A11y, Grid } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { ourProducts } from "@/data/data";

const ProductSlide2 = () => {
  // const
  return (
    <div style={{ height: "600px" }}>
      <Swiper
        modules={[Autoplay, Pagination, A11y, Grid]}
        spaceBetween={30}
        breakpoints={{
          256: {
            slidesPerView: 1.2,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          360: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: "row",
            },
          },

          768: {
            slidesPerView: 2.5,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          1024: {
            slidesPerView: 3,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          1300: {
            slidesPerView: 4,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
        className="p-swiper mySwiper"
      >
        <NavigationButtons />
        {ourProducts.map((product, i) => (
          <SwiperSlide key={i}>
            <ItemCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const NavigationButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-4 absolute top-[13px] right-0 z-10">
      <button
        onClick={() => swiper && swiper.slidePrev()}
        className="rounded-full p-2 bg-[#f5f5f5] w-[4.6rem] h-[4.6rem] flex justify-center items-center hover:border border-black"
      >
        <IoIosArrowRoundBack className="w-[3rem] h-[3rem] text-black" />
      </button>
      <button
        onClick={() => swiper && swiper.slideNext()}
        className="rounded-full p-2 bg-[#f5f5f5] w-[4.6rem] h-[4.6rem] flex justify-center items-center hover:border border-black"
      >
        <IoIosArrowRoundForward className="w-[3rem] h-[3rem] text-black" />
      </button>
    </div>
  );
};

export default ProductSlide2;
