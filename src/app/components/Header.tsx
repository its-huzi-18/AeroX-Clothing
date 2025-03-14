"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CiSearch, CiStar } from "react-icons/ci";
import Logo from "./Logo";
import { IoBagOutline } from "react-icons/io5";
import Account from "./Account";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header = () => {
  const totalQuantity =
    useSelector((state: RootState) => (state.cart as { totalQuantity: number }).totalQuantity) || 0;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const navbar = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/Shop" },
    { name: "About", link: "/About" },
    { name: "Contact", link: "/Contact" },
  ];

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");

  const updateSearch = (query: string) => {
    const params = new URLSearchParams();
    if (query.trim()) {
      params.set("search", query);
    }
    router.push(`/Shop?${params.toString()}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      updateSearch("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateSearch(searchQuery);
    }
  };

  return (
    <header>
      {/* Mobile */}
      <div className="flex justify-between mx-2 items-center md:hidden">
        <Logo />
        <div className="flex items-center border-2 border-black/50 rounded-lg w-80 h-[2.2rem] md:w-auto mx-4 md:mx-0">
          <CiSearch className="text-[36px] mx-2" />
          <input
            type="text"
            className="w-full text-[11px] h-[20px] outline-none px-3 border-none"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button
            className="hover:opacity-80 text-[11.5px] bg-black text-white py-[7.4px] px-2 border-l-2 border-black/70"
            onClick={() => updateSearch(searchQuery)}
          >
            Search
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Account />
          <div className="relative w-8 h-8">
            <span className="absolute top-[-6px] -right-[3px] w-4 h-4 bg-green-600 text-white rounded-full text-[12px] flex justify-center items-center">
              0
            </span>
            <CiStar className="text-[26px]" />
          </div>
          <div className="relative w-8 h-8">
            {totalQuantity > 0 && (
              <span className="absolute top-[-7px] -right-[3.5px] w-[18px] h-[18px] bg-green-600 text-white rounded-full text-[11.2px] flex justify-center items-center">
                {totalQuantity}
              </span>
            )}
            <Link href={"/Cart"}>
              <IoBagOutline className="text-[24px] hover:opacity-75" />
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="md:flex hidden flex-col md:flex-row justify-around items-center md:py-3 gap-5 md:gap-0">
        <Logo />
        <div className="flex items-center md:mt-0 -mt-6 border-2 border-black/50 rounded-lg w-80 md:w-auto mx-4 md:mx-0">
          <CiSearch className="text-[34px] md:text-[24px] mx-2" />
          <input
            type="text"
            className="md:w-72 w-full md:text-lg text-sm h-[38px] outline-none px-3 border-none"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button
            className="hover:opacity-80 bg-black text-white py-2 px-4 border-l-2 border-black/70"
            onClick={() => updateSearch(searchQuery)}
          >
            Search
          </button>
        </div>
        <div className="flex items-center gap-8 md:gap-5">
          <Account />
          <div className="relative w-8 h-8">
            <span className="absolute top-[-6px] -right-[3px] w-4 h-4 bg-green-600 text-white rounded-full text-[12px] flex justify-center items-center">
              0
            </span>
            <CiStar className="text-[30px]" />
          </div>
          <div className="relative w-8 h-8">
            {totalQuantity > 0 && (
              <span className="absolute top-[-7px] -right-[4px] w-[18px] h-[18px] bg-green-600 text-white rounded-full text-[11.2px] flex justify-center items-center">
                {totalQuantity}
              </span>
            )}
            <Link href={"/Cart"}>
              <IoBagOutline className="text-[27px] hover:opacity-75" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="md:mx-28 mt-3 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-4 md:px-0">
        <ul className="flex md:order-1 order-2 flex-wrap justify-center gap-4 md:gap-8 font-medium">
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
        <div className="flex gap-1 md:mt-0 -mt-2 items-center md:order-1 order-1">
          <Image src="/Images/fire.png" width={22} height={22} alt="fire" priority />
          <p className="font-medium">
            Extra <span className="font-semibold text-[#2EBB77]">Sale 30%</span> off
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;