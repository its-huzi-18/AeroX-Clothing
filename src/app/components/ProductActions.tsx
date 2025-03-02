'use client'; // Mark this as a Client Component

import { useState } from 'react';
import AddToCartButton from '@/app/components/AddToCartButton';
import BuyNowButton from '@/app/components/BuyNowBtn';
import QuantitySelector from '@/app/components/ShirtQuantity';
import { ProductType } from '@/app/types'; // Ensure this import points to the correct location

interface ProductActionsProps {
  product: ProductType;
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <>
      {/* Quantity Selector */}
      <div className="mt-4">
        <h2 className="font-medium mb-2">Quantity</h2>
        <QuantitySelector onQuantityChange={handleQuantityChange} />
      </div>

      {/* Add to Cart and Buy Now Buttons */}
      <AddToCartButton shirt={product} quantity={quantity} />
      <BuyNowButton shirt={product} quantity={quantity} />
    </>
  );
};

export default ProductActions;