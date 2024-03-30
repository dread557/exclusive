"use client";
import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const pathName = usePathname();
  const isActive = (href: string) => pathName === href;
  return (
    <nav className="flex items-center justify-between gap-8 py-8 px-[3rem] md:px-[7rem] lg:px-[10rem] border-b-[.1px] border-black">
      <Link
        href={"/"}
        className="text-[2rem] md:text-[2.4rem] text-black font-bold "
      >
        Exclusive
      </Link>

      <ul className="hidden lg:flex gap-[4.5rem] items-center">
        <li className="text-black text-[1.6rem]">
          <Link
            href={"/"}
            className={isActive("/") ? "border-b border-black pb-1" : ""}
          >
            Home
          </Link>
        </li>
        <li className="text-black text-[1.6rem]">
          <Link
            href={"/contact"}
            className={isActive("/contact") ? "border-b border-black pb-1" : ""}
          >
            Contact
          </Link>
        </li>
        <li className="text-black text-[1.6rem]">
          <Link
            href={"/about"}
            className={isActive("/about") ? "border-b border-black pb-1" : ""}
          >
            About
          </Link>
        </li>
        <li className="text-black text-[1.6rem]">
          <Link
            href={"/sign-up"}
            className={isActive("/sign-up") ? "border-b border-black pb-1" : ""}
          >
            Sign up
          </Link>
        </li>
      </ul>
      <ul className="hidden lg:flex gap-[1.5rem] items-center ">
        <li className="relative flex items-center">
          <input
            type="text"
            placeholder="what are you looking for?"
            className="p-2 bg-[#F5F5F5] rounded-sm w-[243px] h-[3.8rem] text-[1.2rem] placeholder:text-[1.4rem] pl-[2rem]"
          />
          <IoIosSearch className="absolute right-[2rem] w-[2rem] h-[2rem]" />
        </li>
        <li>
          <button className="p-1">
            <FiHeart className="w-[2.4rem] h-[2.4rem]" />
          </button>
        </li>
        <li>
          <button className="p-1">
            <IoCartOutline className="w-[2.4rem] h-[2.4rem]" />
          </button>
        </li>
      </ul>

      {/* menu btn */}
      <div className="block lg:hidden">
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
