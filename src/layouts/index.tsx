// ts react components
import React from "react";
import Navbar from "../components/Navbar";
import type { PageProps } from "gatsby";
import Footer from "@/components/main/footer";
import ScrollProgressBar from "@/components/progressBar";
const Layout: React.FC<PageProps> = ({ children,location }) => {
  return (
    <div>
      <ScrollProgressBar />
      <Navbar location={location} />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
