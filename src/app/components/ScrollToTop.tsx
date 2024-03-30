"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scroll() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      {isVisible && (
        <button
          onClick={() => scroll()}
          className="rounded-full w-[4.6rem] h-[4.6rem] p-1 bg-[#f5f5f5] flex justify-center items-center fixed right-[9%] bottom-[38%]"
        >
          <IoIosArrowRoundUp className="w-[2.4rem] h-[2.4rem]" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
