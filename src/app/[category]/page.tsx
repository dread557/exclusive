import React from "react";
import { client } from "../../../sanity/lib/client";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "@/components/Cards/ProductCard";
import { ProductCardProps } from "@/types";

async function getData(category: string) {
  try {
    const query = `*[_type in ['product', 'hotProduct'] && category->name == "${category}"]{
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
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
}

const Category = async ({ params }: { params: { category: string } }) => {
  const data: ProductCardProps[] = await getData(params.category);
  console.log("cat", data, "params", params);
  return (
    <MainLayout>
      <main className="mx-[3rem] md:mx-[7rem] lg:mx-[10rem]  pt-[6.5rem]   pb-[6.5rem] ">
        <h4 className="text-[2rem]">{`All ${params.category} products`}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  mt-[5rem] flex-wrap gap-[3rem]">
          {data.map((product, i) => (
            <ProductCard key={i} {...product} type="product" />
          ))}
        </div>
      </main>
    </MainLayout>
  );
};

export default Category;
