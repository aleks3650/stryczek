"use client";
import { motion } from "framer-motion";

const Overlay = ({ children, delay = 0.25 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}>
      {children}
    </motion.div>
  );
};

export default Overlay;
