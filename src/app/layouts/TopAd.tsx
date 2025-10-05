import Currency from "@/components/Currency";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";

export default function TopAd() {
  return (
    <section className="bg-black w-full min-h-12 flex  flex-col lg:flex-row p-3  lg:justify-center items-center relative">
      <p className="text-white text-[1.4rem] ">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="ml-2">
          <Link className="underline" href={"#"}>
            ShopNow
          </Link>
        </span>
      </p>
      <div className="flex justify-center items-center gap-[40px]">
        <Currency />
        <div className="flex justify-end items-center gap-2 lg:absolute right-[10%]">
          <span className="text-white text-[1.4rem]">English</span>
          <button className="">
            <IoIosArrowDown className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
