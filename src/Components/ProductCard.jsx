import React from "react";
import { Link } from "react-router";

const ProductCard = ({ singleData }) => {
  const { title, companyName, image, size, ratingAvg, id, } = singleData;

  return (
    <Link to={`/apps/${id}`}>
      <div className="bg-white shadow-md  overflow-hidden transition-transform duration-300 hover:scale-102 w-full sm:w-60 md:w-64 mx-auto  flex flex-col ">
        <figure className=" p-4  w-full overflow-hidden flex-1  justify-center items-center ">
          <img src={image} alt={title} className="object-cover h-fit w-full" />
        </figure>

        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {title}
          </h2>
          <p className="text-sm text-gray-500 truncate">{companyName}</p>

          <div className="flex justify-between items-center mt-2 text-gray-700 text-sm">
            <span className=" bg-[#F1F5E8] text-[#00D390] py-1 px-2 rounded-sm">
              <span>
                <i class="fa-solid fa-download"></i>
              </span>
              {size} MB
            </span>
            <span className=" bg-[#FFF0E1] text-[#FF8811]  py-1 px-2 rounded-sm">
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              {ratingAvg.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
