"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface ImageProps {
  imageSrc: string;
  alt: string;
}

const StylishShirt: React.FC<ImageProps> = ({ imageSrc, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Shirt enters from the bottom
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{
        scale: 1.1, // Slight zoom on hover
        rotateX: 10, // 3D tilt
        rotateY: 10,
        boxShadow: "0px 10px 20px rgba(0, 150, 255, 0.4)", // Lighter and more colorful glow on hover
      }}
      className="relative w-[260px] h-[340px] bg-[#ececec] rounded-lg flex items-center justify-center overflow-hidden shadow-lg transition-all duration-300"
      style={{ perspective: "1000px" }} // Adds deep 3D effect
    >
      {/* 3D Shirt Effect */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.3, // Shirt grows beyond the div on hover
          rotateX: -5, // Pops out forward
          rotateY: -5,
          zIndex: 10, // Ensures it appears above other elements
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute w-[260px] h-[320px] origin-center"
      >
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="contain"
          className="drop-shadow-xl"
        />
      </motion.div>

      {/* 🔥 Soft Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent opacity-30"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.4 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default StylishShirt;
