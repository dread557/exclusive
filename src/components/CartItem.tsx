import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GetItemFromLocalStorage } from "@/utils/localStorageHelper";
import Link from "next/link";
import { convertCurrency } from "@/utils/misc";
import { CartItem, useCartStore } from "@/store/cart";

const CartItem = ({ name, price, image, _id, count, slug }: CartItem) => {
  const currency = GetItemFromLocalStorage("currency");
  const removeItem = useCartStore((state) => state.remove);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const [quantity, setQuantity] = useState(count);

  useEffect(() => {
    setQuantity(count);
  }, [count]);

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
      updateQuantity(_id, newQuantity);
    } else {
      setQuantity(count);
    }
    // setQuantity(newQuantity)
  };

  const convertedPrice = parseFloat(convertCurrency(price, currency));
  const subtotal = !isNaN(quantity) ? convertedPrice * quantity : 0;
  return (
    <div className="group md:grid grid-cols-4 py-[2.5rem] px-[4rem] rounded shadow-lg items-center  relative">
      <div className="flex justify-between md:justify-start  mb-[1.5rem] md:mb-0 gap-[1rem] items-center">
        <div className="relative">
          <Image src={image} alt="" width={50} height={39} />
          <button
            onClick={() => removeItem(_id)}
            className="hidden md:group-hover:block absolute -top-[8px] -left-[8px]"
          >
            <Image src={"/remove.svg"} alt="" width={24} height={24} />
          </button>
        </div>
        <Link
          href={`/products/${slug}`}
          className="text-[1.6rem] capitalize underline"
        >
          {name}
        </Link>
      </div>
      <div className="flex flex-col md:hidden gap-[1rem]">
        <div className="flex justify-between border-b border-dashed pb-[1rem]">
          <span className="text-[1.6rem] ">Price</span>
          <p className="text-[1.6rem]">
            {" "}
            {`${currency === "USD" ? "$" : "₦"}${convertedPrice.toLocaleString()}`}
          </p>
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
          <p className="text-[1.6rem] justify-self-center">
            {" "}
            {`${currency === "USD" ? "$" : "₦"}${subtotal.toLocaleString()}`}
          </p>
        </div>
      </div>
      <p className="hidden md:block text-[1.6rem]">
        {" "}
        {`${currency === "USD" ? "$" : "₦"}${convertedPrice.toLocaleString()}`}
      </p>
      <input
        className="hidden md:block w-[7.2rem] h-[4.4rem] border border-gray-400 rounded text-[1.6rem] text-center outline-black"
        type="number"
        value={quantity}
        onChange={(e) => handleQuantity(e)}
      />
      <p className=" hidden md:block text-[1.6rem] justify-self-center">
        {`${currency === "USD" ? "$" : "₦"}${subtotal.toLocaleString()}`}
      </p>
      <button
        onClick={() => removeItem(_id)}
        className="block md:hidden absolute -top-[8px] -right-[8px]"
      >
        <Image src={"/remove.svg"} alt="" width={24} height={24} />
      </button>
    </div>
  );
};

export default CartItem;
