"use client";
import React from "react";
import CountdownTimer from "../CountdownTimer";

const FlashTimer = () => {
  const { timerDays, timerHours, timerMinutes, timerSeconds } = CountdownTimer({
    date: "June 24, 2024",
  });
  return (
    <aside className="flex gap-[1rem] md:gap-[2rem] items-center">
      <div className="flex flex-col items-center">
        <span className="text-[1.2rem] font-medium">Days</span>
        <span className="text-[2.4rem] font-bold">{timerDays}</span>
      </div>
      <span className="text-[#E07575] text-[2.5rem] w-[.4rem]">:</span>
      <div className="flex flex-col items-center">
        <span className="text-[1.2rem] font-medium">Hours</span>
        <span className="text-[2.4rem] font-bold">{timerHours}</span>
      </div>
      <span className="text-[#E07575] text-[2.5rem] w-[.4rem]">:</span>
      <div className="flex flex-col items-center">
        <span className="text-[1.2rem] font-medium">Minutes</span>
        <span className="text-[2.4rem] font-bold">{timerMinutes}</span>
      </div>
      <span className="text-[#E07575] text-[2.5rem] w-[.4rem]">:</span>
      <div className="flex flex-col items-center">
        <span className="text-[1.2rem] font-medium">Seconds</span>
        <span className="text-[2.4rem] font-bold">{timerSeconds}</span>
      </div>
    </aside>
  );
};

export default FlashTimer;
