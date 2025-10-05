"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import HeroProduct, { HeroProductProps } from "./HeroProduct";
import { client } from "../../../sanity/lib/client";

const HeroSlide = () => {
  const [data, setData] = useState<HeroProductProps[]>([]);
  const fetchData = async () => {
    const query = `*[_type == 'hotProduct']{
  _id,
    name,
    "slug": slug.current,
  "image": images[0].asset->url,
    promoText
}`;
    try {
      const res = await client.fetch(query);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
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
        {data?.map((each) => (
          <SwiperSlide key={each._id}>
            <HeroProduct {...each} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlide;
