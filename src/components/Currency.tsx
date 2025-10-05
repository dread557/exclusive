"use client";
import {
  GetItemFromLocalStorage,
  SetItemToLocalStorage,
} from "@/utils/localStorageHelper";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Currency = () => {
  const router = useRouter();
  const prevCurrency = GetItemFromLocalStorage("currency");
  const [currency, setCurrency] = useState(prevCurrency);

  const handleCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
    SetItemToLocalStorage("currency", e.target.value);
    router.refresh();
  };
  return (
    <select
      name="currrency"
      value={currency}
      onChange={handleCurrency}
      className="bg-black text-white w-[60px] outline-none mx-4"
    >
      <option value="NGN">NGN</option>
      <option value="USD">USD</option>
    </select>
  );
};

export default Currency;
