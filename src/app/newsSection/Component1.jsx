import React from "react";
import CartTop from "./CartTop";
import photo from "./photos/drozdzowa.png";
import Image from "next/image";
import { usePopupStore } from "../state/store";
import { motion } from "framer-motion";

const Component1 = () => {
  const { component, setComponent } = usePopupStore();

  const handleClick = () => {
    setComponent(
      <motion.div className="w-full h-full" layoutId="photo">
        <Image
          alt="photo of image"
          className="object-cover rounded-md aspect-auto w-full h-full
            pointer-events-none max-w-[90vw] max-h-[90vh]"
          src={photo}
        />
      </motion.div>
    );
  };
  return (
    <article className="mx-2  my-4 ">
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
        <motion.div onTap={handleClick} layoutId="photo"
        transition={{duration: .25, ease: "easeIn"}}
        >
          <Image
            alt="photo of image"
            className="object-cover max-h-72 rounded-md 
          pointer-events-none sm:max-h-[20rem] md:max-h-[30rem] lg:max-h-[35rem]"
            src={photo}
          />
        </motion.div>
      </div>
    </article>
  );
};

export default Component1;
