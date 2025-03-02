"use client";

import { useState } from "react";

interface QuantitySelectorProps {
  onQuantityChange: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleDecrement}
        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100"
      >
        -
      </button>
      <span className="text-lg">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;