const shirt = {
  name: "shirt",
  title: "Shirts",
  type: "document",
  fields: [
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
      name: "colors",
      title: "Available Colors",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default shirt;
