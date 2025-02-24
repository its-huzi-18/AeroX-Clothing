import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import AnimatedCard from "../components/AnimatedCard";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";

interface Shirt {
  _id: string;
  title: string;
  image: SanityImageSource;
  price: number;
  oldPrice: number;
  width?: number;
  height?: number;
  colors: string[];
}

// Server-side function
const fetchShirts = async (): Promise<Shirt[]> => {
  const query = `*[_type == "shirt"]{ _id, image,title, price, oldPrice, width, height, colors }`;
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
          <>
            <Link href={`/shirtDetail/${shirt._id}`}>
          <AnimatedCard key={shirt._id}>
            <div
              className="rounded-lg flex items-center justify-center overflow-hidden"
              style={{ width: `${width}px`, height: `${height}px`, background: "#ececec" }}
            >
              <Image src={urlFor(shirt.image).url()} width={width} height={height} alt={shirt.title} />
            </div>

              <h2 className="font-semibold text-gray-700 -mb-1">{shirt.title}</h2>
            <div className="flex gap-10 ">
              <h2 className="font-semibold text-blue-600">RS.{shirt.price}</h2>
              <h2 className="line-through text-gray-600">RS.{shirt.oldPrice}</h2>
            </div>

            <div className="flex items-start gap-8 -mt-2">
              <h2 className="font-semibold">Colors</h2>
              <div className="flex gap-1 mt-1 flex-wrap max-w-32">
                {shirt.colors.map((color, index) => (
                  <div
                    key={index}
                    className="border-[1.5px] border-black w-5 h-5 flex justify-center items-center rounded-full"
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
            </Link>
            </>
        );
      })}
    </div>
  );
}
