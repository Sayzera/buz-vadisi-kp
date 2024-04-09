import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

type Props = {
  data: {
    img: string;
    name?: string;
    description?: string;
  };
};

export default function ServicesItem({ data }: Props) {
  return (
    <div>
      <div className="mx-auto mt-11 transform overflow-hidden rounded-lg bg-white  shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <div className="md:h-58">
        <GatsbyImage
              image={getImage(data.img as any) as any}
              alt="Buz Vadisi"
              className="object-cover object-center md:!h-[300px] md:w-[100%]"
              placeholder="blurred"
            />
        
        </div>
        <div className="p-4 min-h-[150px]  overflow-hidden ">
          <h2 className="mb-2 text-lg font-medium  text-primary">
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
