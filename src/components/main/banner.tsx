import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player/lazy";
import { Button } from "@/components/ui/button";
import { SlCallOut } from "react-icons/sl";

import video from "@/assets/background/video.mp4";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type Props = {
  data: {
    home_banner_slogan: {
      title: string;
      last_title: string;
    };
    bannerImage: {
      asset: {
        gatsbyImageData: any;
      };
    };
    product_titles: string[];
    banner_description: string;
    button_phone: string;
  };
};

export default function Banner({ data }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobil ekranın genellikle 768 piksel genişliğinden daha dar olduğunu varsayalım
    };

    // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde yeniden boyutlandırma işlemi yapılır
    window.addEventListener("resize", handleResize);
    handleResize(); // İlk render sırasında da pencere boyutunu kontrol eder

    // Temizlik işlemi
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Boş bağımlılık dizisi, yalnızca bileşen ilk kez oluşturulduğunda useEffect'i çağırır

  return (
    <div>
      {" "}
      <div className="relative ">
        <div className={`relative ${isMobile ? "h-[500px]" : "  "} `}>
          <ReactPlayer
            url={video}
            playing
            
            loop
            muted
            width="100%"
            height="600px"
          />
        </div>
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="absolute inset-0 flex justify-center ">
          <div className="mt-2 md:mt-12">
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 justify-center md:justify-start md:grid-cols-2">
                <div>
                  <motion.div
                    animate={{ x: [-100, 0, 0] }}
                    transition={{ duration: 2 }}
                  >
                    <div className="">
                      <h1 className="text-xl leading-9 md:text-6xl font-bold md:leading-[4.25rem] text-white  md:text-start px-10 md:px-0">
                        {data?.home_banner_slogan?.title}{" "}
                        <span className="!text-primary">
                          {data?.home_banner_slogan?.last_title}
                        </span>
                      </h1>
                    </div>
                  </motion.div>

                  <div className="flex flex-col  px-10 md:px-0">
                    <div className="mt-4 md:mt-8 text-white">
                      <p>{data.banner_description}</p>
                    </div>

                    <div className="mt-6 flex md:justify-start">
                      <motion.button
                        initial={{ opacity: 0.6 }}
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        whileInView={{ opacity: 1 }}
                      >
                        <Button
                          variant="outline"
                          onClick={() => {
                            window.location.href = `tel:${data.button_phone}`;
                          }}
                        >
                          <span className="text-sm">Fiyat Bilgisi Al</span>
                          <SlCallOut className="ml-2 w-4 h-4 text-primary" />
                        </Button>
                      </motion.button>
                    </div>

                    <div className="mt-4 md:mt-8 text-white">
                      <span className="text-inherit text-xl text-primary">
                        Ürünler
                      </span>
                      <ul className="flex space-x-4 mt-1">
                        {data?.product_titles?.map((item, index) => (
                          <li key={index} className="text-white text:sm md:text-lg">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                  className="hidden
            md:block
            "
                >
                  <GatsbyImage
                    image={getImage(data.bannerImage?.asset) as any}
                    class="w-full h-full object-cover object-center"
                    alt="Buz Vadisi"
                    placeholder="blurred"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
