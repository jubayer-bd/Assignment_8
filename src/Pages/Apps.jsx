import React, { useState, useEffect } from "react";
import useApps from "../Hooks/useApps";
import ProductCard from "../Components/ProductCard";
import { useNavigation } from "react-router-dom";

const Apps = () => {
  const { data, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const navigation = useNavigation();

  const isNavigating = navigation.state === "loading";

  // Handle initial page load
  useEffect(() => {
    if (loading) {
      setPageLoading(true);
    } else if (data && data.length > 0) {
      const timer = setTimeout(() => {
        setFilteredApps(data);
        setPageLoading(false);
      }, 400); // Small delay for smooth effect
      return () => clearTimeout(timer);
    }
  }, [loading, data]);

  // Handle searching
  useEffect(() => {
    if (!data) return;

    setSearchLoading(true);

    const timer = setTimeout(() => {
      const result = data.filter(
        (app) =>
          app.title.toLowerCase().includes(search.toLowerCase()) ||
          app.companyName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredApps(result);
      setSearchLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, data]);

  // 🔵 Full page loader (on reload or navigation)
  if (pageLoading || isNavigating) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <span className="loading loading-spinner loading-xl text-blue-600"></span>
          <p className="text-gray-600 mt-4 text-lg">Loading Apps...</p>
        </div>
      </div>
    );
  }

  // 🔴 Error
  if (error) {
    return (
      <p className="text-center text-red-500 py-10 text-lg">
        Failed to load apps. Please try again later.
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h1 className="font-bold text-4xl">Our All Applications</h1>
        <p className="text-[#627382] text-sm">
          Explore all apps developed by us — we code for millions.
        </p>
      </div>

      {/* Search & Count */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-3">
        <h1 className="text-2xl font-bold">
          ({filteredApps?.length || 0}) Apps Found
        </h1>
        <input
          type="search"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-64 outline-none focus:border-blue-500 transition"
        />
      </div>

      {/* 🟡 Search loading */}
      {searchLoading && (
        <p className="text-center text-gray-500 py-10 text-lg animate-pulse">
          <span className="loading loading-spinner loading-lg"></span> Searching...
        </p>
      )}

      {/* No Results */}
      {!searchLoading && filteredApps?.length === 0 && (
        <p className="text-center text-gray-500 py-10 text-lg">
          No apps found matching “{search}”.
        </p>
      )}

      {/* Grid */}
      {!searchLoading && filteredApps?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {filteredApps.map((item) => (
            <ProductCard key={item.id} singleData={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
