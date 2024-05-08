"use client";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import CheckoutItem from "../components/checkout/CheckoutItem";
import RadioInput from "../UI/RadioInput";
import Button from "../UI/Button";

const Checkout = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    country: "",
    phoneNumber: "",
    email: "",
    saveInfo: true,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Name is required"),
  });

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("bank");
  const [couponCode, setCouponCode] = useState("");

  const handlePaymentMethodChange = (value: string) => {
    setSelectedPaymentMethod(value);
  };

  return (
    <MainLayout>
      <main className="px-[3rem] md:px-[7rem] lg:px-[10rem] lg:mt-[4rem]">
        <div className="flex gap-[1rem]">
          <Link href={""} className="text-[1.4rem] text-gray-500">
            Home
            {" / "}
          </Link>
          <Link href={""} className="text-[1.4rem] text-gray-500">
            Product
            {" / "}
          </Link>
          <Link href={"/cart"} className="text-[1.4rem] text-gray-500">
            Cart
            {" / "}
          </Link>
          <Link href={""} className="text-[1.4rem] text-black">
            Checkout
          </Link>
        </div>
        <div className="mt-[3.5rem]">
          <h1 className="text-[3.6rem]">Billing Details</h1>
          <div className="flex flex-col md:flex-row justify-between gap-[3rem] relative pb-[7rem] md:pb-0">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {}}
            >
              {({
                values,
                handleChange,
                handleBlur,
                errors,
                touched,
                setValues,
              }) => (
                <Form className="flex flex-col gap-[1.5rem] basis-[40%]">
                  <div>
                    <label className="text-[1.6rem] block text-gray-300 mb-[1rem]">
                      First Name <span className="text-[#db4444] ">*</span>
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      className="bg-gray-100 px-[1rem] h-[5rem] w-full rounded"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-[1.2rem] mt-[1rem]"
                    />
                  </div>
                  <div>
                    <label className="text-[1.6rem] block text-gray-300 mb-[1rem]">
                      Last Name <span className="text-[#db4444] ">*</span>
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      className="bg-gray-100 px-[1rem] h-[5rem] w-full rounded"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-[1.2rem] mt-[1rem]"
                    />
                  </div>
                  <div>
                    <label className="text-[1.6rem] block text-gray-300 mb-[1rem]">
                      Street Address <span className="text-[#db4444] ">*</span>
                    </label>
                    <Field
                      type="text"
                      name="streetAddress"
                      className="bg-gray-100 px-[1rem] h-[5rem] w-full rounded"
                    />
                    <ErrorMessage
                      name="streetAddress"
                      component="div"
                      className="text-red-500 text-[1.2rem] mt-[1rem]"
                    />
                  </div>
                  <div>
                    <label className="text-[1.6rem] block text-gray-300 mb-[1rem]">
                      Apartment, floor, etc. (optional){" "}
                    </label>
                    <Field
                      type="text"
                      name="apartment"
                      className="bg-gray-100 px-[1rem] h-[5rem] w-full rounded"
                    />
                    <ErrorMessage
                      name="apartment"
                      component="div"
                      className="text-red-500 text-[1.2rem] mt-[1rem]"
                    />
                  </div>
                  <div>
                    <label className="text-[1.6rem] block text-gray-300 mb-[1rem]">
                      Phone Number<span className="text-[#db4444] ">*</span>
                    </label>
                    <Field
                      type="text"
                      name="phoneNumber"
                      className="bg-gray-100 px-[1rem] h-[5rem] w-full rounded"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500 text-[1.2rem] mt-[1rem]"
                    />
                  </div>
                  <div>
                    <label className="text-[1.6rem] block text-gray-300 mb-[1rem]">
                      Email <span className="text-[#db4444] ">*</span>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="bg-gray-100 px-[1rem] h-[5rem] w-full rounded"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-[1.2rem] mt-[1rem]"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      checked={values.saveInfo}
                      onChange={(e) =>
                        setValues({ ...values, saveInfo: e.target.checked })
                      }
                      onBlur={handleBlur}
                      className="h-[2.4rem] cursor-pointer  w-[2.4rem] rounded border-2 border-red-500 mr-2 appearance-none transition-colors duration-300 ease-in-out checked:bg-red-500 checked:border-transparent focus:outline-none"
                    />
                    <label
                      htmlFor="saveInfo"
                      className="text-[1.4rem]  cursor-pointer relative"
                    >
                      Save this information for faster check-out next time
                      {values.saveInfo && (
                        <span className="absolute inset-0 flex justify-center items-center">
                          <p className="text-[1.4rem] text-white -left-[2.2rem] absolute">
                            ✓
                          </p>
                        </span>
                      )}
                    </label>
                  </div>
                  <Button className="absolute bottom-[0%] md:right-[30%] lg:right-[27%] xl:right-[25.5%]">
                    Place Order
                  </Button>
                </Form>
              )}
            </Formik>
            <section className="basis-[30%] flex flex-col gap-[2rem]">
              <div className="flex flex-col gap-[2rem]">
                <CheckoutItem />
                <CheckoutItem />
              </div>
              <div className="flex justify-between border-b border-gray-500 pb-[1rem] ">
                <span className="text-[1.4rem]">Subtotal:</span>
                <span className="text-[1.4rem]">$1556</span>
              </div>
              <div className="flex justify-between border-b border-gray-500 pb-[1rem] ">
                <span className="text-[1.4rem]">Shipping:</span>
                <span className="text-[1.4rem]">Free</span>
              </div>
              <div className="flex justify-between pb-[1rem] ">
                <span className="text-[1.4rem]">Total:</span>
                <span className="text-[1.4rem]">$1750</span>
              </div>
              <div className="flex justify-between items-center mt-[2rem]">
                <RadioInput
                  id="bank"
                  name="paymentMethod"
                  checked={selectedPaymentMethod === "bank"}
                  onChange={() => handlePaymentMethodChange("bank")}
                  label="Bank"
                />
                <Image src={"/cards.png"} alt="" width={192} height={28} />
              </div>
              <RadioInput
                id="cash"
                name="paymentMethod"
                checked={selectedPaymentMethod === "cash"}
                onChange={() => handlePaymentMethodChange("cash")}
                label="Cash on delivery"
              />
              <form className="flex gap-[1.7rem]">
                <input
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon Code"
                  className="border  border-gray-400 rounded h-[4rem] md:h-[5.6rem] p-[1.5rem] w-[23rem] xl:w-[30rem] text-[1.6rem]"
                />
                <Button>Apply Coupon</Button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Checkout;
