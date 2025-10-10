import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useApps();

  const [installed, setInstalled] = useState(false);

  // Check if app is already installed in localStorage
  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("install")) || [];
    if (installedApps.includes(id)) {
      setInstalled(true);
    }
  }, [id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem("install")) || [];
    if (!installedApps.includes(id)) {
      installedApps.push(id);
      localStorage.setItem("install", JSON.stringify(installedApps));
      toast.success(`${title} Installed`);
      setInstalled(true);
    }
  };

  if (loading)
    return <p className="text-center py-10">Loading app details...</p>;
  if (error)
    return (
      <p className="text-center text-red-500 py-10">Something went wrong!</p>
    );

  const app = data.find((p) => String(p.id) === id);

  if (!app) {
    return <p className="text-center py-10 text-gray-600">App not found.</p>;
  }

  const {
    title,
    companyName,
    image,
    ratingAvg,
    downloads,
    reviews,
    size,
    description,
    ratings,
  } = app;

  // Format number
  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(0) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(0) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
    return num;
  };
  // Format Size
  const formatDataSize = (mb) => {
    if (mb >= 1024) {
      // Convert MB to GB
      return (mb / 1024).toFixed(1).replace(/\.0$/, "") + " GB";
    }
    // Keep MB as it is
    return mb.toFixed(1).replace(/\.0$/, "") + " MB";
  };
  //  app.ratings data from JSON
  const ratingData = [...ratings]
    .map((r) => ({
      star: r.name,
      count: r.count,
    }))
    .reverse();

  return (
    <div className="max-w-11/12 mx-auto py-10 px-4">
      <div className=" max-w-5xl mx-auto flex flex-col md:flex-row gap-8  justify-center items-center">
        <figure className="w-50 h-60 ">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </figure>

        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <h2 className="text-gray-600">Developed by {companyName}</h2>
          </div>

          <hr className="border-gray-300" />

          <div className="grid grid-cols-3  mt-4 ">
            <div className="flex flex-col items-start justify-start">
              <img
                src="/icon-downloads.png"
                alt="Downloads"
                className="w-5 md:w-10  mb-2"
              />
              <h3>Downloads</h3>
              <p className="font-semibold md:font-bold">{formatNumber(downloads)}</p>
            </div>

            <div className="flex flex-col items-start justify-start">
              <img
                src="/icon-ratings.png"
                alt="Ratings"
                className="md:w-10 w-5   mb-2"
              />
              <h3>Average Rating</h3>
              <p className="font-semibold md:font-bold">{ratingAvg}</p>
            </div>

            <div className="flex flex-col items-start justify-start">
              <img
                src="/icon-review.png"
                alt="Reviews"
                className="md:w-10 w-5  mb-2"
              />
              <h3>Total Reviews</h3>
              <p className="font-semibold md:font-bold">{formatNumber(reviews)}</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] cursor-pointer"
            } text-white  py-2 px-4 rounded-lg  hover:ease-out transition`}
          >
            {installed ? "Installed" : `Install Now (${formatDataSize(size)})`}
          </button>
        </div>
      </div>

      <hr className="my-6" />

      {/* Rating chart */}
      <section className="my-6">
        <h1 className="font-bold text-2xl mb-4">Rating Distribution</h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={ratingData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="star" />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="count" fill="#FF8811" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section>
        <h1 className="font-bold text-2xl mb-2">Description</h1>
        <p>{description}</p>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default AppDetails;
