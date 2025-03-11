"use client";

import { motion } from "framer-motion";

interface GlowingButtonProps {
  width?: string;
  height?: string;
  text?: string;
  color?: string;
  textColor?: string;
  textSize?: string;
  shadow?: string; // New shadow prop
}

export default function GlowingButton({
  width = "md:w-[150px] w-[95px] h-[35px]",
  height = "md:h-[50px]",
  text = "Shop Now",
  color = "bg-gray-100",
  textColor = "text-black",
  textSize = "md:text-lg text-base",
  shadow = "0px 0px 15px rgba(255, 255, 255, 0.5)", // Default shadow
}: GlowingButtonProps) {
  return (
    <motion.button
      className={`${height} ${width} relative flex justify-center items-center ${textSize} font-semibold rounded-lg ${color} ${textColor}`}
      style={{boxShadow: shadow }} // Apply custom shadow
      initial={{ boxShadow: shadow }}
      animate={{
        boxShadow: [
          shadow,
          "0px 0px 30px rgba(255, 255, 255, 0.8)",
          shadow,
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 40px rgba(255, 255, 255, 1)",
      }}
    >
      {text}
    </motion.button>
  );
}
