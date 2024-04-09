import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Badge } from "@/components/ui/badge"

type Props = {
  data: {
    img: any;
    name?: string;
    description?: string;
    brand?: string;
  };
};

export default function ProductItem({ data }: Props) {
  return (
    <div>
      <div className="mx-auto mt-11  transform overflow-hidden rounded-lg bg-white  shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <div className="md:h-58 relative">
        <GatsbyImage
                      image={getImage(data.img) as any}
                      alt={data.name || "Buz Vadisi"}
                      className="object-cover object-center md:!h-[300px] md:w-[100%]"
                      
                    />

<Badge
     className='absolute top-1 right-1 text-xxs text-white'
    >{data.brand}</Badge>
       
        </div>
        <div className="p-4 min-h-[150px]  overflow-hidden ">
          <h2 className="mb-2 text-lg font-medium text-primary">
            {data.name}
          </h2>
          <p className="mb-2 text-sm  text-secondary">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
