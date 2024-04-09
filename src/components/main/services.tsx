import React from "react";
// import Swiper and modules style
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import ServicesItem from "./servicesItem";


interface service {
  node: {
    _id: string;
    title: string;
    overview: string;
    images: {
      asset: {
        gatsbyImageData: any;
      };
    };
  };

}
interface Props {
 data: {
  hizmetlerimiz: {
    title: string;
    description: string;
    services: service[]
  }
 }
}
// Import Swiper styles
export default function Services({data}: Props) {
  console.log(data)
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -90 },
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
            <div className="px-5 md:px-0 mb-5">
              <div>
                <span className="text-lg text-secondary font-bold">
                  Hizmelerimiz
                </span>

                <div className="mt-4">
                  <span className="text-2xl font-bold">
                  {data?.hizmetlerimiz?.title}
                  </span>
                  <p className="w-full md:w-1/2 text-secondary text-sm mt-3">
                    {data?.hizmetlerimiz?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-8 md:px-0 mb-0 md:mb-10">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                style={{
                  padding: "15px 0px",
                }}
              >
                {
                  data?.hizmetlerimiz?.services?.map((service: service) => (
                    <SwiperSlide 
                      key={service.node._id}
                    >
                    <ServicesItem
                      data={{
                        img: service.node.images.asset  as any,
                        name: service.node.title,
                        description: service.node.overview,
                      }}
                    />
                  </SwiperSlide>
                  ))
                }
              
          
              </Swiper>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
