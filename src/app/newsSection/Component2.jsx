import React from "react";
import CartTop from "./CartTop";
import Image from "next/image";
import { usePopupStore } from "../state/store";
import { motion } from "framer-motion";

// Import dwóch różnych zdjęć
import photo1 from "./photos/cake1.jpg";
import photo2 from "./photos/cake2.jpg";

const Component1 = () => {
  const { setComponent } = usePopupStore();

  const handleImageClick = (imageSrc) => {
    setComponent(
      <motion.div className="w-full h-full" layoutId={`photo-${imageSrc.src}`}>
        <Image
          alt="Enlarged content preview"
          className="object-contain rounded-md aspect-auto w-full h-full
            pointer-events-none max-w-[90vw] max-h-[90vh]"
          src={imageSrc}
          priority
        />
      </motion.div>
    );
  };

  return (
    <article className="mx-2 my-2 h-fit" >
      <CartTop date="9 marca o 14:23" />
      
      <div className="flex flex-col lg:flex-row md:gap-6">
        <div className="flex-1">
          <p className="mt-4 text-lg text-gray-800 leading-relaxed lg:text-3xl">
            Dzisiejszy poranek ozdobią dwa specjały: klasyczna drożdżówka domowej roboty 
            oraz chrupiące croissanty z masłem ekstra!
          </p>
          
          <div className="mt-4 text-gray-600 text-sm italic mb-2 lg:text-2xl">
            Pssst... Sekretny składnik? Miłość do pieczenia! 🧡
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4 md:flex-row md:items-start md:gap-6 md:flex-none">
          <motion.div 
            onTap={() => handleImageClick(photo1)}
            layoutId={`photo-${photo1.src}`}
            transition={{ duration: 0.25, ease: "easeIn" }}
            className="cursor-pointer flex-1"
          >
            <Image
              alt="photo"
              className="object-cover w-full h-64 rounded-md shadow-lg
                hover:shadow-xl transition-shadow duration-200 pointer-events-none
                sm:h-72 md:h-80 "
              src={photo1}
              placeholder="blur"
            />
          </motion.div>

          <motion.div 
            onTap={() => handleImageClick(photo2)}
            layoutId={`photo-${photo2.src}`}
            transition={{ duration: 0.25, ease: "easeIn" }}
            className="cursor-pointer flex-1"
          >
            <Image
              alt="Photo"
              className="object-cover w-full h-64 rounded-md shadow-lg
                hover:shadow-xl transition-shadow duration-200 pointer-events-none
                sm:h-72 md:h-80 "
              src={photo2}
              placeholder="blur"
            />
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default Component1;