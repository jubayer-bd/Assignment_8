import React from "react";
import useApps from "../Hooks/useApps";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const { data, loading, error } = useApps();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  const homeApps = data.slice(0, 8);

  //   console.log(data);
  return (
    <div className="bg-[#F1F5E8] pt-10">
      <div className="w-11/12 mx-auto">
        <section>
          <div className="space-y-5">
            <h2 className="text-5xl font-bold text-center w-100 mx-auto">
              We Build{" "}
              <span className="bg-gradient-to-bl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h2>
            <p className="text-[#627382] text-sm text-center w-1/2 mx-auto">
              At Eagle , we craft innovative apps designed to make everyday life
              simpler, smarter, and more exciting.Our goal is to turn your ideas
              into digital experiences that truly make an impact.
            </p>
          </div>
          <div className="flex justify-center py-5 gap-5">
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 border border-gray-400 font-semibold rounded-sm bg- hover:opacity-90 transition"
            >
              <img src="/fi_16076057.png" alt="" />
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 border border-gray-400  font-semibold rounded-sm bg- hover:opacity-90 transition"
            >
              <img src="/fi_5977575.png" alt="" />
              App Store
            </a>
          </div>
          <figure className="flex overflow-hidden justify-center">
            <img src="/hero.png" alt="" />
          </figure>
        </section>
      </div>
      <section className="bg-gradient-to-bl from-[#632EE3] to-[#9F62F2] py-10 text-white flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex items-center  gap-8 text-center">
          <div className="space-y-5">
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              Total Downloads
            </p>
            <h1 className="font-bold text-6xl">29.6M</h1>
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              21% more than last month
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              Total Reviews
            </p>
            <h1 className="font-bold text-6xl">906K</h1>
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              46% more than last month
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              Active Apps
            </p>
            <h1 className="font-bold text-6xl">132+</h1>
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              31 more will Launch
            </p>
          </div>
        </div>
      </section>
      {/* show app start here */}
      <section className="bg-[#F1F5E8] py-10">
        <div className="space-y-4">
          <h1 className="text-center font-bold text-4xl ">Trending Apps</h1>
          <p className="text-[#627382] text-sm text-center">
            Explore All Trending Apps on the Market developed by us.
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
