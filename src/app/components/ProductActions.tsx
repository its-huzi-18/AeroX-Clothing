'use client'; // Mark this as a Client Component

import { useState } from 'react';
import AddToCartButton from '@/app/components/AddToCartButton';
import BuyNowButton from '@/app/components/BuyNowBtn';
import QuantitySelector from '@/app/components/ShirtQuantity';
import { ProductType } from '@/app/types'; // Ensure this import points to the correct location

interface ProductActionsProps {
  product: ProductType;
  selectedSize: string | null; // Add selectedSize prop
}

const ProductActions: React.FC<ProductActionsProps> = ({ product, selectedSize }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <>
      <div className='flex my-2 gap-6 items-end'>
        {/* Quantity Selector */}
        <div className="">
          <h2 className="font-medium mb-2">Quantity</h2>
          <QuantitySelector onQuantityChange={handleQuantityChange} />
        </div>

        {/* Add to Cart and Buy Now Buttons */}
        <AddToCartButton shirt={product} quantity={quantity} />
      </div>
      <BuyNowButton shirt={product} quantity={quantity} selectedSize={selectedSize} />
    </>
  );
};

export default ProductActions;