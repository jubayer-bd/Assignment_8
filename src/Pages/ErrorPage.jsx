import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className=" py-10">
        <figure className="flex justify-center items-center">
          <img src="/error-404.png" alt="" />
        </figure>
        <h1 className="font-bold text-4xl text-center my-5">
          Oops, page not found!
        </h1>
        <p className="text-sm text-[#627382] text-center ">
          The page you are looking for is not available.
        </p>
        <div className="flex justify-center items-center my-5">
          <Link
            className="bg-gradient-to-bl from-[#632EE3] to-[#9F62F2] py-2 px-4 text-white rounded text-center"
            to={"/"}
          >
            Go Back!
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
