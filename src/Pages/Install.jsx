import React, { useEffect, useState, useMemo } from "react";
import useApps from "../Hooks/useApps";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstalledApps = () => {
  const { data = [], loading, error } = useApps();
  const [installedApps, setInstalledApps] = useState([]);
  const [order, setOrder] = useState("none");
  const [pageLoading, setPageLoading] = useState(true);

  // load
  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  // Load installed apps from localStorage
  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("install")) || [];
    setInstalledApps(installed.map(String));
  }, []);

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
    const filtered = data.filter((app) =>
      installedApps.includes(String(app.id))
    );

    const sorted = [...filtered];
    if (order === "price-desc")
      sorted.sort((a, b) => b.downloads - a.downloads);
    else if (order === "price-asc")
      sorted.sort((a, b) => a.downloads - b.downloads);

    return sorted;
  }, [data, installedApps, order]);

  // ✅ PAGE LOADER
  if (pageLoading || loading) {
    return (
      <div className="flex flex-col justify-center items-center py-20 text-gray-700 text-lg">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#00D390] mb-3"></div>
        <p>Loading Installed Apps...</p>
      </div>
    );
  }

  if (error)
    return (
      <p className="text-center py-10 text-red-500">Something went wrong!</p>
    );

  return (
    <div className="bg-gray-100">
      <div className="max-w-11/12 mx-auto py-10 px-4">
        <div>
          <h1 className="text-3xl text-center font-bold mb-2">
            Your Installed Apps
          </h1>
          <p className="text-[#627382] text-center text-sm mb-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-700 font-semibold">
            {installedAppData.length} Apps Found
          </h2>
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
          <p className="text-center py-10 text-gray-600">
            No apps installed yet.
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {installedAppData.map((app) => (
              <div
                key={app.id}
                className="flex justify-between p-2 bg-white shadow-md rounded-lg items-center"
              >
                <div className="flex gap-2 md;gap-5">
                  <figure className="w-10 md:15  flex justify-center items-center">
                    <img src={app.image} alt={app.title} />
                  </figure>
                  <div className="flex flex-col justify-center gap-1 md:gap-2">
                    <h1 className="font-bold text-md">{app.title}</h1>
                    <div className="flex justify-between gap-2">
                      <div className="flex  gap-1 md:gap-2 items-center justify-center">
                        <img className="w-3 md:w-3" src="/icon-downloads.png" />
                        <p className="text-sm">{formatNumber(app.downloads)}</p>
                      </div>
                      <div className="flex  gap-1 md:gap-2 items-center justify-center">
                        <img className="w-3 md:w-5" src="/icon-ratings.png" />
                        <p className="text-sm">{app.ratingAvg}</p>
                      </div>
                      <div className="flex  gap-1 md:gap-2 items-center justify-center">
                        <span className="text-sm">{app.size}MB</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-[#00D390] text-white p-2 cursor-pointer rounded hover:bg-red-600 transition ease-in-out"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          pauseOnHover
          draggable
          theme="colored"
        />
      </div>
    </div>
  );
};

export default InstalledApps;
