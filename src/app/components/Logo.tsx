"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      animate={{
        opacity: [0.7, 1, 0.8],
        boxShadow: [
          "0px 0px 10px rgba(255, 255, 255, 0.5)",
          "0px 0px 20px rgba(255, 255, 255, 0.8)",
          "0px 0px 10px rgba(255, 255, 255, 0.5)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="w-[100px] h-[100px] flex justify-center items-center rounded-full"
    >
      <Image
        src={"/Images/logo.png"}
        width={120}
        height={120}
        alt="logo"
      />
    </motion.div>
  );
}
