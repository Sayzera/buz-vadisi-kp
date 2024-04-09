import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";

import PageHeader from "@/components/page-header";
import contactImage from "@/assets/background/illustration_marketing_contact.svg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import SimpleMap from "@/components/contact/map";
import useContactData from "@/hooks/useContactData";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SEO } from "@/components/seo";
import { HeadFC } from "gatsby";

type Props = {};
type contactNodeData = {
  work_hours: {
    title: string;
    work_hours: string;
  };
  mail: {
    title: string;
    mail: string;
  };
  geo_location: {
    latitude: number;
    longitude: number;
  };
  contact_phone: {
    title: string;
    phone: string;
  };
  contact_adress: {
    title: string;
    description: string;
  };
  contact_image: {
    asset: {
      gatsbyImageData:any
    };
  };
}
interface ContactData {
  edges: {
    node: contactNodeData
  }[]
}

export default function Contact({}: Props) {
  const contactData:ContactData = useContactData();
  const data:contactNodeData = contactData?.edges?.[0]?.node || {};

  console.log(data, 'data')
  return (
    <div>
      <main>
        <PageHeader title={"Bizimle İletişime Geçin"} />
        <div className="mx-auto max-w-7xl py-6 px-0 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-0 ">
            <div>
              <GatsbyImage
              image={getImage(data?.contact_image?.asset) as any}
              className="w-[80%] hidden md:block"
              alt="Buz Vadisi"
              />

              <div className="mt-6">
                <div className="flex justify-start space-x-3 mb-8">
                  <IoLocationOutline className="text-4xl " />
                  <div>
                    <div className="flex space-x-2">
                      <span className="text-[1.125rem]">{data.contact_adress?.title}</span>
                      <CiLocationArrow1 className="text-xl text-primary" />
                    </div>
                    <p className="text-secondary font-sans text-base">
                      {data.contact_adress?.description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-start space-x-3 mb-8 cursor-pointer"
                 onClick={() => {
                   window.location.href = `tel:${data.contact_phone.phone}`;
                 }}
                >
                  <IoPhonePortraitOutline className="text-4xl " />
                  <div>
                    <div className="flex space-x-2 ">
                      <span className="text-[1.125rem]">
                        {data.contact_phone?.title}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start space-x-3 mb-8 cursor-pointer"
                 onClick={() => {
                    window.location.href = `mailto:${data.mail?.mail}`;
                 }}
                >
                  <CiMail className="text-4xl " />
                  <div>
                    <div className="flex space-x-2">
                      <span className="text-[1.125rem]">{
                        data.mail?.title
                      }</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start space-x-3 mb-8">
                  <CiClock2 className="text-4xl " />
                  <div>
                    <div className="flex space-x-2">
                      <span className="text-[1.125rem]">
                        {data.work_hours?.title}
                      </span>
                    </div>
                    <p className="text-secondary font-sans text-base">
                      {data.work_hours?.work_hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SimpleMap
                geo_location={data?.geo_location}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export const Head: HeadFC = () =><div>
   <SEO
      title={"Buz Vadisi | İletişim"}
    ></SEO>
</div>

