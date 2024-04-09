import React from "react";
// import Swiper and modules style
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import Swiper styles
interface sss { 
  node: {
    _id: string;
    answer: string;
    question: string;
  }

}
interface Props {
  data: {
    sikca_sorulan_sorular:
          {
            description: string;
            title:  string;
            sss: {
              edges: sss[]
            }
          }
  }
}
export default function FrequentlyAsked({data}: Props) {
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
                  Sık Sorulan Sorular
                </span>

                <div className="mt-4">
                  <span className="text-2xl font-bold">
                    {data?.sikca_sorulan_sorular?.title}
                  </span>
                  <p className="w-full md:w-1/2 text-secondary text-sm mt-3">
                    {data?.sikca_sorulan_sorular?.description}
                  </p>
                </div>
              </div>

              <div>
                <Accordion type="single" collapsible>
                  {data?.sikca_sorulan_sorular?.sss?.edges?.map((item, index) => {
                    return (
                      <AccordionItem key={item?.node._id} value={'item-'+index}>
                      <AccordionTrigger>{item?.node.question}</AccordionTrigger>
                      <AccordionContent className="text-secondary">
                        {item?.node.answer}
                      </AccordionContent>
                    </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
