"use client"; // Mark this as a client component

import { useState } from "react";
import SizeSelector from "@/app/components/SizeBtnShirt";
import ProductActions from "@/app/components/ProductActions"; // Import ProductActions
import { ProductType } from "@/app/types"; // Import ProductType

interface SizeSelectorWrapperProps {
  sizes: string[];
  product: ProductType; // Pass the product prop
}

const SizeSelectorWrapper: React.FC<SizeSelectorWrapperProps> = ({ sizes, product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    console.log("Selected size:", size); // Debugging
  };

  return (
    <>
      {/* Render SizeSelector */}
      <SizeSelector sizes={sizes} onSizeChange={handleSizeChange} />

      {/* Pass selectedSize to ProductActions */}
      <ProductActions product={product} selectedSize={selectedSize} />
    </>
  );
};

export default SizeSelectorWrapper;