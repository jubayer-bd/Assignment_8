import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";
import { useNavigation } from "react-router-dom";

const Home = () => {
  const { data, loading, error } = useApps();
  const [homeApps, setHomeApps] = useState([]);
  const [localLoading, setLocalLoading] = useState(true);
  const navigation = useNavigation();

  //  loading when fetching data
  useEffect(() => {
    if (loading) {
      setLocalLoading(true);
    } else if (data && data.length > 0) {
      const timer = setTimeout(() => {
        setHomeApps(data.slice(0, 8));
        setLocalLoading(false);
      }, 400); // delay for smooth transition
      return () => clearTimeout(timer);
    }
  }, [loading, data]);

  // React Router navigation loading
  const isNavigating = navigation.state === "loading";

  // Combined loading condition
  if (localLoading || isNavigating) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F1F5E8]">
        <div className="text-center">
          <span className="loading loading-spinner loading-xl text-blue-600"></span>
          <p className="text-gray-600 mt-4 text-lg">Loading Home...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 py-10 text-lg">
        Something went wrong: {error.message}
      </p>
    );
  }

  return (
    <div className="bg-[#F1F5E8] pt-10">
      {/* Banner */}
      <Banner />

      {/* Trending Apps Section */}
      <section className="bg-[#F1F5E8] py-10">
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-4xl">Trending Apps</h1>
          <p className="text-[#627382] text-sm">
            Explore all trending apps on the market developed by us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 max-w-7xl mx-auto py-10">
          {homeApps.map((item) => (
            <ProductCard key={item.id} singleData={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
