import Image from 'next/image';
import AnimatedCard from '../components/AnimatedCard';
import { FaMedal, FaLightbulb, FaLeaf, FaTshirt, FaHeart, FaAward, FaUser, FaCode, FaChartLine } from 'react-icons/fa'; // Import icons from react-icons

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center">
          <Image
            src="/Images/logo.png"
            alt="Aerox Logo"
            width={170}
            height={170}
            className="rounded-lg -mb-11"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mt-4">About Aerox</h1>
        <p className="text-lg text-gray-600 mt-2">Crafting Excellence in Every Thread</p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Welcome to <span className="font-bold text-gray-800">Aerox</span>, where style meets comfort. Founded by <span className="font-bold text-gray-800">Faizan Nadeem</span> and <span className="font-bold text-gray-800">Huzaifa Wahab</span>, Aerox is dedicated to providing high-quality shirts that redefine fashion. Our journey began with a simple vision: to create apparel that not only looks good but feels great too.
            </p>
            <p className="text-gray-600 mb-4">
              At Aerox, we believe in the power of details. From the fabric we choose to the stitches we make, every element is carefully crafted to ensure you get the best. Whether you&apos;re dressing up for a formal event or keeping it casual, Aerox has the perfect shirt for every occasion.
            </p>
            <p className="text-gray-600 mb-4">
              Join us in our mission to elevate your wardrobe with timeless designs and unmatched quality.
            </p>
            {/* Founders' Roles */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Founders</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaUser className="text-2xl text-blue-600 mr-4" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Huzaifa Wahab</h4>
                    <p className="text-gray-600">Designer & Developer of this Website</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaChartLine className="text-2xl text-green-600 mr-4" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Faizan Nadeem</h4>
                    <p className="text-gray-600">Responsible for Marketing & Shirt Production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Model Image */}
          <AnimatedCard width="600px" height="384px">
            <div className="relative h-96 w-full">
              <Image
                src="/Images/aboutUs.png" // Ensure this path is correct
                alt="Aerox Model"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </AnimatedCard>
        </div>

        {/* Values Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <FaMedal className="text-4xl text-blue-600" /> {/* Icon for Quality */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality</h3>
              <p className="text-gray-600">We are committed to delivering products that meet the highest standards of quality and durability.</p>
            </div>

            {/* Innovation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <FaLightbulb className="text-4xl text-yellow-500" /> {/* Icon for Innovation */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">We continuously strive to innovate and bring fresh, modern designs to our customers.</p>
            </div>

            {/* Sustainability */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <FaLeaf className="text-4xl text-green-600" /> {/* Icon for Sustainability */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-gray-600">We are dedicated to sustainable practices, ensuring a positive impact on the environment.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose Aerox?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Premium Materials */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <FaTshirt className="text-4xl text-purple-600" /> {/* Icon for Premium Materials */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Materials</h3>
              <p className="text-gray-600">We use only the finest fabrics to ensure our shirts are soft, durable, and comfortable.</p>
            </div>

            {/* Customer-Centric Approach */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <FaHeart className="text-4xl text-red-600" /> {/* Icon for Customer-Centric Approach */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Customer-Centric Approach</h3>
              <p className="text-gray-600">Your satisfaction is our priority. We listen to your needs and deliver exceptional service.</p>
            </div>

            {/* Award-Winning Designs */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <FaAward className="text-4xl text-orange-500" /> {/* Icon for Award-Winning Designs */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Award-Winning Designs</h3>
              <p className="text-gray-600">Our designs have been recognized for their creativity, elegance, and timeless appeal.</p>
            </div>
          </div>
        </div>

        {/* Our Products Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cotton T-Shirts */}
            <div className="bg-gray-200 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <FaTshirt className="text-4xl text-blue-600" /> {/* Icon for Cotton T-Shirts */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cotton T-Shirts</h3>
              <p className="text-gray-600">Soft, breathable, and perfect for everyday wear.</p>
            </div>

            {/* Drifit T-Shirts */}
            <div className="bg-gray-200 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <FaTshirt className="text-4xl text-green-600" /> {/* Icon for Drifit T-Shirts */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Drifit T-Shirts</h3>
              <p className="text-gray-600">Lightweight and moisture-wicking for active lifestyles.</p>
            </div>

            {/* Drop Shoulder T-Shirts */}
            <div className="bg-gray-200 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <FaTshirt className="text-4xl text-purple-600" /> {/* Icon for Drop Shoulder T-Shirts */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Drop Shoulder T-Shirts</h3>
              <p className="text-gray-600">Trendy and relaxed fit for a modern look.</p>
            </div>

            {/* Polo Shirts */}
            <div className="bg-gray-200 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <FaTshirt className="text-4xl text-red-600" /> {/* Icon for Polo Shirts */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Polo Shirts</h3>
              <p className="text-gray-600">Classic and versatile for both casual and formal occasions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;