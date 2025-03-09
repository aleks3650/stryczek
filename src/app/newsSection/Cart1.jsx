import Image from "next/image";
import React from "react";

const Cart1 = () => {
  return (
    <div className="w-full p-2">
      <div className="flex flex-row justify-between ">
        <div className="flex">
          <Image
            src="/cinamonRoll.png"
            height={64}
            width={64}
            priority
            alt="Słodka Pętelka logo"
            className="mr-2"
          />
          <h2 className="flex flex-col text-2xl">
            <span>słodka</span>
            <span>Pętelka</span>
          </h2>
        </div>
        <h2>Wczoraj o 13:26</h2>
      </div>
    </div>
  );
};

export default Cart1;
