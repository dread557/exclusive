"use client";
import Image from "next/image";
import React from "react";
import CountdownTimer from "../CountdownTimer";

const Banner = () => {
  const { timerDays, timerHours, timerMinutes, timerSeconds } = CountdownTimer({
    date: "10 April, 2024",
  });
  return (
    <aside
      className="mx-[3rem] md:mx-[7rem] lg:mx-[10rem] pt-[6.5rem]   pb-[3.5rem] bg-black px-[3rem] md:px-[5rem] bg-no-repeat bg-right"
      style={{ backgroundImage: "url('/bgb.png')" }}
    >
      <h5 className="text-[1.6rem] text-[#00FF66] font-semibold">Categories</h5>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[3rem]">
          <p className="text-[2.8rem] md:text-[4.8rem] text-white font-semibold max-w-[44.3rem]">
            Enhance Your Music Experience
          </p>
          <div className="flex gap-[3rem]">
            <div className="flex flex-col w-[4.8rem] h-[4.8rem] md:w-[6.2rem] md:h-[6.2rem] justify-center items-center gap-1 rounded-full bg-[#fafafa] ">
              <span className="text-[1.2rem] md:text-[1.6rem] font-semibold text-black">
                {timerDays}
              </span>
              <span className="text-[0.8rem] md:text-[1.1rem] text-black">
                Days
              </span>
            </div>
            <div className="flex flex-col w-[4.8rem] h-[4.8rem] md:w-[6.2rem] md:h-[6.2rem] justify-center items-center gap-1 rounded-full bg-[#fafafa] ">
              <span className="text-[1.2rem] md:text-[1.6rem] font-semibold text-black">
                {timerHours}
              </span>
              <span className="text-[0.8rem] md:text-[1.1rem] text-black">
                Hours
              </span>
            </div>
            <div className="flex flex-col w-[4.8rem] h-[4.8rem] md:w-[6.2rem] md:h-[6.2rem] justify-center items-center gap-1 rounded-full bg-[#fafafa] ">
              <span className="text-[1.2rem] md:text-[1.6rem] font-semibold text-black">
                {timerMinutes}
              </span>
              <span className="text-[0.8rem] md:text-[1.1rem] text-black">
                Minutes
              </span>
            </div>
            <div className="flex flex-col w-[4.8rem] h-[4.8rem] md:w-[6.2rem] md:h-[6.2rem] justify-center items-center gap-1 rounded-full bg-[#fafafa] ">
              <span className="text-[1.2rem] md:text-[1.6rem] font-semibold text-black">
                {timerSeconds}
              </span>
              <span className="text-[0.8rem] md:text-[1.1rem] text-black">
                Seconds
              </span>
            </div>
          </div>
          <button className="w-[17.1rem] h-[5.6rem] bg-[#00FF66] text-white text-[1.6rem] rounded">
            Buy Now!
          </button>
        </div>
        <div className="relative">
          <Image src={"/bbox.png"} alt="product" width={568} height={330} />
        </div>
      </div>
    </aside>
  );
};

export default Banner;
