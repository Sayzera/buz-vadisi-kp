import * as React from "react";

const data = {
  ozellikler: [
    {
      title: "Boyut",
      description: "80x120",
    },
    {
      title: "Yük Kapasitesi",
      description: "1500 kg",
    },
    {
      title: "Malzeme",
      description: "Ahşap",
    },
    {
      title: "Renk",
      description: "Kahverengi",
    },
    {
      title: "Kullanım Alanı",
      description: "Palet",
    },
  ],
};
export default function InteractiveList({
  properties
}: {
  properties: {
      title: string;
      description: string;
    }[];
}) {
  return (
    <div>
      <div className="mt-4">
        <span className="text-xl font-bold">Ürün Özellikleri</span>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <tbody>
            {properties?.map((item, index) => {
              return (
                <tr className="bg-white border-b ">
                  <td
                    className="px-2 py-4 font-medium text-gray-900 "
                    style={{
                      maxWidth: "100px",
                    }}
                  >
                    {item.title}
                  </td>
                  <td className="px-2 py-4">{item.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
