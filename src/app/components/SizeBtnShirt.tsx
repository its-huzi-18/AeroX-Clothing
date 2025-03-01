"use client"; // ✅ Client-side component

import { useState } from "react";

interface SizeSelectorProps {
  sizes: string[];
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);
    console.log("User selected size:", newSize); // Debugging
  };

  return (
    <div className="flex gap-2">
      {sizes.map((size) => (
        <label key={size} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sizes"
            value={size}
            checked={selectedSize === size}
            onChange={handleSizeChange}
            className="hidden"
          />
          <span
            className={`px-4 py-2 border rounded ${
              selectedSize === size ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
          >
            {size}
          </span>
        </label>
      ))}
    </div>
  );
};

export default SizeSelector;
