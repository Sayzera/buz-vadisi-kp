import React from "react";

import epal from "@/assets/products/epal.jpg";

import ProductItem from "@/components/products/productItem";
import PageHeader from "@/components/page-header";
import { HeadFC, Link } from "gatsby";
import  useProductsData from "@/hooks/useProductsData";
import { SEO } from "@/components/seo";

type Props = {};
type Products = {
  edges: {
    node: {
      title: string;
      images: {
        asset: {
          gatsbyImageData: any;
        }
      }[]
      overview: {
        children: {
          text: string;
        }[]
      }[]
      slug: {
        current: string;
      }
      brand:string;
    }
  }[]
}


export default function Products({}: Props) {
  const products:Products = useProductsData()

  console.log(products, "products")

  return (
    <div>
      <main>
        <PageHeader title={"Ürünlerimiz"} />
        <div className="mx-auto max-w-7xl py-6 px-0 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3  md:space-y-0 gap-4 px-10 md:px-0">
            {
              products?.edges?.map((product, index) => {
                return (
                  <Link to={`/ankara-paket-buz/${product.node.slug.current}`} key={index}>
                    <ProductItem
                      data={{ 
                        brand: product?.node?.brand,
                        img: product?.node?.images?.[0].asset, name: product?.node?.title, description: 
                        product?.node?.overview?.[0]?.children?.[0]?.text.split(" ").slice(0, 20).join(" ") + "..." 
                      }}
                    />
                  </Link>
                )
              })
            }
      
       
          </div>
        </div>
      </main>
    </div>
  );
}


export const Head: HeadFC = () =><div>
   <SEO
      title={"Buz Vadisi | Ürünlerimiz"}
    ></SEO>
</div>

