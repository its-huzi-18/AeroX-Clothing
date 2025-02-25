"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
  shirt: {
    _id: string;
    title: string;
    color: string;
    price: number;
  };
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ shirt }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: shirt._id, title: shirt.title, color: shirt.color, price: shirt.price }));
    toast.success(`${shirt.title} (${shirt.color}) added to cart`);
  };

  return (
    <button onClick={handleAddToCart} className="border-[1px] border-black px-4 py-2 shadow-md shadow-gray-500 mt-1 rounded-md hover:scale-105">
      Quick Add
    </button>
  );
};

export default AddToCartButton;
