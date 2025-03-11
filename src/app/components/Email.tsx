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
    <div className="my-20 md:my-28 flex items-center justify-between md:flex-row flex-col">
      <div className="flex flex-col gap-4 md:gap-6 justify-center items-center md:order-1 order-2">
        <h2 className="text-3xl md:text-4xl md:mt-0 mt-14 font-bold">SIGN UP AND SAVE</h2>
        <div className='text-lg md:text-2xl font-extralight tracking-wider text-center flex flex-col gap-1'>Subscribe to get special offers,
            <p> free giveaways, and once-in-a-lifetime</p>
            <p>  deals.</p>
          <form onSubmit={handleSubmit} className="flex w-[40px] md:w-full my-6 md:my-3 max-w-lg ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="md:flex-1 w-[16rem] px-4 py-[9px] border border-gray-300 rounded-l-lg outline-none"
            />
            <button
              type="submit"
              className="md:px-6 px-2 py-2 text-sm bg-black text-white font-bold rounded-r-lg uppercase tracking-wide transition-all duration-300 hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
          {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
        </div>
      </div>
      <div className="md:order-2 order-1">
      <Image src={"/Images/Sign-Up.png"}
      className="md:w-[470px] rounded-md md:h-[540px] w-[280px] h-[420px]"
      width={470} height={540} alt="signup" />
      </div>
    </div>
  );
};
export default SignUpSAVE;

