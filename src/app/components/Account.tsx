"use client";

import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { IoPersonOutline } from "react-icons/io5";

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* When Logged Out - Show Icon & Dropdown */}
      <SignedOut>
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
          <IoPersonOutline className="text-[24px] md:text-[27px] mt-1" />
        </button>
        {isOpen && (
          <div className="absolute top-6 right-0 mt-2 bg-white shadow-md rounded-lg p-2 w-28">
            <SignInButton mode="modal" />
          </div>
        )}
      </SignedOut>

      {/* When Logged In - Show Enlarged UserButton */}
      <SignedIn>
        <div className="flex items-center">
          <UserButton appearance={{ elements: { avatarBox: "w-[34px] h-[34px]" } }} />
        </div>
      </SignedIn>
    </div>
  );
}
