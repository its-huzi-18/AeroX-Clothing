const shirt = {
  name: "shirt",
  title: "Shirts",
  type: "document",
  fields: [
    {
      name: "color",
      title: "Available Color",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Shirt Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "oldPrice",
      title: "Old Price",
      type: "number",
    },
    {
      name: "width",
      title: "Width",
      type: "number",
    },
    {
      name: "height",
      title: "Height",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Drifit T-shirts", value: "drifit" },
          { title: "Drop Shoulder", value: "drop-shoulder" },
          { title: "Full-Sleeves", value: "full-sleeves" },
          { title: "Polo Shirts", value: "polo-shirts" },
          { title: "T-Shirts", value: "t-shirts" },
        ],
        layout: "dropdown", // This makes it a dropdown in Sanity Studio
      },
    },
  ],
};

export default shirt;
