import React from "react";
import OurCoreItem from "./our-core-item";
import { PiHandshakeLight } from "react-icons/pi";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { MdOutlineSecurity } from "react-icons/md";
import { PiTree } from "react-icons/pi";

type Props = {};

export default function OurCoreValues({}: Props) {
  const coreValues = [
    {
      icon: PiHandshakeLight,
      title: "Müşteri Memnuniyeti",
      description:
        "Müşteri memnuniyeti odaklı çalışarak, müşterilerimizin beklentilerini en iyi şekilde karşılamak.",
    },
    {
      icon: HiOutlineDocumentSearch,
      title: "Şeffaflık",
      description:
        "Şeffaf bir şekilde, müşterilerimizle ilişkilerimizi sürdürmek.",
    },
    {
      icon: MdOutlineSecurity,
      title: "Güven",
      description:
        "Güvenilir ve şeffaf bir şekilde, müşterilerimizle ilişkilerimizi sürdürmek.",
    },
    {
      icon: PiTree,
      title: "Yenilikçilik",
      description:
        "Sektördeki gelişmeleri takip ederek, yenilikçi çözümler sunmak.",
    },
  ];
  return (
    <div>
      <div className="text-center">
        <span className="text-4xl font-bold">Temel Değerlerimiz</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 mt-[80px] space-y-5 md:space-y-0">
        {coreValues.map((item, index) => (
          <OurCoreItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
