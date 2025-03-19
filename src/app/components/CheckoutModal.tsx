"use client";

import { useState } from "react";
import { ProductType } from "@/app/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface CheckoutModalProps {
  cartItems: ProductType[];
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ cartItems, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const [selectedSizes, setSelectedSizes] = useState<string[]>(Array(cartItems.length).fill(""));
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "Bank Deposit" | null>(null);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSizeChange = (index: number, size: string) => {
    const newSelectedSizes = [...selectedSizes];
    newSelectedSizes[index] = size;
    setSelectedSizes(newSelectedSizes);
  };

  const handlePaymentMethodChange = (method: "COD" | "Bank Deposit") => {
    setPaymentMethod(method);
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentMethod || selectedSizes.some((size) => !size)) {
      setErrorMessage("Please select a payment method and sizes for all products.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const orderDetails = {
      ...formData,
      cartItems: cartItems.map((item, index) => ({
        title: item.title,
        selectedSize: selectedSizes[index],
        quantity: item.quantity,
        price: item.price,
        image: urlFor(item.image).url(),
        color: item.color,
      })),
      paymentMethod,
      subtotal: cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0),
      shippingFee: 200,
      totalPrice: cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0) + 200,
    };

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        setOrderCompleted(true);
      } else {
        setErrorMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

  if (orderCompleted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-full max-w-4xl flex flex-col items-center">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h2 className="text-xl font-semibold mb-4">Thank you for your order!</h2>
          <p className="text-sm text-gray-600">Your order has been placed successfully.</p>
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl flex flex-col md:flex-row gap-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-center mb-4">
            <Image src="/Images/logo.png" alt="Aerox Logo" width={120} height={70} className="object-contain" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Checkout</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            {cartItems.map((item, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium mb-1">Size for {item.title}</label>
                <select
                  value={selectedSizes[index] || ""}
                  onChange={(e) => handleSizeChange(index, e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="" disabled>Select a size</option>
                  <option value="S">Small (S)</option>
                  <option value="M">Medium (M)</option>
                  <option value="L">Large (L)</option>
                  <option value="XL">Extra Large (XL)</option>
                </select>
              </div>
            ))}

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Payment Method</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="COD" checked={paymentMethod === "COD"} onChange={() => handlePaymentMethodChange("COD")} className="form-radio" />
                  <span>Cash on Delivery (COD)</span>
                </label>
                {/* <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="Bank Deposit" checked={paymentMethod === "Bank Deposit"} onChange={() => handlePaymentMethodChange("Bank Deposit")} className="form-radio" />
                  <span>Bank Deposit</span>
                </label> */}
              </div>
              {errorMessage && (
                <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-500 text-white mb-2 p-2 rounded ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                }`}
              >
                {isSubmitting ? "Processing..." : "Complete Order"}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 mb-4">
                <div className="w-24 h-28 p-3 bg-white rounded-lg flex items-center object-cover justify-center">
                  <Image src={urlFor(item.image).url()} alt={item.title} width={90} height={90} className="object-contain" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-sm text-gray-600">Size: {selectedSizes[index] || "Not selected"}</p>
                  <p className="text-sm text-gray-600">Color: {item.color}</p>
                  <p className="text-sm text-gray-600">Price: Rs {item.price}.00</p>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-sm text-gray-600">Subtotal: Rs {totalPrice}.00</p>
              <p className="text-sm text-gray-600">Shipping: Rs 200.00</p>
              <hr className="my-2" />
              <p className="text-lg font-semibold">Total: Rs {totalPrice + 200}.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;