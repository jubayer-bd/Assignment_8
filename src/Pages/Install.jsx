import React, { useEffect, useState, useMemo } from "react";
import useApps from "../Hooks/useApps";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstalledApps = () => {
  const { data = [], loading, error } = useApps(); // ensure data is always an array
  const [installedApps, setInstalledApps] = useState([]);
  const [order, setOrder] = useState("none");

  // Load installed apps from localStorage
  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("install")) || [];
    setInstalledApps(installed.map(String));
  }, []);

  // Format numbers like 50M, 50K
  const formatNumber = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  const handleUninstall = (id) => {
    const updatedInstalled = installedApps.filter(
      (appId) => appId !== String(id)
    );
    localStorage.setItem("install", JSON.stringify(updatedInstalled));
    setInstalledApps(updatedInstalled);
    toast.success("App uninstalled successfully!");
  };

  const installedAppData = useMemo(() => {
    // filter installed apps
    const filtered = data.filter((app) => installedApps.includes(String(app.id)));

    // sort without mutating original
    const sorted = [...filtered];
    if (order === "price-desc") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (order === "price-asc") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }

    return sorted;
  }, [data, installedApps, order]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Something went wrong!</p>;

  return (
    <div className="max-w-11/12 mx-auto py-10 px-4">
      <div>
        <h1 className="text-3xl text-center font-bold mb-2">Your Installed Apps</h1>
        <p className="text-[#627382] text-center text-sm mb-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-700 font-semibold">{installedAppData.length} Apps Found</h2>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="none">Sort By Downloads</option>
            <option value="price-desc">High to Low</option>
            <option value="price-asc">Low to High</option>
          </select>
        </label>
      </div>

      {installedAppData.length === 0 ? (
        <p className="text-center py-10 text-gray-600">No apps installed yet.</p>
      ) : (
        <div className="flex flex-col items-center py-10 gap-6">
          {installedAppData.map((app) => (
            <div
              key={app.id}
              className="border flex-row gap-8 rounded-lg p-4 shadow-md flex items-center w-full"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between w-full">
                <div>
                  <h2 className="text-xl font-semibold">{app.title}</h2>
                  <p className="text-gray-600 mb-2">{app.companyName}</p>
                  <div className="flex gap-4 mb-2">
                    <p>⭐ {app.ratingAvg}</p>
                    <p className="flex items-center">
                      <img
                        className="w-5 mr-1"
                        src="/public/icon-downloads.png"
                        alt="Downloads"
                      />
                      {formatNumber(app.downloads)}
                    </p>
                    <p>
                      {app.size} <span>MB</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="bg-red-500 text-white py-2 mt-5 px-3 rounded hover:bg-red-600"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* React Toastify Container */}
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

export default InstalledApps;
