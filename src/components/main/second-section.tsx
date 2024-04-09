import React from "react";
// import Swiper and modules style
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-flip";
import ProductDetail from "./product-detail";

// Import Swiper styles
interface Product {
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
    ozellikler: {
      description: string;
      title: string;
    }[]
    category: {
      category_name:string
    }
  }
interface Props {
 data: {
  paletlerimiz: {
    title: string;
    description: string;
  }
  products: {
    node: Product
  }[]
 }
}

export default function SecondSection({data}: Props) {

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      transition={{
        duration: 0.25,
        delay: 0.25,
      }}
      className="relative"
    >
      <div>
        <main className="mt-0 md:mt-15">
          <div className="mx-auto max-w-7xl py-6 px-0 md:px-12">
            <div className="mb-5 px-5 md:px-0">
              <div>
                <span className="text-lg text-secondary font-bold">
                  Ürünler
                </span>

                <div className="mt-4">
                  <span className="text-2xl font-bold">{data.paletlerimiz.title}</span>
                  <p className="w-full md:w-1/2 text-secondary text-sm mt-3">
                    {data.paletlerimiz.description}
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-[#F4F6F8] shadow-xl rounded-lg">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet",
                  bulletActiveClass:
                    "swiper-pagination-bullet-active bg-red-500",
                }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {
                  data?.products?.map((item:
                    {
                      node: Product
                    }
                    ) => (
                    <SwiperSlide key={item.node.title}>
                    <ProductDetail product={item.node}  />
                    </SwiperSlide>
                  )
                  )
                }
              
              
              </Swiper>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
