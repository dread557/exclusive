"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { ProductCardProps } from "../../types";
import { Rating } from "react-simple-star-rating";
import { useRouter } from "next/navigation";
import { GetItemFromLocalStorage } from "@/utils/localStorageHelper";
import { convertCurrency } from "@/utils/misc";
import { useCartStore } from "@/store/cart";
import { useFavStore } from "@/store/favorites";

const ProductCard: React.FC<ProductCardProps> = (product) => {
  const {
    _id,
    name,
    price,
    discount,
    image,
    totalRating,
    rating,
    type = "product",
    slug,
    description,
  } = product;
  const addToCart = useCartStore((state) => state.add);
  const like = useFavStore((state) => state.add);
  const unLike = useFavStore((state) => state.remove);
  const [convertedPrice, setConvertedPrice] = useState(0);
  const [selectedCurrrency, setSelectedCurrrency] = useState("NGN");
  const currency = GetItemFromLocalStorage("currency");
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  const handleLike = (product: ProductCardProps) => {
    if (liked) {
      setLiked(false);
      unLike(product._id);
    } else {
      setLiked(true);
      like(product);
    }
  };

  const getNewPrice = (price: number, discount: number | undefined) => {
    if (discount) {
      let discountVal = (discount / 100) * price;
      let newPrice = price - discountVal;
      return newPrice.toFixed(2).toLocaleString();
    }
  };

  useEffect(() => {
    const newConvertedPrice = parseFloat(convertCurrency(price, currency));
    setConvertedPrice(newConvertedPrice);
    setSelectedCurrrency(currency);
  }, [price, currency]);
  return (
    <div className="md:max-w-[27rem] group max-w-full">
      <div className="relative bg-[#f5f5f5] flex flex-col justify-center items-center  rounded  md:w-[27rem] md:h-[25rem]">
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
        {type === "product" ? (
          <div className="flex flex-col  gap-[1rem] absolute right-[3%] top-[4%]">
            <button
              onClick={() => handleLike(product)}
              className="bg-white w-[3.4rem] h-[3.4rem] flex justify-center items-center rounded-full hover:border "
            >
              {liked ? (
                <GoHeartFill className="w-[1.6rem] h-[1.4rem] text-[#db4444]" />
              ) : (
                <GoHeart className="w-[1.6rem] h-[1.4rem]" />
              )}
            </button>
            <button
              onClick={() => router.push(`/products/${slug}`)}
              className="bg-white w-[3.4rem] h-[3.4rem] flex justify-center items-center rounded-full hover:border"
            >
              <IoEyeOutline className="w-[1.6rem] h-[1.4rem]" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => handleLike(product)}
            className="bg-white w-[3.4rem] h-[3.4rem] flex justify-center items-center rounded-full hover:border absolute right-[3%] top-[4%]"
          >
            <svg
              className="w-[1.6rem] h-[1.4rem]"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 3.57143H2.33333L3.66667 19H14.3333L15.6667 3.57143H1M9 7.42857V15.1429M12.3333 7.42857L11.6667 15.1429M5.66667 7.42857L6.33333 15.1429M6.33333 3.57143L7 1H11L11.6667 3.57143"
                stroke="black"
                strokeWidth="1.56"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <button
          onClick={() =>
            addToCart({
              _id,
              name,
              price,
              discount,
              image,
              totalRating,
              rating,
              type,
              slug,
              description,
            })
          }
          className="mt-[1rem] group-hover:opacity-100  opacity-0 w-full h-[4.1rem] bg-black text-white text-[1.6rem] font-medium ease-in-out duration-500"
        >
          Add to cart
        </button>
      </div>
      <div className="flex flex-col gap-[1rem] mt-[1rem]">
        <h5 className="text-[1.6rem] font-medium ">{name}</h5>
        <p className="text-[#bd4444] text-[1.6rem]">
          {!discount ? (
            `${selectedCurrrency === "USD" ? "$" : "₦"}${convertedPrice.toLocaleString()}`
          ) : (
            <>
              <span>
                {selectedCurrrency === "USD" ? "$" : "₦"}{" "}
                {getNewPrice(convertedPrice, discount)}{" "}
              </span>

              <span className="text-[#7D8184] line-through">
                {`${selectedCurrrency === "USD" ? "$" : "₦"}${convertedPrice.toLocaleString()}`}
              </span>
            </>
          )}
        </p>
        {rating && (
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
        )}
      </div>
    </div>
  );
};

export default ProductCard;
