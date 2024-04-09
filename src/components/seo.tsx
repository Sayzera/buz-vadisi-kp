import React from "react";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import { Helmet } from "react-helmet";

type SEOProps = {
    title?: string;
    description?: string;
    pathname?: string;
    productImage?: string;
    children?: React.ReactNode;
}

export const SEO = ({
  title,
  description,
  pathname,
  children,
  productImage,
}:SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const _image = productImage || `${siteUrl}${image}`;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: _image,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <Helmet>
        {/* lang */}
        <html lang="tr" />
        {/* meta charset */}
        <meta charSet="utf-8" />
        {/* meta viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* meta description */}
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:url" content={seo.url} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="twitter:creator" content={seo.twitterUsername} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
        />
        <title>{seo.title}</title>

        {children}
      </Helmet>
    </>
  );
};
