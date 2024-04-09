import React from "react";
import { Badge } from "@/components/ui/badge";
import pallet1 from "@/assets/background/pallet-img.png";
import palet2 from "@/assets/background/tahta-palet-video.png";
import BasicRating from "@/components/rating";
import InteractiveList from "@/components/list";
import PageHeader from "@/components/page-header";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/plugins/counter.css";

type Props = {};

export default function ProductDetail({
}: Props) {
  const [openLightbox, setOpenLightbox] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const fullscreenRef = React.useRef(null);


  return (
    <div>
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        open={openLightbox}
        plugins={[Fullscreen, Zoom, Slideshow, Counter]}
        fullscreen={{ ref: fullscreenRef }}
        controller={{
          closeOnBackdropClick: true,
        }}
        index={index}
        on={{
          view: ({ index: currentIndex }) => setIndex(currentIndex),
          click(props) {
            console.log(props);
          },
        }}
        // resim dışında bir yere tıklayınca kapat

        close={() => setOpenLightbox(false)}
        slides={[{ src: pallet1 }, { src: palet2 }, { src: pallet1 }]}
      />
      <PageHeader title={"Ürün Detay"} />
      <div className="mx-auto max-w-7xl py-6 px-0 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-10 min-h-[645px] ">
          <div>
            <div
              className="rounded-lg flex items-center"
              onClick={() => setOpenLightbox(true)}
            >
              <img src={pallet1} alt="image" />
            </div>
            <div>
              <div className="flex space-x-2 px-6">
                <img
                  src={pallet1}
                  onClick={() => setOpenLightbox(true)}
                  alt="image"
                  className="h-16 w-16 border border-gray cursor-pointer transition ease-in-out delay-150 hover:scale-125"
                />
                <img
                  src={pallet1}
                  onClick={() => setOpenLightbox(true)}
                  alt="image"
                  className="h-16 w-16 border border-gray cursor-pointer transition ease-in-out delay-150 hover:scale-125"
                />
                <img
                  src={pallet1}
                  onClick={() => setOpenLightbox(true)}
                  alt="image"
                  className="h-16 w-16 border border-gray cursor-pointer transition ease-in-out delay-150 hover:scale-125"
                />
                <img
                  src={pallet1}
                  onClick={() => setOpenLightbox(true)}
                  alt="image"
                  className="h-16 w-16 border border-gray cursor-pointer transition ease-in-out delay-150 hover:scale-125"
                />
              </div>
            </div>
          </div>
          <div className="bg-white mx-3 md:mx-0 p-5 rounded-lg shadow-lg">
            <Badge variant="success">Stokta Var</Badge>

            <div className="mt-5">
              <div>
                <span className="text-xl font-bold">
                  80x120 Euro Palet İnce Tip
                </span>
              </div>
              <div className="mt-3">
                <div className="relative w-fit ">
                  <BasicRating />
                  <div className="absolute top-[6px] -right-[93px] flex items-center space-x-1 text-gray-500">
                    <span className="text-[10px] text-gray-500">
                      (1340 kişi inceledi)
                    </span>
                  </div>
                </div>

                <div>
                  <p className="mt-4 text-sm leading-6 text-secondary">
                    ISPM 15 standardı gereği ihracat yüklemelerinde kullanılan
                    her türlü ahşap ambalaj malzemelerine, paletlere Fumigasyon
                    veya Isıl İşlem yapılması gerekmektedir. İlgili yönetmeliğe
                    göre gerekli işlemler yapılmış ve ERES kurutma fırınlarının
                    söz konusu standarda uyumlu olduğu onaylanmıştır. ERES, ISPM
                    15 standartlarına uygun olarak işlem yaptığı tüm ahşap
                    malzemelere kendi tescilli mührü ile (TR1109) damgalayarak
                    ürünlerin alıcılarına teslim etmektedir.
                  </p>
                </div>

                <div>
                  <InteractiveList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
