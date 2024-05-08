"use client";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import Image from "next/image";

const Auth = () => {
  return (
    <MainLayout>
      <main className=" flex flex-col md:flex-row md:mt-[4rem] justify-between gap-[2rem]">
        <div className="basis-[50%]">
          <Image src={"/authImg.png"} width={805} height={781} alt="" />
        </div>

        <section className=" mr-[3rem] md:mr-[7rem] lg:mr-[10rem] basis-[50%] flex flex-col justify-center items-center gap-[2rem]">
          <h1 className=" text-[2rem] md:text-[3.6rem] font-medium text-center">
            Login / Register
          </h1>
          <button className="flex gap-[1.5rem] items-center text-[1.6rem] border-b border-gray-500 pb-[.5rem]">
            <Image src={"/g.svg"} width={24} height={24} alt="google" />
            Sign up with Google
          </button>
        </section>
      </main>
    </MainLayout>
  );
};

export default Auth;
