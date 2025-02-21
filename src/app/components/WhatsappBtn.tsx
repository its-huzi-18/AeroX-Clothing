"use client";

import { useState, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsAppButton = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  // Show WhatsApp button only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 200); // Show after 200px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showWhatsApp ? (
    <a
      href="https://wa.me/+923470670936"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg animate-bounce hover:bg-green-600 transition"
    >
      <IoLogoWhatsapp className="text-white text-2xl" />
    </a>
  ) : null;
};

export default WhatsAppButton;
