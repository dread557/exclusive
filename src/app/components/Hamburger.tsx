"use cliient";
import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { HamburgerType } from "../types";

const Hamburger: React.FC<HamburgerType> = ({ open, setOpen }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={open ? "open" : "closed"}
        onClick={() => setOpen(!open)}
        className={`relative h-[4rem] w-[4rem] rounded-full bg-white/0 border  hover:border-black transition-colors hover:bg-white/20`}
      >
        <motion.span
          variants={VARIANTS.top}
          className={`absolute h-1 w-[2rem] ${open ? "bg-white" : "bg-black"}`}
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className={`absolute h-1 w-[2rem] ${open ? "bg-white" : "bg-black"}`}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={`absolute h-1 w-[1rem] ${open ? "bg-white" : "bg-black"}`}
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 4px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 4px)",
    },
  },
};
export default Hamburger;
