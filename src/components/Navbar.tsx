import { Link, PageProps } from "gatsby";
import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import  logo from "@/assets/background/icons.webp"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useNavbarData from "@/hooks/useNavbarData";

const Navbar: React.FC = ({location}:{
  location: PageProps["location"]
}) => {
  const _data = useNavbarData();

  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const [navigation, setNavigations] = useState([
    { name: "Anasayfa", href: "/", current: true },
    { name: "Hakkımızda", href: "/hakkimizda/", current: false },
    { name: "Ürünlerimiz", href: "/urunler/", current: false },
    { name: "Galeri", href: "/galeri/", current: false },
    { name: "İletişim", href: "/iletisim/", current: false },
  ]);

  React.useEffect(() => {
    const handleActive = () => {
      setNavigations((prev) =>
        prev.map((nav) => {
          return {
            ...nav,
            current: nav.href === location.pathname,
          };
        }))
    }

    handleActive();
       
  }, [location?.pathname]);


  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="min-h-full">
      <Disclosure
        as="nav"
        className="bg-white bg-opacity-80 text-[212B36] text-[1rem] leading-6"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                 <Link to="/">
                 <GatsbyImage
                    image={getImage(_data?.logo?.asset) as any}
                    className="h-10 w-10"
                    alt="Buz Vadisi"
                  />
                  </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <div className="rounded-md px-3 py-2 text-inherit font-medium relative">
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current ? "a-icon-active" : "a-icon"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                <Link
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-inherit font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
                to={item.href}
                >
                  {item.name}
                </Link>
                ))}
              </div>
            
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
