"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import AnimatedCard from "./AnimatedCard";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { urlFor } from "@/sanity/lib/image";

interface Shirt {
  _id: string;
  title: string;
  image: any;
  price: number;
  oldPrice: number;
  width?: number;
  height?: number;
  color: string;
  category: string;
}

interface FilteredShirtsProps {
  shirts: Shirt[];
}

const FilteredShirts: React.FC<FilteredShirtsProps> = ({ shirts }) => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const selectedCategory = searchParams.get("category")?.toLowerCase() || "";

  // Filter shirts based on search and category
  const filteredShirts = useMemo(() => {
    return shirts.filter((shirt) => {
      const matchesSearch = shirt.title.toLowerCase().includes(searchQuery);
      const matchesCategory = selectedCategory ? shirt.category.toLowerCase() === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, shirts]);

  // Function to calculate discount percentage
  const calculateDiscountPercentage = (oldPrice: number, price: number): number => {
    if (oldPrice <= 0 || price >= oldPrice) return 0; // Handle invalid cases
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  };

  return (
    <div className="my-10 mx-10 flex flex-wrap gap-10 justify-center">
      {filteredShirts.length > 0 ? (
        filteredShirts.map((shirt) => {
          const width = shirt.width ?? 260;
          const height = shirt.height ?? 340;
          const discountPercentage = calculateDiscountPercentage(shirt.oldPrice, shirt.price);

          return (
            <AnimatedCard key={shirt._id}>
              <div className="relative">
                <div className="w-[51px] text-center bg-zinc-600 text-white font-semibold absolute top-0 left-0">
                  New
                </div>
                {discountPercentage > 0 && (
                  <div className="w-[51px] text-center text-white bg-red-500 font-semibold absolute top-[24px] left-0">
                    -{discountPercentage}%
                  </div>
                )}

                {/* Image & Title wrapped in Link */}
                <Link href={`/shirtDetail/${shirt._id}`}>
                  <div
                    className="rounded-lg object-contain p-6 flex items-center justify-center overflow-hidden"
                    style={{ width: `${width}px`, height: `${height}px`, background: "#ececec" }}
                  >
                    <Image 
                      src={urlFor(shirt.image).url()} 
                      width={width} 
                      height={height} 
                      alt={shirt.title} 
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </Link>

                <div className="flex gap-1 absolute bottom-[10px] items-center ml-14">
                  {["XS", "S", "M", "L"].map((size) => (
                    <div
                      key={size}
                      className="font-medium bg-white w-8 h-8 rounded-full flex justify-center items-center text-[15px] shadow-md shadow-gray-700 hover:shadow-sm"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pass a default quantity of 1 */}
              <AddToCartButton shirt={shirt} quantity={1} />

              <div className="flex flex-col gap-1 mt-1 justify-center items-center">
                <h2 className="font-semibold text-gray-700 underline">
                  {shirt.color}
                </h2>

                <Link href={`/shirtDetail/${shirt._id}`}>
                  <h2 className="font-semibold cursor-pointer text-lg">
                    {shirt.title}
                  </h2>
                </Link>

                <div className="flex gap-10">
                  <h2 className="font-semibold">Rs.{shirt.price}.00</h2>
                  <h2 className="line-through text-red-600">
                    Rs.{shirt.oldPrice}.00
                  </h2>
                </div>
              </div>
            </AnimatedCard>
          );
        })
      ) : (
        <p className="text-gray-500 text-lg font-semibold">No shirts found.</p>
      )}
    </div>
  );
};

export default FilteredShirts;