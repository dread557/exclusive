"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Button from "../../UI/Button";
import MainLayout from "../layouts/MainLayout";
import CartItem from "../../components/CartItem";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { GetItemFromLocalStorage } from "@/utils/localStorageHelper";
import { convertCurrency } from "@/utils/misc";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const currency = GetItemFromLocalStorage("currency");
  const SHIPPING_FEE = parseFloat(convertCurrency(0, currency));
  const removeAll = useCartStore((state) => state.removeAll);
  const router = useRouter();
  const [couponCode, setCouponCode] = useState("");
  const subTotal = parseFloat(
    convertCurrency(
      cart.length >= 1
        ? cart.reduce((total, item) => total + item.price * item.count, 0)
        : 0,
      currency
    )
  );
  const total = subTotal + SHIPPING_FEE;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }
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
          {cart.length == 0 ? (
            <div className="flex flex-col gap-3 items-center justify-center my-[4rem]">
              <MdOutlineRemoveShoppingCart className="w-[20rem] h-[20rem]" />
              <p className="text-[2rem]">No Item in cart</p>
            </div>
          ) : (
            <>
              <div className="hidden md:grid grid-cols-4 py-[2.5rem] px-[4rem] rounded shadow-lg items-center">
                <h6 className="text-[1.6rem] ">Product</h6>
                <h6 className="text-[1.6rem] ">Price</h6>
                <h6 className="text-[1.6rem] ">Quantity</h6>
                <h6 className="text-[1.6rem] justify-self-center ">SubTotal</h6>
              </div>
              {cart.map((item) => (
                <CartItem key={item._id} {...item} />
              ))}
            </>
          )}
          <div className="flex justify-between gap-[1rem]">
            <Button
              onClick={() => router.push("/products")}
              btnType="secondary"
            >
              Return To Shop
            </Button>
            {cart.length >= 1 && (
              <Button
                onClick={() => removeAll()}
                btnType="secondary"
                size="19.5rem"
              >
                Clear Cart
              </Button>
            )}
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-[4rem]">
            <form onSubmit={onSubmit} className="flex gap-[1.7rem]">
              <input
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Coupon Code"
                className="border  border-gray-400 rounded h-[4rem] md:h-[5.6rem] p-[1.5rem] w-[23rem] xl:w-[30rem] text-[1.6rem]"
              />
              <Button disabled={cart.length == 0 || !couponCode}>
                Apply Coupon
              </Button>
            </form>
            <section className="p-[2rem] flex flex-col gap-[1.5rem] border border-gray-500 rounded w-full mt-[2rem] md:mt-0 md:w-[35rem] xl:w-[43rem]">
              <h5 className="text-[2rem] mb-2">Cart Total</h5>
              <div className="flex justify-between border-b border-gray-500 pb-[1rem]">
                <span className="text-[1.4rem]">Subtotal:</span>
                <span className="text-[1.4rem]">
                  {" "}
                  {`${currency === "USD" ? "$" : "₦"}${subTotal.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-500 pb-[1rem]">
                <span className="text-[1.4rem]">Shipping:</span>
                <span className="text-[1.4rem]">
                  {" "}
                  {SHIPPING_FEE === 0 ? "Free" : 0}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-500 pb-[1rem]">
                <span className="text-[1.4rem]">Total:</span>
                <span className="text-[1.4rem]">
                  {" "}
                  {`${currency === "USD" ? "$" : "₦"}${total.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-center">
                <Button
                  disabled={cart.length === 0}
                  onClick={() => router.push("/checkout")}
                >
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
