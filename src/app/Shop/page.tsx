import { client } from "@/sanity/lib/client";
import MainImage from "../components/MainImage";
import Head from "next/head";
import FilteredShirts from "../components/FilteredShirts"; // Import client component

interface Shirt {
  _id: string;
  title: string;
  image: any;
  price: number;
  oldPrice: number;
  width?: number;
  height?: number;
  color: string;
  category: string;
}

// Server-side function
const fetchShirts = async (): Promise<Shirt[]> => {
  const query = `*[_type == "shirt"]{ _id, image, title, price, oldPrice, width, height, color, category }`;
  const shirts = await client.fetch(query);

  // Define category order
  const categoryOrder = [
    "t-shirts",
    "drop-shoulder",
    "drifit",
    "polo-shirts",
    "full-sleeves",
  ];

  // Sort shirts based on category order
  shirts.sort((a: any, b: any) => {
    return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
  });

  return shirts;
};

export default async function Page() {
  const shirts = await fetchShirts();

  return (
    <div>
      <Head>
        <title>Shop - Buy the Best Shirts Online</title>
        <meta name="description" content="Explore our latest collection of stylish shirts, including T-shirts, Polo, Full Sleeves, and more. Get the best deals now!" />
      </Head>
      <MainImage title="Shop" />
      
      {/* Render filtered shirts based on search query */}
      <FilteredShirts shirts={shirts} />
    </div>
  );
}
