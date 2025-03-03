"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion for animations
import Link from "next/link";

const NoAddedCart = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10">
        <Image
          src="/Images/emptyCart.png"
          alt="Empty Cart"
          width={800}
          height={800}
          className="h-[24rem] w-[34rem] object-contain"
        />
        <h2 className="-mt-8 mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
          Your Cart is Empty
        </h2>

        {/* Wrap motion.button inside Link */}
        <Link href="/Shop">
          <motion.button
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on click
            className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold tracking-tight p-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Continue Shopping
            {/* Gradient shadow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 blur-md opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
          </motion.button>
        </Link>
      </div>
    </>
  );
};

export default NoAddedCart;