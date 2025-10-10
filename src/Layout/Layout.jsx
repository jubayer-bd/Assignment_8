import React from "react";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

import ScrollToTop from "../Components/ScrollToTop";
import { NavProvider } from "../context/NavContext"; // ✅ Import NavProvider
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <NavProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </NavProvider>
  );
};

export default Layout;
