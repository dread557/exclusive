"use client";
import Button from "@/UI/Button";
import { useRouter } from "next/navigation";
import React from "react";

const ViewAllButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/products")}>View all products</Button>
  );
};

export default ViewAllButton;
