import { client } from "@/sanity/lib/client";
export const fetchShirts = async (category?: string) => {
  let query = `*[_type == "shirt"]{ _id, image, title, price, oldPrice, width, height, color, category }`;

  if (category) {
    query = `*[_type == "shirt" && category == "${category}"]{ _id, image, title, price, oldPrice, width, height, color, category }`;
  }

  const shirts = await client.fetch(query);

  // Sort categories in predefined order
  const categoryOrder = ["t-shirts", "drop-shoulder", "drifit", "polo-shirts", "full-sleeves"];
  shirts.sort((a:any, b:any) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));

  return shirts;
};
