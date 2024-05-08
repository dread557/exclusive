"use client";
import Button from "@/app/UI/Button";
import Footer from "@/app/layouts/Footer";
import Navbar from "@/app/layouts/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { HiHeart, HiOutlineMinusSmall } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { Rating } from "react-simple-star-rating";
import RelatedProducts from "@/app/components/RelatedProducts";

const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  return (
    <section className="">
      <Navbar />
      <main className="px-[3rem] md:px-[7rem] lg:px-[10rem] lg:mt-[4rem]">
        <div className="flex gap-[1rem]">
          <Link href={""} className="text-[1.4rem] text-gray-500">
            Account
            {" / "}
          </Link>
          <Link href={""} className="text-[1.4rem] text-gray-500">
            Gaming
            {" / "}
          </Link>
          <Link href={""} className="text-[1.4rem] text-black">
            Havic HV G-92 Gamepad
          </Link>
        </div>
        <section className="flex flex-col lg:flex-row mt-[4.5rem] gap-[4rem]">
          <div className="flex flex-col-reverse md:flex-row basis-[75%] gap-[3rem] ">
            <div className="flex md:flex-col gap-[1.5rem]">
              <button className="bg-[#f5f5f5] flex justify-center items-center rounded p-[2rem] md:w-[17rem] h-[8rem] md:h-[10rem] xl:h-[13.8rem]">
                <Image
                  className="w-[12.1rem] h-[8rem] xl:h-[11.4rem] object-contain"
                  src={"/psp.png"}
                  alt="product"
                  width={121}
                  height={114}
                />
              </button>
              <button className="bg-[#f5f5f5] flex justify-center items-center rounded p-[2rem] md:w-[17rem] h-[8rem]  md:h-[10rem] xl:h-[13.8rem]">
                <Image
                  className="w-[12.1rem] h-[8rem] xl:h-[11.4rem] object-contain"
                  src={"/psp.png"}
                  alt="product"
                  width={121}
                  height={114}
                />
              </button>
              <button className="bg-[#f5f5f5] flex justify-center items-center rounded p-[2rem] md:w-[17rem] h-[8rem]  md:h-[10rem] xl:h-[13.8rem]">
                <Image
                  className="w-[12.1rem] h-[8rem] xl:h-[11.4rem] object-contain"
                  src={"/psp.png"}
                  alt="product"
                  width={121}
                  height={114}
                />
              </button>
              <button className="bg-[#f5f5f5] flex justify-center items-center rounded p-[2rem] md:w-[17rem] h-[8rem]  md:h-[10rem] xl:h-[13.8rem]">
                <Image
                  className="w-[12.1rem] h-[8rem] xl:h-[11.4rem] object-contain"
                  src={"/psp.png"}
                  alt="product"
                  width={121}
                  height={114}
                />
              </button>
            </div>
            <div className="bg-[#f5f5f5] h-[25rem]  md:h-full w-full   flex justify-center items-center md:px-[10rem] lg:px-[4rem] md:pt-[6.4rem] md:pb-[3rem] xl:px-[10rem]">
              <Image
                className="w-[23rem] md:w-full "
                src={"/bpsp.png"}
                alt="product"
                width={446}
                height={315}
              />
            </div>
          </div>
          <div className="basis-[25%] flex flex-col gap-[1rem]">
            <h3 className="text-[2.4rem] font-semibold">
              Havic HV G-92 Gamepad
            </h3>
            <div className="flex items-center gap-[.5rem]">
              <Rating
                initialValue={4}
                readonly
                allowFraction
                style={{ display: "flex", flexDirection: "row" }}
                SVGstyle={{ display: "inline" }}
                size={20}
              />
              <span className="border-r text-gray-400 pr-[.5rem] text-[1.4rem]">
                (150 reviews)
              </span>
              <span className="text-[#00FF66] text-[1.4rem]">In stock</span>
            </div>
            <p className="text-black text-[2.4rem]">$190</p>
            <p className="text-[1.4rem] mt-[.7rem] pb-[2rem] border-b border-black">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <div className="flex gap-[2rem] items-center">
              <span className="text-[1.7rem]">Colours:</span>
              <div className="flex gap-[.4rem]">
                <input className="" type="radio" />
                <input className="" type="radio" />
              </div>
            </div>
            <div className="flex gap-[2rem] items-center">
              <span className="text-[1.7rem]">Sizes:</span>
              <div className="flex gap-[.8rem]">
                <button className="text-[1.4rem] w-[3.2rem] h-[3.2rem] flex justify-center items-center border border-gray-500 rounded">
                  XS
                </button>
                <button className="text-[1.4rem] w-[3.2rem] h-[3.2rem] flex justify-center items-center border border-gray-500 rounded">
                  S
                </button>
                <button className="text-[1.4rem] w-[3.2rem] h-[3.2rem] flex justify-center items-center border border-gray-500 rounded">
                  M
                </button>
              </div>
            </div>
            <div className="flex gap-[2rem] items-center mt-[1rem]">
              <div className="flex h-[4.4rem] w-[15.9rem]">
                <button
                  onClick={() => {
                    quantity !== 1 && setQuantity((prev) => prev - 1);
                  }}
                  className="h-full border border-gray-400 w-[4rem] rounded-tl rounded-bl flex justify-center items-center"
                >
                  <HiOutlineMinusSmall className="w-[2rem] h-[2rem]" />
                </button>
                <input
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value)) {
                      setQuantity(value);
                    }
                  }}
                  className="h-full w-[50%]  border border-gray-400 border-l-0 border-r-0 text-center text-[1.8rem] font-medium outline-0"
                />
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="h-full border border-[#db4444] w-[4rem] rounded-tr rounded-br flex justify-center items-center bg-[#db4444]"
                >
                  <IoIosAdd className="w-[2.4rem] h-[2.4rem] text-white" />
                </button>
              </div>
              <Button size={"16.5rem"} height={"4.4rem"}>
                Buy Now
              </Button>
              <button className="border border-gray-400 rounded h-[4rem] w-[4rem] flex items-center justify-center">
                <GoHeart className="w-[2rem] h-[1.7rem]" />
              </button>
            </div>
          </div>
        </section>
        <RelatedProducts />
      </main>

      <Footer />
    </section>
  );
};

export default ProductPage;
