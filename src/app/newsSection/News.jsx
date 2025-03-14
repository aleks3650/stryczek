"use client";

import { useMotionValue } from "framer-motion";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import DifferentComponent1 from "./Component1";
import DifferentComponent2 from "./Component2";
import DifferentComponent3 from "./Component3";

const SLIDE_GAP = 48;
const DRAG_THRESHOLD = 75;

const SLIDES = [
  {
    id: 1,
    component: <DifferentComponent1 />,
    ariaLabel: "Pierwszy news",
  },
  {
    id: 2,
    component: <DifferentComponent2 />,
    ariaLabel: "Drugi news",
  },
  {
    id: 3,
    component: <DifferentComponent3 />,
    ariaLabel: "Trzeci news",
  },
];

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragX = useMotionValue(0);

  const handleDragEnd = useCallback(() => {
    const x = dragX.get();
    if (x < -DRAG_THRESHOLD && currentIndex < SLIDES.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (x > DRAG_THRESHOLD && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex, dragX]);

  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  return (
    <section className="my-10 relative" aria-label="Aktualności">
      <h1 className="text-center text-4xl mb-12 mt-40">Aktualności</h1>

      <div
        className="container  mb-16 mt-12 p-8 gap-12 max-h-[1200px] flex overflow-hidden"
        role="region"
        aria-live="polite">
        {SLIDES.map((slide) => (
          <motion.div
            key={slide.id}
            onDragEnd={handleDragEnd}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: dragX }}
            animate={{
              translateX: `calc(-${currentIndex * 100}% - ${
                currentIndex * SLIDE_GAP
              }px)`,
            }}
            transition={springTransition}
            className="bg-white shadow-xl w-full shrink-0 rounded-xl h-fit"
            role="group"
            aria-roledescription="slide"
            aria-label={slide.ariaLabel}>
            {slide.component}
          </motion.div>
        ))}
      </div>

      <div
        className="flex absolute top-20 left-1/2 gap-6 h-fit -translate-x-1/2"
        role="navigation"
        aria-label="Sterowanie karuzelą">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-500 size-4 ${
              index === currentIndex
                ? "bg-black"
                : "bg-gray-500 hover:bg-gray-700"
            }`}
            aria-label={`Przejdź do slajdu ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
