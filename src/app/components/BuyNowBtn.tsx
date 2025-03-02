"use client"; // Mark this as a client component

import { motion } from "framer-motion";
import { ProductType } from "@/app/types"; // Ensure this import points to the correct location

interface BuyNowButtonProps {
  shirt: ProductType;
  quantity: number;
}

const BuyNowButton: React.FC<BuyNowButtonProps> = ({ shirt, quantity }) => {
  const handleBuyNow = () => {
    console.log(`Buying ${quantity} ${shirt.title}`);
    // Add your logic to handle the "Buy Now" action
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#ff5733" }} // Scale & color change on hover
      whileTap={{ scale: 0.9 }} // Slight shrink when clicked
      onClick={handleBuyNow}
      className="relative overflow-hidden px-6 py-3 font-semibold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg transition-all duration-300 ease-in-out"
    >
      Buy Now
    </motion.button>
  );
};

export default BuyNowButton;