import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import WhatsAppButton from "./WhatsappBtn";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 md:px-20">
        <hr  className="py-10"/>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* ABOUT US */}
        <div>
          <h3 className="font-bold text-lg">ABOUT US</h3>
          <p className="mt-2 text-sm">
            Welcome to <span className="font-bold">AeroX!</span> We are a
            premier online destination for all your shopping needs, offering a
            wide range of shirts across various categories.
          </p>
        </div>

        {/* CUSTOMER CARE */}
        <div>
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
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaFacebookF className="text-2xl cursor-pointer" />
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
