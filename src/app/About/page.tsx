import Image from 'next/image';
import AnimatedCard from '../components/AnimatedCard';

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

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet the Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Faizan Nadeem */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 mb-4">
                <Image
                  src="/Images/faizan.png" // Replace with Faizan's image
                  alt="Faizan Nadeem"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Faizan Nadeem</h3>
              <p className="text-gray-600">Co-Founder & Creative Director</p>
            </div>

            {/* Huzaifa Wahab */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 mb-4">
                <Image
                  src="/Images/huxi.png" // Replace with Huzaifa's image
                  alt="Huzaifa Wahab"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Huzaifa Wahab</h3>
              <p className="text-gray-600">Co-Founder & Operations Head</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;