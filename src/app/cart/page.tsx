"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../UI/Button";
import MainLayout from "../layouts/MainLayout";
import CartItem from "../components/CartItem";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const [couponCode, setCouponCode] = useState("");
  return (
    <MainLayout>
      <main className="px-[3rem] md:px-[7rem] lg:px-[10rem] lg:mt-[4rem]">
        <div className="flex gap-[1rem]">
          <Link href={""} className="text-[1.4rem] text-gray-500">
            Home
            {" / "}
          </Link>
          <Link href={""} className="text-[1.4rem] text-black">
            Cart
          </Link>
        </div>

        <section className="flex flex-col gap-[3rem] mt-[5rem]">
          <div className="hidden md:grid grid-cols-4 py-[2.5rem] px-[4rem] rounded shadow-lg items-center">
            <h6 className="text-[1.6rem] ">Product</h6>
            <h6 className="text-[1.6rem] ">Price</h6>
            <h6 className="text-[1.6rem] ">Quantity</h6>
            <h6 className="text-[1.6rem] justify-self-center ">SubTotal</h6>
          </div>
          {/* map here */}
          <CartItem />

          <div className="flex justify-between gap-[1rem]">
            <Button btnType="secondary">Return To Shop</Button>
            <Button btnType="secondary" size="19.5rem">
              Update Cart
            </Button>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-[4rem]">
            <form className="flex gap-[1.7rem]">
              <input
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Coupon Code"
                className="border  border-gray-400 rounded h-[4rem] md:h-[5.6rem] p-[1.5rem] w-[23rem] xl:w-[30rem] text-[1.6rem]"
              />
              <Button>Apply Coupon</Button>
            </form>
            <section className="p-[2rem] flex flex-col gap-[1.5rem] border border-gray-500 rounded w-full mt-[2rem] md:mt-0 md:w-[35rem] xl:w-[43rem]">
              <h5 className="text-[2rem] mb-2">Cart Total</h5>
              <div className="flex justify-between border-b border-gray-500 pb-[1rem]">
                <span className="text-[1.4rem]">Subtotal:</span>
                <span className="text-[1.4rem]">$1556</span>
              </div>
              <div className="flex justify-between border-b border-gray-500 pb-[1rem]">
                <span className="text-[1.4rem]">Shipping:</span>
                <span className="text-[1.4rem]">Free</span>
              </div>
              <div className="flex justify-between border-b border-gray-500 pb-[1rem]">
                <span className="text-[1.4rem]">Total:</span>
                <span className="text-[1.4rem]">$1750</span>
              </div>
              <div className="flex justify-center">
                <Button onClick={() => router.push("/checkout")}>
                  Proceed to checkout
                </Button>
              </div>
            </section>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Cart;
