"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CategoryImages from "./CategoryImages";

const Categories = () => {
  const router = useRouter();

  // Function to navigate to the Shop page with the selected category
  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams();
    params.set("category", category);
    router.push(`/Shop?${params.toString()}`);
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold my-10">Shopping By Categories</h2>
      <div className="flex justify-center gap-8">
        {/* Drifit T-shirts */}
        <div
          className="flex flex-col gap-4 items-center cursor-pointer"
          onClick={() => handleCategoryClick("Drifit")}
        >
          <CategoryImages imageSrc="/Images/t-shirt.png" alt="Drifit T-shirts" />
          <h2 className="text-lg font-semibold text-gray-700">Drifit T-shirts</h2>
        </div>

        {/* Drop Shoulder */}
        <div
          className="flex flex-col gap-4 items-center cursor-pointer"
          onClick={() => handleCategoryClick("Drop")}
        >
          <CategoryImages imageSrc="/Images/dropShoulder.png" alt="Drop Shoulder" />
          <h2 className="text-lg font-semibold text-gray-700">Drop Shoulder</h2>
        </div>

        {/* Full-Sleeves */}
        <div
          className="flex flex-col gap-4 items-center cursor-pointer"
          onClick={() => handleCategoryClick("Full-Sleeves")}
        >
          <CategoryImages
            imageSrc="/Images/full-sleevesShirt.png"
            alt="Full-Sleeves"
            width={138}
            height={138}
          />
          <h2 className="text-lg font-semibold text-gray-700">Full-Sleeves</h2>
        </div>

        {/* Polo Shirts */}
        <div
          className="flex flex-col gap-4 items-center cursor-pointer"
          onClick={() => handleCategoryClick("Polo")}
        >
          <CategoryImages imageSrc="/Images/half-shirt.png" alt="Polo Shirts" />
          <h2 className="text-lg font-semibold text-gray-700">Polo Shirts</h2>
        </div>

        {/* T-Shirts */}
        <div
          className="flex flex-col gap-4 items-center cursor-pointer"
          onClick={() => handleCategoryClick("T-Shirts")}
        >
          <CategoryImages
            imageSrc="/Images/cotton-t-shirt.png"
            alt="T-Shirts"
            width={140}
            height={140}
          />
          <h2 className="text-lg font-semibold text-gray-700">T-Shirts</h2>
        </div>
      </div>
    </div>
  );
};

export default Categories;
