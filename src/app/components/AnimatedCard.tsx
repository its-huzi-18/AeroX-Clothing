"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 150, 255, 0.4)", // Matching StylishShirt glow
      }}
      className="flex flex-col gap-2 bg-white shadow-lg p-4 rounded-lg w-[19.1rem] justify-center items-center 
                 transition-transform duration-300 ease-in-out"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
