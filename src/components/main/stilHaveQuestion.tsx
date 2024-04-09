import React from "react";
// import Swiper and modules style
import { motion } from "framer-motion";

// Import Swiper styles
interface Props {
  data: {
    hala_sorulariniz_mi_var: {
      button_link: string;
      button_text: string;
      description: string;
      title: string;
    };
  };
}
export default function StilHaveQuestion({ data }: Props) {
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
          <div className="mx-auto max-w-7xl py-6 px-4 md:px-12">
            {/* Card */}
            <div className="border border-dashed rounded-lg min-h-[300px] flex flex-col justify-center items-center">
              <div className="text-2xl md:text-3xl font-bold text-center ">
               {data.hala_sorulariniz_mi_var.title}
              </div>
              <p className="mt-8 text-sm text-secondary text-center">
                {data.hala_sorulariniz_mi_var.description}
              </p>

              <div className="mt-8">
                <button className="bg-primary text-white py-2 px-4 rounded-lg"
                 onClick={() => {
                  // tel
                  window.location.href = `tel:${data.hala_sorulariniz_mi_var.button_link}`;
              
                 }}
                >
                  {data.hala_sorulariniz_mi_var.button_text}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
