"use client";
import Button from "@/UI/Button";
import Image from "next/image";
import { HiHeart, HiOutlineMinusSmall } from "react-icons/hi2";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { ProductCardProps, ProductDataProps } from "@/types";
import { UrlFor, urlForImage } from "../../../../sanity/lib/image";
import { GetItemFromLocalStorage } from "@/utils/localStorageHelper";
import { convertCurrency } from "@/utils/misc";
import { useFavStore } from "@/store/favorites";
import { useCartStore } from "@/store/cart";
import { useRouter } from "next/navigation";

const ProductDetails = ({ data }: { data: ProductDataProps }) => {
  const {
    _id,
    name,
    price,
    discount,
    images,
    totalRating,
    rating,
    type = "product",
    slug,
    description,
  } = data;
  const currency = GetItemFromLocalStorage("currency");
  const like = useFavStore((state) => state.add);
  const unLike = useFavStore((state) => state.remove);
  const addToCart = useCartStore((state) => state.add);
  // const updateQuantity = useCartStore((state) => state.updateQuantity);
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [bigImage, setBigImage] = useState(data.images[0]);
  const convertedPrice = parseFloat(convertCurrency(data.price, currency));
  const handleLike = (data: ProductCardProps) => {
    if (liked) {
      setLiked(false);
      unLike(data?._id);
    } else {
      setLiked(true);
      like({
        _id,
        name,
        price,
        discount,
        image: UrlFor(images[0]).url(),
        totalRating,
        rating,
        type,
        slug,
        description,
      });
    }
  };
  return (
    <section className="flex flex-col lg:flex-row mt-[4.5rem] gap-[4rem]">
      <div className="flex flex-col-reverse xl:flex-row basis-[75%] gap-[3rem] ">
        <div className="flex xl:flex-col gap-[1.5rem]">
          {data.images?.map((image: any, i) => (
            <button
              key={i}
              className="bg-[#f5f5f5] flex justify-center items-center rounded p-[2rem] md:w-[17rem] h-[8rem] md:h-[10rem] xl:h-[13.8rem]"
              onClick={() => setBigImage(image)}
            >
              <Image
                className="w-[12.1rem] h-[8rem] xl:h-[11.4rem] object-contain"
                src={UrlFor(image).url()}
                alt="product"
                width={121}
                height={114}
              />
            </button>
          ))}
        </div>
        <div className="bg-[#f5f5f5] h-[25rem]  md:h-full w-full  p-5 flex justify-center items-center md:px-[10rem] lg:px-[4rem] md:pt-[6.4rem] md:pb-[3rem] xl:px-[10rem] max-h-[60rem]">
          <Image
            className="w-[23rem] md:w-full max-h-full"
            src={UrlFor(bigImage).url()}
            alt="product"
            width={446}
            height={315}
          />
        </div>
      </div>
      <div className="basis-[25%] flex flex-col gap-[1rem]">
        <h3 className="text-[2.4rem] font-semibold">{data.name}</h3>
        {data.rating && (
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
        )}
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
        <p className="text-black text-[2.4rem]">
          {" "}
          {`${currency === "USD" ? "$" : "₦"}${convertedPrice.toLocaleString()}`}
        </p>
        <p className="text-[1.4rem] mt-[.7rem] pb-[2rem] border-b border-black">
          {data.description}
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
                  // updateQuantity(_id, value);
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
          <Button
            onClick={() => {
              addToCart({
                _id,
                name,
                price,
                discount,
                image: UrlFor(images[0]).url(),
                totalRating,
                rating,
                type,
                slug,
                description,
              });
              router.push(`/cart`);
            }}
            size={"16.5rem"}
            height={"4.4rem"}
          >
            Add To Cart
          </Button>
          <button
            onClick={() =>
              handleLike({
                _id,
                name,
                price,
                discount,
                image: images[0],
                totalRating,
                rating,
                type,
                slug,
                description,
              })
            }
            className="border border-gray-400 rounded h-[4rem] w-[4rem] flex items-center justify-center"
          >
            {liked ? (
              <GoHeartFill className="w-[2rem] h-[1.7rem] text-[#db4444]" />
            ) : (
              <GoHeart className="w-[2rem] h-[1.7rem]" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
