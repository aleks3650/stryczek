"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import useOutsideClick from "@/app/lib/useOutsideClick";

const ImageComponent = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => {
    setIsOpen(false);
  });

  return (
    <>
      <motion.div
        layoutId={alt}
        className="relative cursor-pointer h-full w-full "
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 30 }}>
        <Image
          src={src}
          alt={alt}
          className="object-cover h-full w-full rounded-xl"
          priority
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative ">
              <motion.div
                className="relative aspect-auto "
                layoutId={alt}
                onClick={(e) => e.stopPropagation()}>
                <Image
                  src={src}
                  alt={alt}
                  ref={modalRef}
                  className="object-contain w-fit h-fit max-w-[80vw] max-h-[80vh]"
                  priority
                />
              </motion.div>

              <motion.button
                className="absolute top-4 right-4 text-white text-3xl hover:text-indigo-300 transition-colors"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={() => setIsOpen(false)}
                aria-label="Zamknij podgląd">
                ✕
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageComponent;
