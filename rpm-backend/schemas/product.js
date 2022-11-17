export default {
  name: "product",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Intitulé",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
    },
    {
      name: "body",
      title: "Présentation",
      type: "text",
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
    },
    {
      name: "price",
      title: "Prix",
      type: "number",
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "state",
    },
  },
};
