import React, { useState } from "react";
import Image from "next/image";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    } else {
      setQuantity(1);
    }
  };

  const subtotal = !isNaN(quantity) ? 640 * quantity : 0;

  return (
    <div className="group md:grid grid-cols-4 py-[2.5rem] px-[4rem] rounded shadow-lg items-center  relative">
      <div className="flex justify-between md:justify-start  mb-[1.5rem] md:mb-0 gap-[1rem] items-center">
        <div className="relative">
          <Image src={"/mon.png"} alt="" width={50} height={39} />
          <button className="hidden md:group-hover:block absolute -top-[8px] -left-[8px]">
            <Image src={"/remove.svg"} alt="" width={24} height={24} />
          </button>
        </div>
        <p className="text-[1.6rem]">LCD Monitor</p>
      </div>
      <div className="flex flex-col md:hidden gap-[1rem]">
        <div className="flex justify-between border-b border-dashed pb-[1rem]">
          <span className="text-[1.6rem] ">Price</span>
          <p className="text-[1.6rem]">$640</p>
        </div>
        <div className="flex justify-between border-b border-dashed pb-[1rem]">
          <span className="text-[1.6rem] ">Quantity</span>
          <input
            className="w-[4.2rem] h-[2.4rem] border border-gray-400 rounded text-[1.6rem] text-center outline-black"
            type="number"
            value={quantity}
            onChange={(e) => handleQuantity(e)}
          />
        </div>
        <div className="flex justify-between">
          <span className="text-[1.6rem] ">Subtotal</span>
          <p className="text-[1.6rem] justify-self-center">${subtotal}</p>
        </div>
      </div>
      <p className="hidden md:block text-[1.6rem]">$640</p>
      <input
        className="hidden md:block w-[7.2rem] h-[4.4rem] border border-gray-400 rounded text-[1.6rem] text-center outline-black"
        type="number"
        value={quantity}
        onChange={(e) => handleQuantity(e)}
      />
      <p className=" hidden md:block text-[1.6rem] justify-self-center">
        ${subtotal}
      </p>
      <button className="block md:hidden absolute -top-[8px] -right-[8px]">
        <Image src={"/remove.svg"} alt="" width={24} height={24} />
      </button>
    </div>
  );
};

export default CartItem;
