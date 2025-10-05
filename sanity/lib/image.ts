import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

interface ImageUrl {
  url: string;
}

export const urlForImage = (source: Image): ImageUrl => {
  return {
    url: imageBuilder?.image(source).auto("format").fit("max").url() || "",
  };
};

const builder = ImageUrlBuilder(client);

export function UrlFor(source: any) {
  return builder.image(source);
}
