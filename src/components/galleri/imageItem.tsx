import React from 'react'
import { Badge } from "@/components/ui/badge"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
type Props = {
    setOpenLightbox: (value: boolean) => void
    setIndex: (value: number) => void
    index: number
    data: {
      images: {
        asset: {
          gatsbyImageData: any;
        };
      };
      _rawImages: {
        alt: string;
      }
      overview: string;
      brand: string;
      id: string;
    }
}

export default function ImageItem({
    setOpenLightbox,
    data,
    setIndex,
    index
}: Props) {
  console.log(data, 'data')
  return (
    <div className="relative inline-block group/text-image cursor-pointer" 
     onClick={() => {
        setIndex(index);
        setOpenLightbox(true);
     }}
    >
        <GatsbyImage
        image={getImage(data?.images.asset) as any}
        className="w-full h-full object-cover object-center aspect-[1/1]"
        alt={data?._rawImages.alt + ' Buz Vadisi'}
        />
    <div className="hidden absolute bottom-0 left-0 bg-black bg-opacity-50  px-4 py-2 rounded w-full text-white
        group-hover/text-image:block transition-all duration-300 ease-in-out text-md ">
        {data?.overview}
    </div>
    <Badge 
     className='absolute top-1 right-1 text-xxs text-white'
    >{data?.brand}</Badge>
  </div>
  )
}