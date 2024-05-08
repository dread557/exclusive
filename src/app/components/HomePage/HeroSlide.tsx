"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const HeroSlide = () => {
  return (
    <div className="w-full md:w-[75%] pl-[3rem] pr-[3rem] md:pl-[7rem] lg:pl-[10rem] md:pt-[4rem] ">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-[100%]"
      >
        <SwiperSlide>
          <Image
            className="w-[100%] h-[100%]"
            src={"/sld1.png"}
            alt=""
            width={800}
            height={344}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-[100%] h-[100%]"
            src={"/sld1.png"}
            alt=""
            width={800}
            height={344}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-[100%] h-[100%]"
            src={"/sld1.png"}
            alt=""
            width={800}
            height={344}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-[100%] h-[100%]"
            src={"/sld1.png"}
            alt=""
            width={800}
            height={344}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlide;
