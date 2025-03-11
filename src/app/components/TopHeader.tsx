import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Poppins } from 'next/font/google';
import MarqueeText from './MarqueeText';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-poppins', // Custom CSS variable (optional)
});

const TopHeader = () => {
  return (
    <div
      className={`bg-[#eceff2] flex flex-col md:flex-row justify-between gap-4 md:gap-16 px-4 md:px-9 py-2 items-center ${poppins.className}`}
    >
      {/* Phone Numbers Section */}
      <div className="flex items-center gap-1">
        <i className="text-[22px]">
          <FaWhatsapp />
        </i>
        <div className="flex gap-2 text-[12px] font-medium">
          <h2>+923470670936</h2>|<h2>+923142088200</h2>
        </div>
      </div>

      {/* Marquee Text Section */}
      <div className="w-full md:w-auto overflow-hidden">
        <MarqueeText />
      </div>

      {/* Social Media Icons Section */}
      <div className="flex gap-5 items-center">
        <Link
          href={'https://www.facebook.com/share/18cGgNKmv5/?mibextid=wwXIfr'}
          className="group relative w-7 h-7 flex justify-center items-center rounded-full transition-all duration-300"
        >
          <div className="w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:bg-slate-300">
            <FaFacebookF className="text-[19px]" />
          </div>
        </Link>
        <Link
          href={'https://www.instagram.com/aeroxwear/#'}
          className="group relative w-7 h-7 flex justify-center items-center rounded-full transition-all duration-300"
        >
          <div className="w-12 h-12 flex justify-center items-center rounded-full transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:bg-slate-300">
            <FaInstagram className="text-[21px]" />
          </div>
        </Link>
        <Link
          href={'https://www.tiktok.com/@aeroxwear'}
          className="group relative w-7 h-7 flex justify-center items-center rounded-full transition-all duration-300"
        >
          <div className="w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:bg-slate-300">
            <FaTiktok className="text-[19px]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;