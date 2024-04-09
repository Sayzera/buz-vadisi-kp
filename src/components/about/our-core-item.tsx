import React from "react";

type Props = {
  item: {
    icon: any;
    title: string;
    description: string;
  };
};

export default function OurCoreItem({ item }: Props) {
  return (
    <div className="flex flex-col items-center">
      <item.icon className="text-8xl text-primary mb-10" />

      <div className="text-center text-2xl mb-5  ">
        <span>{item.title}</span>
      </div>

      <p className="text-center text-md text-secondary">{item.description}</p>
    </div>
  );
}
