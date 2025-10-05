import { ProductCardProps } from "@/types";
import { client } from "../../../sanity/lib/client";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "@/components/Cards/ProductCard";

async function getData() {
  const query = `*[_type == 'product']{
  _id,
    name,
    price,
    "slug": slug.current,
    "categoryName": category->name,
  "image": images[0].asset->url,
    description
}`;
  const data = await client.fetch(query);
  return data;
}

export default async function AllProducts() {
  const data: ProductCardProps[] = await getData();
  return (
    <MainLayout>
      <main className="mx-[3rem] md:mx-[7rem] lg:mx-[10rem]  pt-[6.5rem]   pb-[6.5rem] ">
        <h4 className="text-[2rem]">All products</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  mt-[5rem] flex-wrap gap-[3rem]">
          {data.map((product, i) => (
            <ProductCard key={i} {...product} type="product" />
          ))}
        </div>
      </main>
    </MainLayout>
  );
}
