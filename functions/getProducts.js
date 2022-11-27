const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

exports.handler = async () => {
  const query = '*[_type=="product"] | order(_createdAt desc)';
  const products = await sanity.fetch(query).then((results) => {
    const allProducts = results.map((product) => {
      const output = {
        id: product.slug.current,
        title: product.title,
        // url: `${process.env.URL}/.netlify/functions/getProducts`,
        state: product.state,
        tags: product.tags,
        dimensions: product.dimensions,
        price: product.price,
        body: product.body,
        images: [],
        complementarytext: product.complementarytext,
        hotspots: [],
      };

      if (product.images && product.images.length > 0) {
        product.images.forEach((img) => {

          const imgRef = img.asset._ref;
          output.images.push({
            small: imageUrlBuilder(sanity).image(imgRef).width(150).url(),
            square: imageUrlBuilder(sanity).image(img).size(400, 400).url(),
            large: imageUrlBuilder(sanity).image(imgRef).width(800).url(),
          });
        });
      }

      return output;
    });
    console.log(allProducts);
    return allProducts;
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(products),
  };
};
