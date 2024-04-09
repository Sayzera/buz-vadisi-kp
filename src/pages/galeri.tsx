import React from "react";

import PageHeader from "@/components/page-header";
import ImageItem from "@/components/galleri/imageItem";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import useGalleryData from "@/hooks/useGalleryData";
import { HeadFC } from "gatsby";
import { SEO } from "@/components/seo";

type Props = {};

type GalleryData = {
  edges: {
    node: {
      images: {
        asset: {
          gatsbyImageData: any;
        };
      };
      _rawImages: {
        alt: string;
      }
      overview: string;
      brand: string;
      id: string;
    };
  }[];
};

export default function Galeri({}: Props) {
  const galleryData: GalleryData = useGalleryData();
  const [openLightbox, setOpenLightbox] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const fullscreenRef = React.useRef(null);
  const thumbnailsRef = React.useRef(null);
  const [images, setImages] = React.useState<
    {
      src: string;
    }[]
  >([]);

  React.useEffect(() => {
    if (galleryData?.edges) {
      let tempImages: {
        src: string;
      }[] = [];
      galleryData?.edges?.map((item) => {
        tempImages.push({
          src: item.node.images.asset.gatsbyImageData.images.fallback.src,
        });
      });

      setImages(tempImages);
    }
  }, [galleryData]);


  console.log( galleryData)

  return (
    <div>
      <main>
        <Lightbox
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
          open={openLightbox}
          thumbnails={{ ref: thumbnailsRef }}
          plugins={[Fullscreen, Zoom, Slideshow, Counter, Thumbnails]}
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
          slides={images}
        />
        <PageHeader title={"Yaptığımız İşler"} />
        <div className="mx-auto max-w-7xl py-6 px-0 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 md:px-0 gap-6 px-6">
            {galleryData?.edges?.map((item,index) => (
              <ImageItem data={item.node} setOpenLightbox={setOpenLightbox}  setIndex={setIndex} index={index}/>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}


export const Head: HeadFC = () =><div>
   <SEO
      title={"Buz Vadisi | Galeri"}
    ></SEO>
</div>

