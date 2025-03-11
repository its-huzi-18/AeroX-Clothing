import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="flex items-center">
      {[
        { href: "https://www.facebook.com/share/18cGgNKmv5/?mibextid=wwXIfr", icon: <FaFacebookF /> },
        { href: "https://www.instagram.com/aeroxwear/#", icon: <FaInstagram /> },
        { href: "https://www.tiktok.com/@aeroxwear", icon: <FaTiktok /> }
      ].map((social, index) => (
        <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group relative md:w-10 h-7 w-7 md:h-10 flex justify-center items-center rounded-full transition-all duration-300">
          <div className="w-7 md:w-10 h-7 md:h-10 flex justify-center items-center rounded-full bg-transparent transition-all duration-300 group-hover:bg-slate-300">
            <span className="text-[14px] md:text-[19px] text-[#f5f5f5] transition-all duration-300 group-hover:text-black">
              {social.icon}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
