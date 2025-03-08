"use client";

import { useMotionValue } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

const IMAGES = [1, 2, 3];
const AMOUNT_OF_IMAGES = IMAGES.length;

const News = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x < -75 && imgIndex < AMOUNT_OF_IMAGES - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x > 75 && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="my-10 relative">
      <h1 className="text-center text-4xl mb-12">Aktualności</h1>
      <div className="container h-[80dvh] mb-16 mt-12 p-8 gap-12 max-h-[1200px] flex overflow-hidden">
        {IMAGES.map((item, i) => (
          <motion.div
            key={item}
            onDragEnd={onDragEnd}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: dragX }}
            animate={{
              translateX: `calc(-${imgIndex * 100}% - ${imgIndex * 48}px)`,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.5,
            }}
            className="bg-white shadow-xl h-[90%] w-full shrink-0 rounded-xl"
            role="group"
            aria-label={`News item ${i + 1}`}
            aria-roledescription="carousel item">
            <h2 className="text-center mt-6 text-lg">TITLE OF CART {item}</h2>
          </motion.div>
        ))}
      </div>
      <div className="flex absolute top-20 left-1/2 gap-6 -translate-x-1/2">
        {IMAGES.map((_, i) => (
          <div
            key={i}
            className={`${
              i === imgIndex ? "bg-black" : "bg-gray-500"
            } rounded-full transition-all duration-500 size-4`}></div>
        ))}
      </div>
    </section>
  );
};

export default News;
