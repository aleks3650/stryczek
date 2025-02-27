"use client";
import { motion } from "framer-motion";

const OverlayX = ({ children, delay = 0.25, left }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: left ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}>
      {children}
    </motion.div>
  );
};

export default OverlayX;
