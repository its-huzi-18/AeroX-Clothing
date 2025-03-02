import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AnimatedCard from '@/app/components/AnimatedCard';
import SizeSelector from '@/app/components/SizeBtnShirt';
import Review from '@/app/components/Review';
import ProductActions from '@/app/components/ProductActions'; // Import the new component

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
  sizes: string[];
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product: ProductType | null = await client.fetch(
    `*[_type == "shirt" && _id == $id][0]`,
    { id: params.id }
  );

  if (!product) {
    return notFound(); // Better than manually returning a message
  }

  const relatedProducts: ProductType[] = await client.fetch(
    `*[_type == "shirt" && category == $category && _id != $id]`,
    { category: product.category, id: product._id }
  );

  return (
    <>
      <nav className="h-24 flex items-center gap-4 px-4 sm:px-20">
        <ul className="flex items-center gap-2">
          <li className="text-[#9F9F9F] text-sm sm:text-base">Home</li>
          <Image src="/Images/black-arr.png" alt="arrow" width={20} height={20} />
          <li className="text-[#9F9F9F] text-sm sm:text-base">Shop</li>
          <Image src="/Images/black-arr.png" alt="arrow" width={20} height={20} />
          <li className="text-[#9F9F9F] text-sm sm:text-base border-l-2 border-[#9F9F9F] pl-2">
            {product.title}
          </li>
        </ul>
      </nav>

      <div className="flex flex-col lg:flex-row items-start justify-evenly mt-8 px-4 lg:px-16 gap-8">
        <div className="order-1 lg:order-2 bg-[#F9F1E7] w-full lg:w-1/2 flex items-center justify-center p-8 rounded-md">
          <Image src={urlFor(product.image).url()} alt={product.name} width={430} height={550} className="max-w-full h-auto" />
        </div>

        <div className="order-3 flex gap-3 flex-col max-w-full lg:max-w-lg">
          <h1 className="text-2xl sm:text-4xl font-semibold my-2">{product.title}</h1>
          <div className="flex gap-3">
            <h2 className="text-lg sm:text-2xl">Rs.{product.price}.00</h2>
            <h2 className="text-lg sm:text-2xl text-red-500 line-through">Rs.{product.oldPrice}.00</h2>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <h2 className="font-medium">Color</h2> <span>|</span>
              <h2 className="text-gray-500">{product.color}</h2>
            </div>
            <div className="flex gap-2">
              <h2 className="font-medium">Category</h2> <span>|</span>
              <h2 className="text-[#9F9F9F]">{product.category}</h2>
            </div>
          </div>
          <SizeSelector sizes={product.sizes ?? ["S", "M", "L", "XL"]} />

          {/* Use the ProductActions component */}
          <ProductActions product={product} />
        </div>
      </div>

      <Review />
      <hr className="mt-5" />
      <h1 className="ml-12 text-2xl sm:text-4xl font-semibold mt-2 mb-4">Related Products</h1>
      <div className="my-10 mx-4 flex flex-wrap gap-12 justify-center">
        {relatedProducts.map((shirt) => (
          <AnimatedCard key={shirt._id}>
            <div className="relative">
              <div className="w-[51px] text-center bg-zinc-600 text-white font-semibold absolute top-0 left-0">
                New
              </div>
              <div className="w-[51px] text-center text-white bg-red-500 font-semibold absolute top-[24px] left-0">
                -18%
              </div>

              {/* Image & Title wrapped in Link */}
              <Link href={`/shirtDetail/${shirt._id}`}>
                <div className="rounded-lg object-contain p-8 flex items-center justify-center overflow-hidden bg-[#ececec]">
                  <Image
                    src={urlFor(shirt.image).url()}
                    width={260}
                    height={340}
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

            {/* <AddToCartButton shirt={shirt} quantity={1} /> Default quantity for related products */}

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
        ))}
      </div>
    </>
  );
};

export default ProductDetails;