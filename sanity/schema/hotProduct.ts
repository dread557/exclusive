// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "hotProduct",
  type: "document",
  title: "Hot Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of Product",
    },
    {
      name: "images",
      type: "array",
      title: "Product Images",
      of: [{ type: "image" }],
    },
    {
      name: "description",
      type: "text",
      title: "Description of Product",
    },
    {
      name: "promoText",
      type: "text",
      title: "Short Promo Text",
    },
    {
      name: "slug",
      type: "slug",
      title: "Product slug",
      options: {
        source: "name",
      },
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "category",
      type: "reference",
      title: "Product category",
      to: [
        {
          type: "category",
        },
      ],
    },
  ],
};
