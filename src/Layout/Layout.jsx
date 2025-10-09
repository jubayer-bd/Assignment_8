import React from "react";

import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Navbar />
      <ScrollToTop />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
