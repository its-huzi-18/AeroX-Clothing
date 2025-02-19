"use client";
import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  text: string;
  width?: string;
  height?: string;
}

const AnimatedButton: React.FC<ButtonProps> = ({ text, width = "auto", height = "auto" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }} // Smooth scaling effect on hover
      transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
      className="shadow-lg border-2 border-gray-400 rounded-md px-4 py-2 
                 bg-gray-100 hover:bg-gray-200 transition-all duration-300"
      style={{ width, height }} // Dynamic width & height
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;
