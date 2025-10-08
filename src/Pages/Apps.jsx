import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import ProductCard from "../Components/ProductCard";

const Apps = () => {
  const { data, loading, error } = useApps();
  const [search, setSearch] = useState("");

  //  Filter apps
  const filteredApps = data?.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()) ||
    app.companyName.toLowerCase().includes(search.toLowerCase())
  );

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

      {/* Loading state */}
      {loading && (
        <p className="text-center text-gray-500 py-10 text-lg animate-pulse">
         <span className="loading loading-spinner loading-xl"></span>
        </p>
      )}

      {/* Error state */}
      {error && (
        <p className="text-center text-red-500 py-10 text-lg">
          Failed to load apps. Please try again later.
        </p>
      )}

      {/* No results found */}
      {!loading && !error && filteredApps?.length === 0 && (
        <p className="text-center text-gray-500 py-10 text-lg">
          No apps found matching “{search}”.
        </p>
      )}

      {/* Apps */}
      {!loading && !error && (
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
