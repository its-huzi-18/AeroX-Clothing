"use client"; // Ensure animations work in Next.js App Router
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface ImageSrcProps {
    imageSrc:string;
    alt:string;
    width?:number;
    height?:number;
}
const CategoryImages: React.FC<ImageSrcProps> = ({ imageSrc,alt,width = 180,height = 180})=> {
  const [isLoading, setIsLoading] = useState(true);

  return (
   <>
        <motion.div
          initial={{ rotateY: -20 }}
          animate={{ rotateY: 20 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          whileHover={{ scale: 1.1, rotateY: 0 }}
          className="w-[210px] h-[210px]  rounded-full bg-gradient-to-br from-gray-200 to-gray-300 shadow-xl shadow-gray-400 hover:shadow-2xl hover:shadow-gray-500 transition-all duration-300 ease-out hover:ring-4 hover:ring-gray-300 flex items-center justify-center"
          style={{ perspective: "1000px" }} // Adds a 3D effect
        >
          {isLoading && (
            <Image
              src="/Images/logo.png"
              height={200}
              width={200}
              alt="Loading..."
              className="absolute"
            />
          )}

          <Image
            src={imageSrc}
            width={width ?? undefined} // Only pass if provided
            height={height ?? undefined}
            alt={alt}
            className={`rounded-lg transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoadingComplete={() => setIsLoading(false)}
          />
        </motion.div>
        </>
  );
};

export default CategoryImages;
