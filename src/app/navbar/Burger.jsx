"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const topLine = {
    open: { rotate: 45, y: 6, transformOrigin: "left" },
    closed: { rotate: 0, y: 0, transformOrigin: "left" },
  };

  const middleLine = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomLine = {
    open: { rotate: -45, y: -6, transformOrigin: "left" },
    closed: { rotate: 0, y: 0, transformOrigin: "left" },
  };

  return (
    <>
      <motion.div
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        animate={isOpen ? "open" : "closed"}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="3em"
          width="3em"
          xmlns="http://www.w3.org/2000/svg">
          <motion.line x1="3" y1="6" x2="21" y2="6" variants={topLine} />
          <motion.line x1="3" y1="12" x2="21" y2="12" variants={middleLine} />
          <motion.line x1="3" y1="18" x2="21" y2="18" variants={bottomLine} />
        </svg>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            style={{ opacity: 0 }}
            className="flex flex-col absolute top-28 left-0 w-screen h-[calc(100vh-7rem)] items-center justify-evenly bg-white text-4xl text-black shadow-sm font-shantell-sans">
            <motion.a variants={linkVariants} href="/" className="p-4">
              O nas
            </motion.a>
            <motion.a variants={linkVariants} href="/about" className="p-4">
              Galeria
            </motion.a>
            <motion.a variants={linkVariants} href="/contact" className="p-4">
              Kontakt
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Burger;
