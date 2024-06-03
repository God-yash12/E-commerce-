// import React from "react";
import TopRatedData from "./Data";
import { FaStar } from "react-icons/fa6";


const TopRated = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* Header section */}
        <div className="flex items-center justify-between mb-20">
          <span className="flex-grow h-px bg-gray-400 mr-3"></span>
          <p className="text-center text-4xl text-primary font-bold mt-5 mb-5">
            Top Rated
          </p>
          <span className="flex-grow h-px bg-gray-400 ml-3"></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-20 md:gap-6 place-items-center mb-[150px]">
          {/* card section */}
          {TopRatedData.map((data, index) => (
            <div key={index} className="rounded-2xl bg-white dark:bg-gray-100 hover:bg-black/80 dark:hover:bg-primary/80 hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
              {/* // image section */}
              <div>
                <img src={data.image} alt="" 
                className="max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-110 duration-200 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center -mt-20">
              <div className="w-full flex items-center justify-center gap-1">
                <FaStar className="text-yellow-500 group-hover:text-yellow-500 dark:group-hover:text-gray-950" />
                <FaStar className="text-yellow-500 group-hover:text-yellow-500 dark:group-hover:text-gray-950" />
                <FaStar className="text-yellow-500 group-hover:text-yellow-500 dark:group-hover:text-gray-950" />
                <FaStar className="text-yellow-500 group-hover:text-yellow-500 dark:group-hover:text-gray-950" />
                <FaStar className="text-yellow-500 group-hover:text-yellow-500 dark:group-hover:text-gray-950" />
              </div>

                <div>
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                    <button 
                    className="bg-primary hover:scalel-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    // onClick={handleOrder}
                    >
                        Order Now
                    </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
