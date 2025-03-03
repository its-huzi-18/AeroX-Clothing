"use client";

import { motion } from "framer-motion";

export default function MarqueeText() {
  return (
    <div className="overflow-hidden whitespace-nowrap ">
      <motion.div
        className="text-[14px]  inline-block text-[#2EBB77] font-medium"
        animate={{ x: ["100%", "-100%"] }} // Move from right to left
        transition={{ repeat: Infinity, duration:6, ease: "linear" }}
      >
        Enjoy up to 30% OFF on your order! 
      </motion.div>
    </div>
  );
}
