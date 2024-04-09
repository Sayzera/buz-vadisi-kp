import React from "react";
import { motion } from "framer-motion";
import imageUrlBuilder from '@sanity/image-url'

import aboutVideoImage from "@/assets/background/y1.jpg";
import { Button, IconButton } from "@mui/material";
import { PlayIcon } from "lucide-react";
import ReactPlayer from "react-player";
import video from "@/assets/background/video.mp4";

type Props = {data: {
  title: string;
  video_link: string;
  video_image: {
    asset: {
      url: string;
    }
  }
  _rawDescription: {
    children: {
      text: string;
    }[]
  }[]
}};

export default function AboutVideo({data}: Props) {
  const [isOpenVideo, setIsOpenVideo] = React.useState(false);

  let description :any = "";
   data?._rawDescription?.forEach((item) => {
   return item.children.forEach((child) => {
      // html paragraf tagı olarak koy
      description += `<p class="mt-4">${child.text}</p>`
    } )
  })



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
      <div className="px-[24px] mt-20">
        <div
          className="relative overflow-hidden"
          style={{ paddingBottom: "56.25%" }}
        >
          {!isOpenVideo ? (
            <>
              <div
                className="absolute inset-0 w-full h-full rounded-md"
                style={{
                  backgroundImage: `url(${data?.video_image.asset.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              <div
                className="absolute inset-0 w-full h-full rounded-md"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Siyah opaklık katmanı
                  zIndex: 1, // İçeriğin üzerine gelmesini sağlamak için
                }}
              >
                <div className="flex flex-col items-center justify-center md:justify-between h-full py-[40px]">
                  <div className="text-white text-4xl font-extrabold text-center hidden md:block">
                    {data?.title}
                  </div>

                  <div>
                    <Button
                      onClick={() => setIsOpenVideo(true)}
                      variant="outlined"
                      color="warning"
                      style={{
                        border: "3px solid #FA541B",
                      }}
                    >
                      <PlayIcon className="text-primary" />
                    </Button>
                  </div>

                  <div className="md:flex justify-center hidden">
                  
                    <div className="w-1/2 text-white text-center" dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <ReactPlayer
                style={{ position: "absolute", top: 0, left: 0 }}
                url={
                  video
                }
                playing
                loop
                width="100%"
                height="100%"
                controls
              />
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
