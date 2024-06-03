import React from 'react';
import ProductData from './productData';
import { FaStar } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Products = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 800,
      easing: "ease-in-out",
      delay: 10,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="mt-8 mb-10 flex justify-center items-center overflow-hidden">
      <div className="container">
        {/* Header section */}
        <div>
          <p className="text-primary font-bold text-4xl text-center mt-10 mb-8">Top Selling Products</p>
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-3">
          {/* Product Cards */}
          {ProductData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3 bg-cyan-50 p-4 rounded-md"
            >
              <img
                data-aos="fade-up"
                src={data.image}
                alt={data.title}
                className="h-[230px] w-[160px] object-cover mx-auto rounded-md"
              />
              <div>
                <h1 data-aos="fade-up" className="font-semibold text-xl text-center">{data.title}</h1>
                <div data-aos="fade-up" className="flex items-center gap-1 justify-center">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
                <span data-aos="fade-up" className="block text-center">{data.price}</span>
                <p data-aos="fade-up" className="text-center">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Button Section */}
        <div className="flex justify-center mt-10">
          <button className="bg-gradient-to-r from-primary to-secondary rounded-full hover:scale-110 duration-200 text-white py-2 px-4">
            View More Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
