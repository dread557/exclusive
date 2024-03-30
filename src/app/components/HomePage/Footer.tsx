import React from "react";
import { VscSend } from "react-icons/vsc";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-black mt-[9rem]  md:mx-[7rem] lg:mx-[10rem]   pt-[6.5rem]  pb-[6.5rem] px-[6.5rem]">
      <section className=" flex flex-col md:flex-row justify-between gap-[2rem]">
        <ul className="flex flex-col gap-[1rem] ">
          <li className="text-[2.4rem] font-bold text-white">Exclusive</li>
          <li className="text-[2rem] font-medium text-white">Subscribe</li>
          <div className="flex flex-col gap-[1rem] ">
            <li className="text=[1.6rem] text-white">
              Get 10% off your first order
            </li>
            <li className="max-w-[21.7rem] relative">
              <input
                className="border border-white rounded placeholder:text-white text-white bg-transparent p-[1rem] w-full"
                placeholder="Enter your email"
              />
              <button className="absolute right-[10%] top-[23%]">
                <VscSend className="text-white w-[2rem] h-[2rem]" />
              </button>
            </li>
          </div>
        </ul>
        <ul className="flex flex-col gap-[1.8rem] ">
          <li className="text-[2rem] font-medium text-white">Support</li>
          <li className="text-white text-[1.1rem] md:max-w-[17.5rem] ">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </li>
          <li className="text-white text-[1.1rem]">exclusive@gmail.com</li>
          <li className="text-white text-[1.1rem]"> +88015-88888-9999</li>
        </ul>
        <ul className="flex flex-col gap-[1.8rem]">
          <li className="text-[2rem] font-medium text-white">Account</li>
          <li className="text-white text-[1.1rem]">My Account</li>
          <li className="text-white text-[1.1rem]">Login / Register</li>
          <li className="text-white text-[1.1rem]"> Cart</li>
          <li className="text-white text-[1.1rem]">Wishlist</li>
          <li className="text-white text-[1.1rem]"> Shop</li>
        </ul>
        <ul className="flex flex-col gap-[1.8rem]">
          <li className="text-[2rem] font-medium text-white">Quick Link</li>
          <li className="text-white text-[1.1rem]">Privacy Policy</li>
          <li className="text-white text-[1.1rem]">Terms Of Use</li>
          <li className="text-white text-[1.1rem]"> FAQ</li>
          <li className="text-white text-[1.1rem]">Contact</li>
        </ul>
        <ul className="flex flex-col gap-[1.8rem]">
          <li className="text-[2rem] font-medium text-white">Download App</li>
          <p className="">Save $3 with App New User Only</p>
          <div className="grid grid-cols-2 grid-rows-2 gap-[2rem]">
            <Image
              className="row-span-2"
              src={"/qr.svg"}
              width={80}
              height={80}
              alt="qr code"
            />
            <button>
              <Image
                className=""
                src={"/pstore.svg"}
                width={80}
                height={80}
                alt="play store"
              />
            </button>
            <button>
              <Image
                className=""
                src={"/astore.svg"}
                width={80}
                height={80}
                alt="apple store"
              />
            </button>
          </div>
        </ul>
      </section>
      <p className="text-center text-[1.6rem] text-gray-500 mt-[3rem]">
        Designed by Rimel 2022. Developed by{" "}
        <a
          target="_blank"
          className="underline"
          href="https://www.github.com/dread557"
        >
          dread
        </a>
      </p>
    </section>
  );
};

export default Footer;
