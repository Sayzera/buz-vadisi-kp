import React from "react";
import { Badge } from "@/components/ui/badge";
import pallet1 from "@/assets/background/pallet-img.png";
import BasicRating from "../rating";
import InteractiveList from "../list";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface ozellik {
  description: string;
  title: string;
}
type Props = {
  product: {
    rating: {
      rating: number;
      view_count: number;
    }
    title: string;
    description: string;
    overview: {
      children: {
        text: string;
      }[]
    }[]
    images: {
      asset:any
    }
    ozellikler: ozellik[]
    category: {
      category_name:string
    }
  }
};

export default function ProductDetail({product}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-10 min-h-[645px] ">
      <div className="rounded-lg flex items-center justify-center w-full">
             <GatsbyImage
              image={getImage(product.images[0].asset) as any}
              className="max-h-[400px] w-full h-full rounded-lg shadow-lg md:ml-10"
              alt="Buz Vadisi"
              placeholder={"blurred" as any}
            />
      </div>
      <div className="bg-white mx-3 md:mx-0 p-5 rounded-lg shadow-lg">
        <Badge variant="success">Stokta Var</Badge>

        <div className="mt-5">
          <div>
            <span className="text-xl font-bold">
             {product.title}
            </span>
          </div>
          <div className="mt-3">
            <div className="relative w-fit ">
              <BasicRating count={product.rating.rating} />
              <div className="absolute top-[6px] -right-[93px] flex items-center space-x-1 text-gray-500">
                <span className="text-[10px] text-gray-500">
                  ({product.rating.view_count} kişi inceledi)
                </span>
              </div>
            </div>

            <div>
              <p className="mt-4 text-sm leading-6 text-secondary">
               {product.overview?.[0].children[0].text}
              </p>
            </div>

            <div>
              <InteractiveList 
              properties={product?.ozellikler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
