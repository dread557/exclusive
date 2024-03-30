"use client";
import React from "react";
import { TfiTablet } from "react-icons/tfi";
import {
  PiDesktopLight,
  PiHeadphonesThin,
  PiCameraLight,
} from "react-icons/pi";
import { TbDeviceWatchStats } from "react-icons/tb";
import { VscGame } from "react-icons/vsc";
import { GiWashingMachine } from "react-icons/gi";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { NavigationButtons } from "./ProductSlide";

const CategorySlide = () => {
  const categories = [
    { name: "Phones", icon: <TfiTablet className="w-[5.6rem] h-[5.6rem]" /> },
    {
      name: "Computers",
      icon: <PiDesktopLight className="w-[5.6rem] h-[5.6rem]" />,
    },
    {
      name: "Camera",
      icon: <PiCameraLight className="w-[5.6rem] h-[5.6rem]" />,
    },
    {
      name: "SmartWatch",
      icon: <TbDeviceWatchStats className="w-[5.6rem] h-[5.6rem]" />,
    },
    {
      name: "Headphones",
      icon: <PiHeadphonesThin className="w-[5.6rem] h-[5.6rem]" />,
    },
    { name: "Gaming", icon: <VscGame className="w-[5.6rem] h-[5.6rem]" /> },
    {
      name: "Appliances",
      icon: <GiWashingMachine className="w-[5.6rem] h-[5.6rem]" />,
    },
  ];
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={30}
        breakpoints={{
          256: {
            width: 256,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1024: {
            width: 1024,
            slidesPerView: 5,
          },
          1300: {
            width: 1300,
            slidesPerView: 6,
          },
        }}
        className="p-swiper"
      >
        <NavigationButtons />
        {categories.map((each, i) => (
          <SwiperSlide key={i}>
            <button className="border w-[10rem] h-[10rem] md:w-[17rem]  md:h-[14.5rem] flex justify-center gap-3 flex-col items-center hover:bg-[#db4444] hover:text-white ease-in-out duration-300">
              {each.icon}
              <p className="text-[1.6rem]">{each.name}</p>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlide;
