"use client";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import Button from "../../UI/Button";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <main className=" mt-[4rem] flex flex-col gap-[3rem] justify-center items-center">
        <h1 className="text-[2rem]">Thank you for shopping with us!</h1>
        <Button onClick={() => router.push("/")}>Go back to shop</Button>
      </main>
    </MainLayout>
  );
};

export default Success;
