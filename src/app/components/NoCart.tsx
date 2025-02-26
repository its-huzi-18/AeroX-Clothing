"use client";
import Image from "next/image";
import Link from "next/link";

const NoCart = () => {
  return (
    <>
      <div className="flex flex-col  items-center justify-center pt-7 md:pt-0">
        <Image
          src="/Images/empty-cart.png"
          alt="Empty Cart"
          width={700}
          height={700}
          className="h-[20rem] w-[30rem] object-contain "
        />
        <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Your Cart is Empty
        </h2>
        <p className="mt-2 px-6 text-gray-900 dark:text-slate-500 font-medium text-base leading-none">
          It looks like you have not added anything to your cart. Go ahead and
          explore top category.
        </p>
        <button className="hover:border-black/70 hover:border-2 bg-gray-900 text-white hover:text-gray-900 hover:bg-slate-100 hover:bg-transparent dark:hover:bg-gray-800 dark:hover:shadow-lg shadow-black lg:text-lg duration-300 scroll-m-20 text-base hover:shadow-md font-semibold tracking-tight dark:hover:text-black p-4 capitalize rounded-xl px-8 mt-5">
          <Link href={"/"}>Continue Shopping</Link>
        </button>
      </div>
    </>
  );
};

export default NoCart;