import React from "react";
import CountdownTimer from "../CountdownTimer";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ItemCard from "../Cards/ItemCard";
import { useSwiper } from "swiper/react";
import ProductSlide from "./ProductSlide";
import Button from "@/app/UI/Button";
import SectionHeader from "./SectionHeader";
import FlashTimer from "./FlashTimer";

const TodaySection = () => {
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
      <ProductSlide />
      <div className="flex justify-center items-center mt-[5rem]">
        <Button>View all products</Button>
      </div>
    </section>
  );
};

export default TodaySection;
