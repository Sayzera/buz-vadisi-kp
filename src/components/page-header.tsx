import { Link } from "gatsby";
import React from "react";

type Props = {
  title?: string;
};

export default function PageHeader({
  title
}: Props) {
  return (
    <div className="pt-[40px] pb-[40px]" style={{
      backgroundColor : "rgb(244, 246, 248)"
    }}>
      <div className="mx-auto max-w-7xl px-12">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-default">Buz Vadisi</h1>
          <div className="flex space-x-4 mt-2 items-center">
          <Link to="/" className="text-default text-md font-thin hover:underline">Anasayfa</Link>
          <span 
           className="w-[4px] h-[4px]"
           style={{
              backgroundColor : "rgb(145, 158, 171)",
              borderRadius : "50%"
           }}
          ></span>
          <span className="text-sm md:text-md font-thin text-secondary">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
