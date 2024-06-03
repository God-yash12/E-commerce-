import React from "react";
import Logo from "../../assets/Logo.png";
import { BsSearchHeart } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import DarkMode from "./DarkMode";
import { IoMdArrowDropdown } from "react-icons/io";




const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Men's Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Women's Wear",
    link: "/#",
  },
];

const DropDownLinks = [
    {
        id: 1,
        name: "Treding Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    },
]

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration:200 ralative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/50 py-3 md:text-base ">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl sm:text-xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10 rounded-full" />
              Wizard
            </a>
          </div>
          {/* Search bar */}
          <div className="flex justify-between items-center gap-3">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary "
              />
              <BsSearchHeart className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* order button */}
          <button
            onClick={() => alert("Order is processing")}
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <IoCartOutline className="text-xl text-white drop-shadow-sm cursor-pointer " />
          </button>

          {/* Darkmode Switch */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="hidden sm:flex justify-between items-center gap-1 top-2 text-sm md:text-base">
          {Menu.map((data) => (
            <li
              key={data.id}
              className="
              inline-block px-1 hover:text-primary duration-200
              sm:px-2 sm:py-1  sm:rounded
              md:px-3 md:py-2  md:rounded-md
              lg:px-4 lg:py-3  lg:rounded-lg
              xl:px-5 xl:py-4  xl:rounded-full
              "
            >
              <a href={data.link}> {data.name} </a>
            </li>
          ))}
          {/*  drop down menu */}

          <li className="group relative cursor-pointer">
            <a href="#" 
            className="flex items-center gap-[2px] py-2"
            >
                Trending 
                <span>
                    <IoMdArrowDropdown 
                     className=" transition-all duration-200 group-hover:rotate-180 "
                    />
                </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                    {DropDownLinks.map((data, index) => (
                        <li key={index}>
                            <a
                             href={data.link}
                             className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            >{data.name} </a>
                        </li>
                    ))}
                </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
