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
  
  ],
};

export default shirt;
