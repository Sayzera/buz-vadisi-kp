import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Banner from "@/components/main/banner";
import SecondSection from "@/components/main/second-section";
import Services from "@/components/main/services";
import FrequentlyAsked from "@/components/main/frequentlyAsked";
import StilHaveQuestion from "@/components/main/stilHaveQuestion";
import useHomeData from "@/hooks/useHomeData";
import useProductsData from "@/hooks/useProductsData";
import useServicesData from "@/hooks/useServicesData";
import useSSSData from "@/hooks/useSSSData";
import { SEO } from "@/components/seo";

const IndexPage: React.FC<PageProps> = () => {
  const _data: any = useHomeData();
  const productsData: any = useProductsData();
  const servicesData: any = useServicesData();
  const sss: any = useSSSData();

  


  return (
    <div>
      <Banner
        data={{
          bannerImage: _data?.bannerImage,
          home_banner_slogan: _data?.home_banner_slogan,
          banner_description: _data?.banner_description,
          button_phone: _data?.button_phone,
          product_titles: _data?.product_titles,
        }}
      />
      <div className="banner-container">
        <SecondSection
          data={{
            paletlerimiz: {
              title: _data?.paletlerimiz?.title,
              description: _data?.paletlerimiz?.description,
            },
            products: productsData?.edges,
          }}
        />

        <Services
          data={{
            hizmetlerimiz: {
              description: _data?.hizmetlerimiz?.description,
              title: _data?.hizmetlerimiz?.title,
              services: servicesData?.edges,
            },
          }}
        />

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

        <StilHaveQuestion data={{
          hala_sorulariniz_mi_var: {
            button_link:_data?._rawHalaSorularinizMiVar?.button_link,
            button_text:_data?._rawHalaSorularinizMiVar?.button_text,
            description:_data?._rawHalaSorularinizMiVar?.description,
            title:_data?._rawHalaSorularinizMiVar?.title,
          }
        }} />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () =><div>
   <SEO
      title={"Buz Vadisi | Anasayfa "}
    ></SEO>
</div>



