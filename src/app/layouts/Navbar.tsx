"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { IoIosSearch, IoIosAdd } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { RxPerson } from "react-icons/rx";
import Hamburger from "../components/Hamburger";
import { SideNavItems } from "../components/HomePage/SideNav";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const isActive = (href: string) => pathName === href;
  const [open, setOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const dropdownRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Cast event.target to Node since it's more specific than EventTarget
      const targetNode = event.target as Node;

      if (dropdownRef.current && "contains" in dropdownRef.current) {
        const dropdownElement = dropdownRef.current as HTMLElement;

        if (!dropdownElement.contains(targetNode)) {
          setOpenProfile(false);
        }
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openProfile]);

  return (
    <>
      <nav className="flex items-center justify-between gap-8 py-8 mx-[3rem] md:mx-[7rem] lg:mx-[10rem] border-b-[.1px] border-black">
        {/* menu btn */}
        <div className="block lg:hidden">
          <Hamburger open={open} setOpen={setOpen} />
        </div>

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
              className={
                isActive("/contact") ? "border-b border-black pb-1" : ""
              }
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
              className={
                isActive("/sign-up") ? "border-b border-black pb-1" : ""
              }
            >
              Sign up
            </Link>
          </li>
        </ul>
        <ul className="flex gap-[1.5rem] items-center ">
          <li className="relative hidden lg:flex items-center">
            <input
              type="text"
              placeholder="what are you looking for?"
              className="p-2 bg-[#F5F5F5] rounded-sm w-[243px] h-[3.8rem] text-[1.2rem] placeholder:text-[1.4rem] pl-[2rem]"
            />
            <IoIosSearch className="absolute right-[2rem] w-[2rem] h-[2rem]" />
          </li>
          <li className="w-[2.4rem] h-[2.4rem]">
            <Link
              href={"/wishlist"}
              className="p-1 relative block w-full h-full"
            >
              <FiHeart className="w-[2.4rem] h-[2.4rem]" />
              <span className="bg-[#db4444] rounded-full w-[1.7rem] h-[1.7rem] text-white absolute -top-[5px] -right-[.8rem] flex items-end justify-center p-1">
                7
              </span>
            </Link>
          </li>
          <li className="w-[2.4rem] h-[2.4rem]">
            <Link href={"/cart"} className="p-1 relative block w-full h-full">
              <IoCartOutline className="w-[2.4rem] h-[2.4rem]" />{" "}
              <span className="bg-[#db4444] rounded-full w-[1.7rem] h-[1.7rem] text-white absolute -top-[5px] -right-[.5rem] flex items-end justify-center p-1">
                3
              </span>
            </Link>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenProfile(!openProfile);
              }}
              className={`p-1 rounded-full ${
                openProfile ? "bg-[#db4444] " : ""
              }flex justify-center items-center`}
            >
              <RxPerson
                className={`w-[2.4rem] h-[2.4rem] ${
                  openProfile ? "text-white" : ""
                }`}
              />
            </button>
          </li>
        </ul>
        {}
        {/* Profile drop down */}
        {/* {openProfile && (
          <ul
            ref={dropdownRef}
            className="backdrop-blur-sm absolute top-[13%]  md:top-[9%] bg-black/40 right-[3rem] md:right-[7rem] lg:right-[10rem] p-[2rem] z-20 flex flex-col gap-3"
          >
            <li>
              <Link
                href={""}
                className="text-white flex justify-between items-center gap-[2rem]"
              >
                <RxPerson className="w-[2.4rem] h-[2.4rem] " />
                <span className="">Manage My account</span>
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-white flex justify-between items-center gap-[2rem]"
              >
                <RxPerson className="w-[2.4rem] h-[2.4rem] " />
                <span className="">Manage My account</span>
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-white flex justify-between items-center gap-[2rem]"
              >
                <RxPerson className="w-[2.4rem] h-[2.4rem] " />
                <span className="">Manage My account</span>
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-white flex justify-between items-center gap-[2rem]"
              >
                <RxPerson className="w-[2.4rem] h-[2.4rem] " />
                <span className="">Manage My account</span>
              </Link>
            </li>
          </ul>
        )} */}

        {/* Mobile nav */}
        {open && (
          <div className=" p-[3rem]  pt-[8rem] overflow-y-scroll  lg:hidden absolute w-full h-[80%] top-0  right-0 left-0 bg-black z-50">
            <div className="flex mb-[4rem]">
              <Hamburger open={open} setOpen={setOpen} />
            </div>
            <ul className="flex flex-col gap-[3rem] text-white">
              <li>
                <Link
                  href={"/"}
                  className="text-[1.7rem] flex gap-[1rem] items-center border-b-[.1px] border-white pb-[1rem]"
                >
                  <HiOutlineHome className="w-[2.4rem] h-[2.4rem]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <button
                  className="flex gap-[1em] justify-between items-center border-b-[.1px] border-white w-full pb-[1rem]"
                  onClick={() => setOpenCategories(!openCategories)}
                >
                  <span className="text-[1.7rem]"> Categories</span>
                  {openCategories ? (
                    <HiOutlineMinusSmall className="w-[2rem] h-[2rem]" />
                  ) : (
                    <IoIosAdd className="w-[2rem] h-[2rem]" />
                  )}
                </button>
                {openCategories && (
                  <ul className="flex flex-col gap-[2rem] pt-[1.5rem] border-b-[.1px] border-white ">
                    {SideNavItems.map((each, i) => (
                      <li
                        key={i}
                        className="flex gap-2 items-center justify-between"
                      >
                        <Link href={each.link} className="text-[1.6rem] ">
                          {each.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href={""}
                  className="text-[1.7rem] flex gap-[1rem] items-center border-b-[.1px] border-white pb-[1rem]"
                >
                  <HiOutlineOfficeBuilding className="w-[2.4rem] h-[2.4rem]" />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-[1.7rem] flex gap-[1rem] items-center border-b-[.1px] border-white pb-[1rem]"
                >
                  <HiOutlineOfficeBuilding className="w-[2.4rem] h-[2.4rem]" />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-[1.7rem] flex gap-[1rem] items-center"
                >
                  <FcAbout className="w-[2.4rem] h-[2.4rem] text-white" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-[1.7rem] flex gap-[1rem] items-center"
                >
                  <span>Sign up</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* Search box on mobile */}
      <div className="relative flex lg:hidden items-center py-8 px-[3rem] md:px-[7rem] lg:px-[10rem] ">
        <input
          type="text"
          placeholder="what are you looking for?"
          className="p-2 bg-[#F5F5F5] rounded-sm w-full h-[3.8rem] text-[1.2rem] placeholder:text-[1.4rem] pl-[2rem]"
        />
        <IoIosSearch className="absolute right-[4rem] md:right-[8rem] w-[2rem] h-[2rem]" />
      </div>
    </>
  );
};

export default Navbar;
