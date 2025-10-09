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
      toast.success(`${title} Installed`)
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
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
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
      <div className=" max-w-5xl mx-auto flex flex-col md:flex-row gap-8 py-4">
        <figure className="w-50 h-60 flex-shrink-0">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            <div className="text-center">
              <img
                src="/icon-downloads.png"
                alt="Downloads"
                className="w-10 mx-auto mb-2"
              />
              <h3 className="font-semibold">Downloads</h3>
              <p>{formatNumber(downloads)}</p>
            </div>

            <div className="text-center">
              <img
                src="/icon-ratings.png"
                alt="Ratings"
                className="w-10 mx-auto mb-2"
              />
              <h3 className="font-semibold">Average Rating</h3>
              <p>{ratingAvg}</p>
            </div>

            <div className="text-center">
              <img
                src="/icon-review.png"
                alt="Reviews"
                className="w-10 mx-auto mb-2"
              />
              <h3 className="font-semibold">Total Reviews</h3>
              <p>{formatNumber(reviews)}</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`${
              installed ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390] cursor-pointer"
            } text-white  py-2 px-4 rounded-lg hover:ease-out transition`}
          >
            {installed ? "Installed" : `Install Now (${size}MB)`}
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
