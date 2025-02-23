"use client";
import Image from "next/image";
import { useState } from "react";

const SignUpSAVE = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(""); // Reset message

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("Subscription failed. Try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try later.");
    }
  };

  return (
    <div className="my-28 flex justify-between">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="text-4xl font-bold">SIGN UP AND SAVE</h2>
        <div className='text-2xl font-extralight tracking-wider text-center flex flex-col gap-1'>Subscribe to get special offers,
            <p> free giveaways, and once-in-a-lifetime</p>
            <p>  deals.</p>
          <form onSubmit={handleSubmit} className="flex w-full my-3 max-w-lg ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-[9px] border border-gray-300 rounded-l-lg outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white font-bold rounded-r-lg uppercase tracking-wide transition-all duration-300 hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
          {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
        </div>
      </div>
      <Image src={"/Images/Sign-Up.png"} width={420} height={420} alt="signup" />
    </div>
  );
};
export default SignUpSAVE;

