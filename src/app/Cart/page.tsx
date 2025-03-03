"use client";

import React from "react";
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

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

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
              {cartItems.map((item) => {
                console.log("Item:", item);
                console.log("Price:", item.price);
                return (
                  <div key={item.id} className="flex items-center border-b py-4">
                    <div className="w-28 p-4 h-28 relative">
                      <Image
                        src={item.image ? urlFor(item.image).url() : '/path/to/fallback/image.jpg'}
                        alt={item.title}
                        layout="fill"
                        className="rounded"
                      />
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
                );
              })}
            </div>
            <div className="bg-gray-50 fixed bottom-4 right-2 w-[27rem] h-[20rem] p-6 rounded-lg shadow-md shadow-gray-400">
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
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>
                      Rs.
                      {cartItems
                        .reduce((total, item) => total + (item.price || 0) * item.quantity, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  <Link href="/">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold tracking-tight py-3 px-2 mt-4 w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Checkout
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 blur-md opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;