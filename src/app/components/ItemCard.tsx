"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { ItemCardProps } from "../types";
import { Rating } from "react-simple-star-rating";

const ItemCard: React.FC<ItemCardProps> = ({
  name,
  price,
  discount,
  image,
  totalRating,
  rating,
}) => {
  const [liked, setLiked] = useState(false);
  const getNewPrice = ({
    price,
    discount,
  }: {
    price: number;
    discount: number | undefined;
  }) => {
    if (discount) {
      let discountVal = (discount / 100) * price;
      let newPrice = price - discountVal;
      return newPrice;
    }
  };
  return (
    <div className="max-w-[27rem] group">
      <div className="relative bg-[#f5f5f5] flex flex-col justify-center items-center  rounded w-[20rem] h-[16rem] md:w-[27rem] md:h-[25rem]">
        {discount && (
          <span className="bg-[#db4444] absolute left-[3%] top-[4%] w-[5.5rem] h-[2.6rem] rounded text-white flex justify-center items-center">
            -{discount}%
          </span>
        )}

        <Image
          src={image}
          alt={name}
          className="mt-[2.5rem] object-contain w-[13rem] h-[12rem] md:w-[19rem] md:h-[18rem]"
          width={190}
          height={180}
        />
        <div className="flex flex-col  gap-[1rem] absolute right-[3%] top-[4%]">
          <button
            onClick={() => setLiked(!liked)}
            className="bg-white w-[3.4rem] h-[3.4rem] flex justify-center items-center rounded-full hover:border "
          >
            {liked ? (
              <GoHeartFill className="w-[1.6rem] h-[1.4rem] text-[#db4444]" />
            ) : (
              <GoHeart className="w-[1.6rem] h-[1.4rem]" />
            )}
          </button>
          <button className="bg-white w-[3.4rem] h-[3.4rem] flex justify-center items-center rounded-full hover:border">
            <IoEyeOutline className="w-[1.6rem] h-[1.4rem]" />
          </button>
        </div>
        <button className="mt-[1rem] group-hover:opacity-100  opacity-0 w-full h-[4.1rem] bg-black text-white text-[1.6rem] font-medium ease-in-out duration-500">
          Add to cart
        </button>
      </div>
      <div className="flex flex-col gap-[1rem] mt-[1rem]">
        <h5 className="text-[1.6rem] font-medium ">{name}</h5>
        <p className="text-[#bd4444] text-[1.6rem]">
          {!discount ? (
            `$${price}`
          ) : (
            <>
              ${getNewPrice({ price, discount })}{" "}
              <span className="text-[#7D8184] line-through">${price}</span>
            </>
          )}
        </p>
        <div className="flex items-center gap-3">
          <Rating
            initialValue={rating}
            readonly
            allowFraction
            style={{ display: "flex", flexDirection: "row" }}
            SVGstyle={{ display: "inline" }}
            size={20}
          />

          <span className="text-[1.4rem] text-[#7d8184] font-semibold">
            ({totalRating})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
