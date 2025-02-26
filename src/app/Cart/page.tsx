'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NoCart from '../components/NoCart';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const parsedCart: CartItem[] = JSON.parse(storedCart);
        setCart(parsedCart);
        setItemCount(parsedCart.reduce((count, item) => count + item.quantity, 0));
      }
    } catch (error) {
      console.error('Error parsing cart data:', error);
      setCart([]); // Ensure cart is an empty array if parsing fails
    }
  }, []);

  // Update localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setItemCount(cart.reduce((count, item) => count + item.quantity, 0));
  }, [cart]);

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="w-full px-4 py-8 max-w-6xl mx-auto">
      {cart.length === 0 ? (
        <NoCart />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 rounded-lg p-6 bg-white shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#FFF9E5]">
                  <th className="py-2 px-4 text-center text-sm md:text-base">Product</th>
                  <th className="py-2 px-4 text-sm md:text-base">Price</th>
                  <th className="py-2 px-4 text-sm md:text-base">Quantity</th>
                  <th className="py-2 px-4 text-sm md:text-base">Subtotal</th>
                  <th className="py-2 px-4 text-sm md:text-base">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4 px-4 flex items-center space-x-4">
                      <Image src={item.image} height={100} width={100} alt={item.name} className="w-16 h-16 md:w-20 md:h-20 rounded-md" />
                      <div className="text-xs sm:text-sm md:text-base">{item.name}</div>
                    </td>
                    <td className="py-4 px-4 text-sm md:text-base">Rs. {item.price}</td>
                    <td className="py-4 px-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQuantity = Math.max(1, Number(e.target.value));
                          setCart((prevCart) =>
                            prevCart.map((cartItem) =>
                              cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
                            )
                          );
                        }}
                        className="w-12 h-8 text-center border border-gray-300 rounded-md text-sm"
                      />
                    </td>
                    <td className="py-4 px-4 text-sm md:text-base">Rs. {(item.price * item.quantity).toFixed(2)}</td>
                    <td className="py-4 px-4 text-center">
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-600">
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-[#fff9e5] rounded-lg p-6 shadow-md">
            <h2 className="text-lg md:text-[32px] font-semibold mb-12 text-center">Cart Totals</h2>
            <div className="flex justify-between mb-4 text-sm md:text-base">
              <span>Subtotal</span>
              <span>Rs. {totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg md:text-xl mb-4">
              <span>Total</span>
              <span className="text-[#B88E2F]">Rs. {totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm md:text-base">
              <span>Items</span>
              <span>{itemCount}</span>
            </div>
            <div className="flex gap-4 flex-col justify-center items-center mt-4">
              <Link href="/Checkout">
                <button className="h-12 w-48 border-2 border-black/50 hover:text-white rounded-lg hover:bg-gray-800 transition duration-300 text-sm md:text-base">
                  Checkout
                </button>
              </Link>
              <Link href="/ShipmentPage">
                <button className="bg-green-500 h-12 w-48 border-2 border-black/50 text-zinc-900 hover:text-white rounded-lg hover:bg-gray-800 transition duration-300 text-sm md:text-base">
                  Track Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
