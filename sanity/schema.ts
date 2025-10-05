import { type SchemaTypeDefinition } from "sanity";
import product from "./schema/product";
import category from "./schema/category";
import hotProduct from "./schema/hotProduct";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, hotProduct],
};
