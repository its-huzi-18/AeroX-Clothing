"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import toast from "react-hot-toast";
import { useUser, useClerk } from "@clerk/nextjs"; // Import useUser and useClerk

interface AddToCartButtonProps {
  shirt: {
    _id: string;
    title: string;
    color: string;
    price: number;
    image: any;
  };
  quantity: number; // Add the quantity prop
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ shirt, quantity }) => {
  const dispatch = useDispatch();
  const { isSignedIn } = useUser(); // Check if the user is signed in
  const { openSignIn } = useClerk(); // Use the openSignIn method

  const handleAddToCart = () => {
    if (!isSignedIn) {
      openSignIn(); // Prompt the user to sign in if not signed in
      return;
    }

    // If the user is signed in, proceed to add the item to the cart
    dispatch(
      addToCart({
        id: shirt._id,
        title: shirt.title,
        color: shirt.color,
        price: shirt.price,
        image: shirt.image,
        quantity: quantity, // Include the quantity in the payload
      })
    );
    toast.success(`${quantity} ${shirt.title} (${shirt.color}) added to cart`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="border-[1px] border-black w-[16rem] py-2 shadow-sm shadow-gray-500 mt-1 rounded-md hover:scale-105"
    >
      Quick Add
    </button>
  );
};

export default AddToCartButton;