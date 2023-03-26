import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

console.log(import.meta.env.VITE_SANITY_PROJECT_ID);
export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
