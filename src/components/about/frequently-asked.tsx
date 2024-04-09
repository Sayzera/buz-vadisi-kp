import React from "react";
import frequentlyImage from "@/assets/background/about-frequently-image.png";
import FrequentlyAsked from "@/components/main/frequentlyAsked";

type Props = {};

export default function FrequentlyAskedAbout({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 space-y-5 md:space-y-0 items-center">
      <div className="col-span-4">
        <FrequentlyAsked />
      </div>

      <div className="col-span-2">
        <img src={frequentlyImage} alt="frequently" />
      </div>
    </div>
  );
}
