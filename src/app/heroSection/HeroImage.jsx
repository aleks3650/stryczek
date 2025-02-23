"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionTemplate,
} from "framer-motion";
const HeroImage = () => {
  const progres1 = useMotionValue(0);
  const progres2 = useMotionValue(0);

  useEffect(() => {
    const TimeoutNumber = setTimeout(() => {
      animate(progres1, 1, { duration: 1.25, ease: [0.76, 0, 0.24, 1] });
      animate(progres2, 1, { duration: 1.4, ease: [0.76, 0, 0.24, 1] });
    }, 250);

    return () => {
      clearTimeout(TimeoutNumber);
    };
  }, []);

  const opacity = useTransform(progres1, [0, 1], [0, 1]);
  const points = [
    {
      x: useTransform(progres1, [0, 1], ["50%", "0%"]),
      y: useTransform(progres2, [0, 1], ["35%", "0%"]),
    },
    {
      x: useTransform(progres1, [0, 1], ["50%", "100%"]),
      y: useTransform(progres2, [0, 1], ["25%", "0%"]),
    },
    {
      x: useTransform(progres1, [0, 1], ["50%", "100%"]),
      y: useTransform(progres2, [0, 1], ["65%", "100%"]),
    },
    {
      x: useTransform(progres1, [0, 1], ["50%", "0%"]),
      y: useTransform(progres2, [0, 1], ["75%", "100%"]),
    },
  ];

  const clipPath1 = useMotionTemplate`polygon(
      ${points[0].x} ${points[0].y},
      ${points[1].x} ${points[1].y},
      ${points[2].x} ${points[2].y},
      ${points[3].x} ${points[3].y}
          )`;

  return (
    <div className=" w-full h-screen relative container mx-auto">
      <motion.div
        className="w-[80vw] max-h-[475px] h-full top-1/4 right-4 absolute 
            md:w-[calc(75vw)] md:max-h-[600px] md:right-8 max-w-[1300px]"
        style={{ clipPath: clipPath1, opacity }}>
        <Image
          alt="header image"
          src="/hero.jpg"
          priority
          fill="cover"
          sizes="100%"
          className="object-cover object-top h-screen w-full absolute rounded-xl opacity-70"
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;
