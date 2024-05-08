import React from "react";
import Image from "next/image";

const CheckoutItem = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[1.2rem]">
        <Image src={"/psp.png"} width={48} height={42} alt="product" />
        <span className="text-[1.6rem]">LCD Monitor</span>
      </div>
      <p className="text-[1.6rem]">$650</p>
    </div>
  );
};

export default CheckoutItem;
