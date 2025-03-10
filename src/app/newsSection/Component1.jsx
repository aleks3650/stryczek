import React from "react";
import CartTop from "./CartTop";
import photo from "./photos/drozdzowa.png";
import Image from "next/image";

const Component1 = () => {
  return (
    <article className="mx-2 h-full my-4 ">
      <CartTop date="2 marca o 15:49" />
      <div className="flex flex-col md:flex-row">
        <div className="">
          <p className="mt-4 text-lg text-gray-800 leading-relaxed lg:text-3xl">
            A do niedzielnej kawy Słodka Pętelka poleca drożdżówkę z serem 😊
          </p>
          <div className="mt-4 text-gray-600 text-sm italic mb-2 lg:text-2xl">
            Ps. Żałuję, że nie mogę Wam tutaj przekazać jaki zapach unosił się
            wczoraj podczas pieczenia tych słodkości 😊
          </div>
        </div>
        <Image
          alt="photo of image"
          className="aspect-square object-cover rounded-md md:w-2/3 lg:w-1/2 pointer-events-none"
          src={photo}
        />
      </div>
    </article>
  );
};

export default Component1;
