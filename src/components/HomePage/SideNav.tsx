import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export const SideNavItems = [
  {
    name: "Women' fashion",
    link: "#",
  },
  {
    name: "Men' fashion",
    link: "#",
  },
  {
    name: "Electronics",
    link: "#",
  },
  {
    name: "Home & Lifestyle",
    link: "#",
  },
  {
    name: "Medicine",
    link: "#",
  },
  {
    name: "Sports & outdoor",
    link: "#",
  },
  {
    name: "Baby's & Toys",
    link: "#",
  },
  {
    name: "Groceries & Pets",
    link: "#",
  },
  {
    name: "Health & Beauty",
    link: "#",
  },
];

const SideNav = () => {
  return (
    <ul className="hidden pl-[7rem] lg:pl-[10rem] md:flex flex-col gap-[2rem] pt-[4rem] border-r-[.1px] border-black pr-[3rem]">
      {SideNavItems.map((each, i) => (
        <li key={i} className="flex gap-2 items-center justify-between">
          <Link href={each.link} className="text-[1.6rem] ">
            {each.name}
          </Link>
          {i === 0 && <MdKeyboardArrowRight className="text-[2rem]" />}
          {i === 1 && <MdKeyboardArrowRight className="text-[2rem]" />}
        </li>
      ))}
    </ul>
  );
};

export default SideNav;
