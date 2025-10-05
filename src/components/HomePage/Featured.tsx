import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const Featured = () => {
  return (
    <section className="mx-[3rem] md:mx-[7rem] lg:mx-[10rem] pt-[6.5rem] border-black  md:pb-[6.5rem] ">
      <SectionHeader title="Featured" />
      <h4 className="text-black text-[2.3rem] md:text-[3.6rem] font-semibold mt-[2rem]">
        New Arrival
      </h4>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-4 grid-rows-4 h-[60rem] mt-[3.5rem]">
        <div
          className=" flex flex-col justify-end p-[3rem] gap-[2rem] bg-no-repeat bg-black row-span-4 col-span-2 bg-bottom bg-contain md:bg-auto"
          style={{ backgroundImage: "url('/p5bg.png')" }}
        >
          <h5 className="text-[1.8rem] md:text-[2.4rem] font-semibold text-white">
            PlayStation 5
          </h5>
          <p className="text-[1.4rem] text-white max-w-[25.5rem]">
            Black and White version of the PS5 coming out on sale.
          </p>
          <button className="max-w-max  text-[1.6rem] border-b text-white">
            Shop Now
          </button>
        </div>
        <div
          className=" flex flex-col justify-end p-[3rem] gap-[2rem] bg-no-repeat bg-black col-span-2 row-span-2 bg-right  bg-contain md:bg-auto"
          style={{ backgroundImage: "url('/wman.png')" }}
        >
          <h5 className="text-[1.8rem] md:text-[2.4rem] font-semibold text-white">
            Women’s Collections
          </h5>
          <p className="text-[1.4rem] text-white max-w-[25.5rem]">
            Featured woman collections that give you another vibe.
          </p>
          <button className="max-w-max  text-[1.6rem] border-b text-white">
            Shop Now
          </button>
        </div>
        <div
          className=" flex flex-col md:justify-end p-[3rem] gap-[2rem] bg-no-repeat bg-black row-span-2 bg-center  bg-contain md:bg-auto"
          style={{ backgroundImage: "url('/speaker.png')" }}
        >
          <h5 className="text-[1.8rem] md:text-[2.4rem] font-semibold text-white">
            Speakers
          </h5>
          <p className="text-[1.4rem] text-white">Amazon wireless speakers</p>
          <button className="max-w-max  text-[1.6rem] border-b text-white">
            Shop Now
          </button>
        </div>
        <div
          className=" flex flex-col justify-end p-[3rem] gap-[2rem] bg-no-repeat bg-black row-span-2 bg-center  bg-contain md:bg-auto"
          style={{ backgroundImage: "url('/perf.png')" }}
        >
          <h5 className="text-[1.8rem] md:text-[2.4rem] font-semibold text-white">
            Perfume
          </h5>
          <p className="text-[1.4rem] text-white">GUCCI INTENSE OUD EDP</p>
          <button className="max-w-max  text-[1.6rem] border-b text-white">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row md:justify-center mt-[4.5rem] gap-[3.5rem]">
        <div className="flex flex-col  justify-center items-center gap-[1.7rem]">
          <Image
            src={"/s1.svg"}
            className="w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem]"
            width={80}
            height={80}
            alt=""
          />
          <h5 className="text-[2rem] font-semibold">FREE AND FAST DELIVERY</h5>
          <p className="text-[1.4rem]">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center gap-[1.7rem]">
          <Image
            src={"/s2.svg"}
            className="w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem]"
            width={80}
            height={80}
            alt=""
          />
          <h5 className="text-[2rem] font-semibold">24/7 CUSTOMER SERVICE</h5>
          <p className="text-[1.4rem]">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col  justify-center items-center gap-[1.7rem]">
          <Image
            src={"/s3.svg"}
            className="w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem]"
            width={80}
            height={80}
            alt=""
          />
          <h5 className="text-[2rem] font-semibold">MONEY BACK GUARANTEE</h5>
          <p className="text-[1.4rem]">We reurn money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
