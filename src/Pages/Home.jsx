import React from "react";
import useApps from "../Hooks/useApps";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";

const Home = () => {
  const { data, loading, error } = useApps();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  const homeApps = data.slice(0, 8);

  //   console.log(data);
  return (
    <div className="bg-[#F1F5E8] pt-10">
      
     <Banner/>
      {/* show app start here */}
      <section className="bg-[#F1F5E8] py-10">
        <div className="space-y-4">
          <h1 className="text-center font-bold text-4xl ">Trending Apps</h1>
          <p className="text-[#627382] text-sm text-center">
            Explore All Trending Apps on the Market developed by us.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 max-w-7xl mx-auto py-10">
          {data.map((item) => (
            <ProductCard key={item.id} singleData={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
