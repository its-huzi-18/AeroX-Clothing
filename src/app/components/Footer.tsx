import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import WhatsAppButton from "./WhatsappBtn";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 md:px-20 py-2">
        <hr  className="py-8"/>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-start justify-evenly">
        {/* ABOUT US */}
        <div className="flex justify-center items-center flex-col -mt-4 ml-6">
          {/* <h3 className="font-bold text-lg">ABOUT US</h3> */}
          <Image
          className="-mb-5"
          src={"/Images/logo.png"}
          width={130}
          height={130}
          alt="logo"
          />
          <p className="mt-2 text-sm leading-relaxed">
            Welcome to <span className="font-bold">AeroX!</span> We are a
            premier online destination for all your shopping needs, offering a
            wide range of shirts across various categories.
          </p>
    
        </div>

        {/* CUSTOMER CARE */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="font-bold text-lg">CUSTOMER CARE</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Return & Refund Policy</a></li>
            <li><a href="#" className="hover:underline">TERMS OF SERVICE</a></li>
          </ul>
        </div>

        {/* SIGN UP AND SAVE */}
        <div>
          <h3 className="font-bold text-lg">SIGN UP AND SAVE</h3>
          <p className="mt-2 text-sm">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>

          {/* Email Input */}
          <div className="relative mt-3 w-64 border-b border-black flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 text-sm outline-none bg-transparent"
            />
            <HiOutlineMail className="text-black text-lg absolute right-2" />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
          <Link href="https://www.facebook.com/share/18cGgNKmv5/?mibextid=wwXIfr">
        <FaFacebookF className="text-[19px]" />
      </Link>
      
      <Link href="https://www.instagram.com/aeroxwear/#">
        <FaInstagram className="text-[19px]"  />
      </Link>
      
      <Link href="https://www.tiktok.com/@aeroxwear">
        <FaTiktok className="text-[19px]" />
      </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-10">
        <p>ALL RIGHTS RESERVED</p>
      </div>

      {/* WhatsApp Floating Button (Client Component) */}
      <WhatsAppButton />
    </footer>
  );
};

export default Footer;

