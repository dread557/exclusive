"use client";
import React from "react";
import Image from "next/image";
import { convertCurrency } from "@/utils/misc";
import { GetItemFromLocalStorage } from "@/utils/localStorageHelper";

const CheckoutItem = ({
  name,
  _id,
  count,
  price,
  image,
}: {
  name: string;
  _id: number;
  price: number;
  image: string;
  count: number;
}) => {
  const currency = GetItemFromLocalStorage("currency");
  const convertedPrice = parseFloat(convertCurrency(price, currency));
  const subtotal = convertedPrice * count;
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[1.2rem]">
        <Image src={image} width={48} height={42} alt="product" />
        <p className="text-[1.6rem]">
          {name} <span className="ml-2">({count})</span>
        </p>
      </div>
      <p className="text-[1.6rem]">
        {" "}
        {`${currency === "USD" ? "$" : "₦"}${subtotal.toLocaleString()}`}
      </p>
    </div>
  );
};

export default CheckoutItem;
