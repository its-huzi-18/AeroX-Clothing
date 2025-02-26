"use client";

import Image from "next/image";
import React from "react";
import { CiSearch, CiStar } from "react-icons/ci";
import Logo from "./Logo";
import { IoBagOutline } from "react-icons/io5";
import Account from "./Account";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header = () => {
    const totalQuantity = useSelector((state: RootState) => (state.cart as { totalQuantity: number }).totalQuantity) || 0;
    const pathname = usePathname(); // Get current path

  const navbar = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/Shop" },
    { name: "About", link: "/About" },
    { name: "Contact", link: "/Contact" },
  ];

  return (
    <header>
      {/* Top Navbar */}
      <div className="flex justify-around items-center py-3">
        {/* Logo */}
        <Logo />

        {/* Search Bar */}
        <div className="flex items-center border-2 border-black/50 rounded-lg">
          <CiSearch className="text-[24px] mx-2" />
          <input
            type="text"
            className="w-72 h-[38px] outline-none px-3 border-none"
            placeholder="What are you looking for?"
          />
          <button className="hover:opacity-80 bg-black text-white py-2 px-4 border-l-2 border-black/70">
            Search
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-5">
          <Account />

          {/* Wishlist Icon */}
          <div className="relative">
            <span className="absolute top-[-6px] -right-[3px] w-4 h-4 bg-green-600 text-white rounded-full text-[12px] flex justify-center items-center">
              0
            </span>
            <CiStar className="text-[30px]" />
          </div>

          {/* Cart Icon */}
          <div className="relative">
            {totalQuantity > 0 && (
              <span className="absolute top-[-7px] -right-[4px] w-4 h-4 bg-green-600 text-white rounded-full text-[12px] flex justify-center items-center">
                {totalQuantity}
              </span>
            )}
            <IoBagOutline className="text-[27px]" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="md:mx-28 mt-2 flex justify-between items-center">
        {/* Navigation Links */}
        <ul className="flex gap-8 font-medium">
          {navbar.map((data, i) => (
            <li key={i}>
              <Link
                href={data.link}
                className={pathname === data.link ? "text-[#2EBB77]" : "text-black"}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sale Banner */}
        <div className="flex gap-1 items-center">
          <Image src="/Images/fire.png" width={22} height={22} alt="fire" />
          <p className="font-medium">
            Extra <span className="font-semibold text-[#2EBB77]">Sale 30%</span> off
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
