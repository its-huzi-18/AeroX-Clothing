import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Link from 'next/link';
import AddToCartButton from '@/app/components/AddToCartButton';
import AnimatedCard from '@/app/components/AnimatedCard';

export interface ProductType {
  _id: string;
  name: string;
  image: any;
  price: number;
  oldPrice: number;
  category: string;
  title: string;
  width: number;
  height: number;
  color: string;
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  // Fetch products from Sanity
  const products: ProductType[] = await client.fetch(
    `*[_type == "shirt"]{ _id, image, title, price, oldPrice, width, height, color, category, name }`
  );

  // Find the specific product based on the ID from the URL
  const product = products.find((item) => item._id === params.id);

  if (!product) {
    return <div className="text-center text-red-500 text-lg">Product not found</div>;
  }

  // Fetch related products (same category, excluding the current product)
  const relatedProducts: ProductType[] = products.filter(
    (shirt) => shirt.category === product.category && shirt._id !== product._id
  );

  return (
    <>
      {/* Navigation Bar */}
      <nav className="h-24 flex items-center gap-4 px-4 sm:px-20">
        <ul className="flex items-center gap-2 list-none flex-wrap">
          <li className="text-[#9F9F9F] text-sm sm:text-base">Home</li>
          <Image src="/Images/black-arr.png" alt="arrow" width={20} height={20} />
          <li className="text-[#9F9F9F] text-sm sm:text-base">Shop</li>
          <Image src="/Images/black-arr.png" alt="arrow" width={20} height={20} />
          <li className="text-[#9F9F9F] text-sm sm:text-base">
            <h3 className="border-l-2 border-[#9F9F9F] pl-2">{product.title}</h3>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start justify-evenly mt-8 px-4 lg:px-16 gap-8">
        {/* Product Image Container */}
        <div className="order-1 lg:order-2 bg-[#F9F1E7] w-full lg:w-1/2 flex items-center justify-center p-4 rounded-md">
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={500}
            height={600}
            className="max-w-full h-auto"
          />
        </div>

        {/* Product Details */}
        <div className="order-3 flex flex-col max-w-full lg:max-w-lg">
          <h1 className="text-2xl sm:text-4xl font-semibold my-2">{product.title}</h1>
          <span className="text-lg sm:text-2xl text-[#9F9F9F]">${product.price}</span>
          <p className="mt-6 text-sm lg:text-base">
            A well-balanced audio device with clear midrange and extended highs.
          </p>
        </div>
      </div>

      {/* Related Products Section */}
      <hr className='mt-5' />
      <h1 className="ml-12 text-2xl sm:text-4xl font-semibold mt-2 mb-4">Related Products</h1>
      <div className="flex items-center flex-wrap justify-evenly px-4">
        {relatedProducts.map((shirt) => (
          <div key={shirt._id} className="flex flex-col gap-3">
            <Link href={`/shirtDetail/${shirt._id}`}>
              <AnimatedCard>
                <div className="relative">
                  <Image 
                    src={urlFor(shirt.image).url()} 
                    width={440} 
                    height={540} 
                    alt={shirt.title} 
                    className="object-cover"
                  />
                </div>
              </AnimatedCard>
            </Link>
            <AddToCartButton shirt={shirt} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
