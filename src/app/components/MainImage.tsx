import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ImageTittle {
  title: string;
}

const MainImage: React.FC<ImageTittle> = ({ title }) => {
  return (
    <div className="mt-10 relative h-[250px] rounded-sm md:h-[340px] mx-4 md:mx-10 flex justify-center items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          className="object-cover w-full h-full"
          src="/Images/Shop.png"
          width={1440}
          height={316}
          alt="Background"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 z-10 text-center">
        {/* Logo Section */}
          <h2 className="text-2xl md:text-4xl lg:text-[48px] font-medium text-white">
            {title}
          </h2>

        {/* Breadcrumb Section */}
        <div className="flex items-center gap-2 text-sm md:text-base text-white">
          <Link href="/" className="font-medium hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/" className="font-light hover:underline">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
