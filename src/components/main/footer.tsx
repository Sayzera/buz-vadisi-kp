import React from "react";
import useHeaderData from "@/hooks/useHeaderData";
import useProductsData from "@/hooks/useProductsData";
import { Link } from "gatsby";


type Props = {};
type Settings = {
  id: string;
  phone: string;
  address: string;
  discount_text: string;
  facebook: string;
  fax: string;
  google_maps: string;
  instagram: string;
  short_description: string;
  twitter: string;
  youtube: string;
  mail: string;
  logo: {
    asset: {
      url: string;
    };
  };
};
type Products = {
  edges: {
    node: {
      title: string;
      images: {
        asset: {
          gatsbyImageData: any;
        }
      }[]
      overview: {
        children: {
          text: string;
        }[]
      }[]
      slug: {
        current: string;
      }
      brand:string;
    }
  }[]
}
export default function Footer({}: Props) {
  const settings:Settings = useHeaderData();
  const products:Products = useProductsData()

  return (
    <>
      <div className="mx-auto max-w-7xl py-6 px-0 md:px-12">
        <div>
          {/*Footer container --> */}
          <footer className=" text-center text-surface/75  lg:text-left">
            <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 lg:justify-between">
              <div className="me-12 hidden lg:block">
                <span>Sosyal ağlarda bizimle bağlantı kurun:</span>
              </div>
              {/*Social network icons container --> */}
              <div className="flex justify-center">
                {/* facebook */}
                <a href={settings?.facebook} className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    {/*Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a href={settings?.twitter} className="me-6 [&>svg]:h-4 [&>svg]:w-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    {/*Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>

                {/* instagram */}
                <a href={settings?.instagram} className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    {/*Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
               
              </div>
            </div>

            {/*Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
            <div className="mx-6 py-10 text-center md:text-left">
              <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/*TW Elements section --> */}
                <div className="">
                  <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                    <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                      </svg>
                    </span>
                    Buz Vadisi
                  </h6>
                  <p>
                  {settings?.short_description}
                  </p>
                </div>
                {/*Products section --> */}
                <div>
                  <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                    Ürünlerimiz
                  </h6>
                  {
                    products?.edges?.slice(0, 10)
                    .map((product, index) => {
                      return (
                        <div className="mb-4">
                        <Link to={`/ankara-paket-buz/${product.node.slug.current}`} >
                          {product.node.title}
                        </Link>
                        </div>
                       
                      )
                    })
                  }
              
                </div>
                {/*Useful links section --> */}
                <div>
                  <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                   Faydalı Linkler
                  </h6>
                  <p className="mb-4">
                    <Link to="/urunler">Ürünlerimiz</Link>
                  </p>
                  <p className="mb-4">
                  <Link to="/galeri">Galeri</Link>
                  </p>
                  <p className="mb-4">
                  <Link to="/hakkimizda">Hakkımızda</Link>
                  </p>
                  <p>
                  <Link to="/iletisim">İletişim</Link>
                  </p>
                </div>
                {/*Contact section --> */}
                <div>
                  <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                    İletişim
                  </h6>
                  <p className="mb-4 flex items-center justify-center md:justify-start">
                    <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                    </span>
                    {settings?.address}
                  </p>
                  <p className="mb-4 flex items-center justify-center md:justify-start cursor-pointer"
                   onClick={
                    () => {
                      window.location.href = 'mailto:'+settings?.mail;
                    }
                   }
                  >
                    <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </span>
                    {settings?.mail}
                  </p>
                  <p className="mb-4 flex items-center justify-center md:justify-start"
                    onClick={
                      () => {
                        window.location.href = 'tel:'+settings?.phone;
                      }
                    }
                  >
                    <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    {settings?.phone}
                  </p>
                  <p className="flex items-center justify-center md:justify-start">
                    <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    {settings?.fax}
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="bg-black/5 p-6 text-center text-sm ">
        <span>© 2024 Tüm Hakları Saklıdır. </span>
        <a className="font-semibold" href="https://linkedin.com/in/sezer-bölük-927307155">
         Powered by Sezer Bölük
        </a>
      </div>
    </>
  );
}
