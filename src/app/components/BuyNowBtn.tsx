"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BuyNowModal from "./BuyNowModal"; // Import BuyNowModal
import { ProductType } from "@/app/types";

interface BuyNowButtonProps {
  shirt: ProductType;
  quantity: number;
  selectedSize: string | null;
}

const BuyNowButton: React.FC<BuyNowButtonProps> = ({ shirt, quantity, selectedSize }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // For error messages

  const handleBuyNow = () => {
    if (!selectedSize) {
      setErrorMessage("Please select a size before proceeding."); // Set error message
      return;
    }
    setErrorMessage(null); // Clear error message if size is selected
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#ff5733" }}
        whileTap={{ scale: 0.9 }}
        onClick={handleBuyNow}
        className="relative overflow-hidden px-6 py-3 mx-4 font-semibold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg transition-all duration-300 ease-in-out"
      >
        Buy Now
      </motion.button>
      {errorMessage && (
          <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
        )}
      {isModalOpen && (
        <BuyNowModal
          product={shirt}
          selectedSize={selectedSize}
          quantity={quantity}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default BuyNowButton;