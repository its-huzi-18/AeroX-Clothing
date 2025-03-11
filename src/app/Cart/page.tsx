"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import NoAddedCart from "../components/NoAddedCart";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import CheckoutModal from "../components/CheckoutModal"; // Import the CheckoutModal
import { ProductType } from "@/app/types"; // Import ProductType

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleIncreaseQuantity = (id: string, currentQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecreaseQuantity = (id: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  // Convert cartItems to ProductType[]
  const productItems: ProductType[] = cartItems.map((item) => ({
    _id: item.id, // Use item.id as _id
    name: item.title, // Map title to name
    title: item.title,
    oldPrice: 0, // Add a placeholder or fetch the actual oldPrice
    price: item.price || 0, // Ensure price is defined
    image: item.image, // Ensure image is defined
    color: item.color, // Ensure color is defined
    quantity: item.quantity, // Ensure quantity is defined
  }));

  return (
    <div>
      {cartItems.length === 0 ? (
        <NoAddedCart />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-3 items-center my-6">
            <IoBagOutline className="text-5xl" />
            <h1 className="text-4xl font-bold">Your Cart</h1>
          </div>
          <hr className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b py-4">
                  <div className="w-28 p-4 h-28 relative">
                    <Link href={`shirtDetail/${item.id}`}>
                      <Image
                        src={item.image ? urlFor(item.image).url() : '/path/to/fallback/image.jpg'}
                        alt={item.title}
                        layout="fill"
                        className="rounded"
                      />
                    </Link>
                  </div>
                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-600">{item.color}</p>
                    <p className="text-gray-900">Rs.{item.price ? item.price.toFixed(2) : '0.00'}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                        className="px-2 py-1 border border-gray-300 rounded-l hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-t border-b border-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                        className="px-2 py-1 border border-gray-300 rounded-r hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 text-[24px] hover:text-red-800"
                  >
                    <RiDeleteBin5Line />
                  </button>
                </div>
              ))}
            </div>
            <div className="md:fixed md:bottom-4 md:right-2 md:w-[27rem] md:h-[20rem] bg-gray-50 p-6 rounded-lg shadow-md shadow-gray-400">
              <div className="mt-5">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>
                      Rs.
                      {cartItems
                        .reduce((total, item) => total + (item.price || 0) * item.quantity, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Rs.200.00</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>
                      Rs.
                      {cartItems
                        .reduce((total, item) => total + (item.price || 0) * item.quantity, 200)
                        .toFixed(2)}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCheckoutModalOpen(true)}
                    className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold tracking-tight py-3 px-2 mt-4 w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Checkout
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 blur-md opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCheckoutModalOpen && (
        <CheckoutModal
          cartItems={productItems} // Pass the converted productItems
          onClose={() => setIsCheckoutModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Cart;