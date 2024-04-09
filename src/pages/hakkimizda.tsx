import React from "react";
// import Swiper and modules style
import { motion } from "framer-motion";
import aboutImage from "@/assets/background/about.png";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import OurCoreValues from "@/components/about/our-core-values";
import FrequentlyAskedAbout from "@/components/about/frequently-asked";
import AboutVideo from "@/components/about/about-video";
import PageHeader from "@/components/page-header";
import useAboutData  from "@/hooks/useAboutData";
import useHomeData from "@/hooks/useHomeData";
import useSSSData from "@/hooks/useSSSData";
import { HeadFC, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FrequentlyAsked from "@/components/main/frequentlyAsked";
import { SEO } from "@/components/seo";

// Import Swiper styles
type aboutData = {
  edges: {
    node: {
      description: {
        button_link: string;
        button_text: string;
        title: string;
        _rawDescription: {
          children: {
            text: string;
          }[]
        }[]
      }
      images: {
        asset: {
          gatsbyImageData: any;
        }
      }
      video: {
        title: string;
        video_link: string;
        video_image: {
          asset: {
            gatsbyImageData: any;
          }
        }
        _rawDescription: {
          children: {
            text: string;
          }[]
        }[]
      }
    }
  }[]
}
export default function About({}: Props) {
  const _data: any = useHomeData();
  const aboutData:aboutData = useAboutData();
  const sss: any = useSSSData();
  const data = aboutData?.edges?.[0]?.node || {};




  let description :any = "";
   data.description?._rawDescription?.forEach((item) => {
   return item.children.forEach((child) => {
      // html paragraf tagı olarak koy
      description += `<p class="mt-4">${child.text}</p>`
    } )
  })





  
  

  return (
    <div>
       <PageHeader title={"Hakkımızda"} />
      <main>
        <div className="mx-auto max-w-7xl py-6 px-0 md:px-12">
          {/* About */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-10  px-[24px] items-start space-y-10 md:space-y-0">
              <div>
                  <GatsbyImage
                    image={getImage(data.images?.asset) as any}
                    class="h-full object-contain object-center"
                    alt="Buz Vadisi"
                  />
                
              </div>
              <div>
                <div>
                  <span className="text-5xl font-bold">{data.description?.title}</span>
                </div>

                <div>
              
                  <div className="mt-5 text-secondary" dangerouslySetInnerHTML={{ __html: description }} />
                  
                </div>
                <div className="mt-5">
                 <Link to={data.description?.button_link}>
                 <Button variant="outline">
                   {data.description?.button_text}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                 </Link>
                </div>
              </div>
            </div>
          </motion.div>
          {/* About Video */}
          <AboutVideo data={data.video as any} />
          {/* Our Core Values */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
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
            <div className="px-[24px] mt-[80px]">
              <OurCoreValues />
            </div>
          </motion.div>

          {/* Frequently Asked */}
          <div className="mt-20">
          <FrequentlyAsked data={{
          sikca_sorulan_sorular:
          {
            description: _data?.sikca_sorulan_sorular?.description,
            title: _data?.sikca_sorulan_sorular?.title,
            sss: {
              edges: sss?.edges || []
            }
          }
        }} />
          </div>
        </div>
      </main>
    </div>
  );
}
export const Head: HeadFC = () =><div>
   <SEO
      title={"Buz Vadisi | Hakkımızda"}
    ></SEO>
</div>

