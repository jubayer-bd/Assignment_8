import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <section>
          {/* title */}
          <div className="space-y-5">
            <h2 className=" text-4xl md:text-5xl font-bold text-center w-80 md:w-100 mx-auto">
              We Build{" "}
              <span className="bg-gradient-to-bl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h2>
            <p className="text-[#627382] text-sm text-center md:w-1/2 mx-auto">
              At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
          </div>
          {/* app and play store */}
          <div className="flex justify-center py-5 gap-2 md:gap-5">
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-2 md:px-6 py-2 border border-gray-400 font-semibold rounded-sm bg- hover:opacity-90 transition"
            >
              <img className="" src="/fi_16076057.png" alt="" />
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-2 md:px-6 py-2 border border-gray-400  font-semibold rounded-sm bg- hover:opacity-90 transition"
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
      <section className="bg-gradient-to-bl from-[#9F62F2] to-[#632EE3] py-10 text-white flex flex-col items-center space-y-6">
        <h1 className=" text-2xl md:text-4xl font-medium md:font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex items-center gap-4  md:gap-8 text-center">
          <div className="space-y-2 md:space-y-5">
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              Total Downloads
            </p>
            <h1 className="font-bold text-xl md:text-6xl">29.6M</h1>
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              21% more than last month
            </p>
          </div>
          <div className="space-y-2 md:space-y-5">
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              Total Reviews
            </p>
            <h1 className="font-bold text-xl md:text-6xl">906K</h1>
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              46% more than last month
            </p>
          </div>
          <div className="space-y-2 md:space-y-5">
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              Active Apps
            </p>
            <h1 className="font-bold text-xl md:text-6xl">132+</h1>
            <p className="text-[var(--Style,rgba(255,255,255,1))] text-sm ">
              31 more will Launch
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
