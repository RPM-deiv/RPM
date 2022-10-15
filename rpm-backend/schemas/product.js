export default {
  name: "product",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Intitulé",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Disponibilité",
      name: "state",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Disponible", value: "available" },
          { title: "Réservé", value: "engaged" },
          { title: "Vendu", value: "sold" },
        ],
      },
    },
    {
      name: "body",
      title: "Présentation",
      type: "text",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "dimensions",
      title: "Dimensions",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "price",
      title: "Prix",
      type: "number",
    },
    {
      name: "complementarytext",
      title: "Texte complémentaire",
      type: "text",
    },
    {
      name: "images",
      title: "Photos",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "state",
    },
  },
};
