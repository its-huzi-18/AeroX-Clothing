"use client"; // Mark this as a client component

import { useState } from "react";
import SizeSelector from "@/app/components/SizeBtnShirt";
import ProductActions from "@/app/components/ProductActions"; // Import ProductActions

interface ProductType {
  _id: string;
  name: string; // Required property
  title: string;
  image: any;
  price: number;
  oldPrice: number;
  color: string;
  category?: string;
  sizes?: string[]; // Required property
  width?: number;
  quantity: number;
  selectedSize?:string[];
  height?: number;
}; // Pass the product pro


interface SizeSelectorWrapperProps {
  sizes: string[];
  product:ProductType
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