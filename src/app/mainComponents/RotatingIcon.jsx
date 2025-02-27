"use client";
import { motion } from "framer-motion";

const RotatingIcon = ({ icon }) => {
  return (
    <motion.div
      whileHover={{
        rotate: Math.random() > 0.5 ? 10 : -10,
        scale: 1.1,
      }}
      className="text-6xl mb-6 w-fit mx-auto">
      {icon}
    </motion.div>
  );
};

export default RotatingIcon;
