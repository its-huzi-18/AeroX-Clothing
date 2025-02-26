import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import AnimatedCard from "../components/AnimatedCard";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import AddToCartButton from "../components/AddToCartButton";

interface Shirt {
  _id: string;
  title: string;
  image: SanityImageSource;
  price: number;
  oldPrice: number;
  width?: number;
  height?: number;
  color: string;
}
// Server-side function
const fetchShirts = async (): Promise<Shirt[]> => {
  const query = `*[_type == "shirt"]{ _id, image,title, price, oldPrice, width, height,color}`;
  return await client.fetch(query);
};

export default async function Page() {
  const shirts = await fetchShirts(); // ✅ Server component me directly await kar sakte hain

  return (
    <div className="my-10 mx-10 flex flex-wrap gap-6 justify-center">
      {shirts.map((shirt) => {
        const width = shirt.width ?? 260;
        const height = shirt.height ?? 340;
  
        return (
          <AnimatedCard key={shirt._id}>
            <div className="relative">
              <div className="w-[51px] text-center bg-zinc-600 text-white text-semibold absolute top-0 left-0">New</div>
              <div className="w-[51px] text-center text-white bg-red-500 text-semibold absolute top-[24px] left-0">-18%</div>
  
              {/* ✅ Wrap only Image & Title in Link */}
              <Link href={`/shirtDetail/${shirt._id}`}>
              <div
  className="rounded-lg flex items-center justify-center overflow-hidden"
  style={{ width: `${width}px`, height: `${height}px`, background: "#ececec" }}
>
  <Image 
    src={urlFor(shirt.image).url()} 
    width={width} 
    height={height} 
    alt={shirt.title} 
    style={{ objectFit: "cover" }} // 👈 Yeh ensure karega ke image fit ho 
  />
</div>

              </Link>
  
              {/* ✅ Keep AddToCartButton separate */}
              <div className="flex gap-1 absolute bottom-[10px] items-center ml-14">
                <div className="font-medium bg-white w-8 h-8 rounded-full hover:shadow-xl flex justify-center items-center text-[15px] shadow-md shadow-gray-700">XS</div>
                <div className="font-medium bg-white w-8 h-8 rounded-full flex justify-center items-center text-[15px] shadow-md shadow-gray-700 hover:shadow-sm">S</div>
                <div className="font-medium bg-white w-8 h-8 rounded-full flex justify-center items-center text-[15px] shadow-md shadow-gray-700 hover:shadow-sm">M</div>
                <div className="font-medium bg-white w-8 h-8 rounded-full flex justify-center items-center text-[15px] shadow-md shadow-gray-700 hover:shadow-sm">L</div>
              </div>
            </div>
  
            {/* ✅ AddToCartButton now functions separately */}
            <AddToCartButton shirt={shirt} />
  
            <div className="flex flex-col gap-1 mt-1 justify-center items-center">
              <h2 className="font-semibold text-gray-700 underline">{shirt.color}</h2>
  
              {/* ✅ Wrap only the Title in Link */}
              <Link href={`/shirtDetail/${shirt._id}`}>
                <h2 className="font-semibold cursor-pointer text-lg">{shirt.title}</h2>
              </Link>
  
              <div className="flex gap-10">
                <h2 className="font-semibold">Rs.{shirt.price}.00</h2>
                <h2 className="line-through text-red-600">Rs.{shirt.oldPrice}.00</h2>
              </div>
            </div>
          </AnimatedCard>
        );
      })}
    </div>
  );
}  