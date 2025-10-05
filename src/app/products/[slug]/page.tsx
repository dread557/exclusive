import Footer from "@/app/layouts/Footer";
import Navbar from "@/app/layouts/Navbar";
import Link from "next/link";
import React, { useState } from "react";
import RelatedProducts from "@/components/RelatedProducts";
import ProductDetails from "../_component/ProductDetails";
import { client } from "../../../../sanity/lib/client";
import { ProductCardProps, ProductDataProps } from "@/types";

async function getData(slug: string) {
  const query = `*[_type in ['product', 'hotProduct'] && slug.current == "${slug}"] [0] {
    _id,
    name,
    price,
    "slug": slug.current,
    "categoryName": category->name,
    images,
    description
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: ProductDataProps = await getData(params.slug);
  return (
    <section className="">
      <Navbar />
      <main className="px-[3rem] md:px-[7rem] lg:px-[10rem] lg:mt-[4rem]">
        <div className="flex gap-[1rem]">
          <Link
            href={"/"}
            className="text-[1.4rem] text-gray-500 whitespace-nowrap"
          >
            Home
            {" / "}
          </Link>
          <Link
            href={`/${data?.categoryName}` || ""}
            className="text-[1.4rem] text-gray-500 whitespace-nowrap"
          >
            {data.categoryName}
            {" / "}
          </Link>
          <Link href={""} className="text-[1.4rem] text-black">
            {data.name}
          </Link>
        </div>
        <ProductDetails data={data} />
        <RelatedProducts />
      </main>

      <Footer />
    </section>
  );
}
