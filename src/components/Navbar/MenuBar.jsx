import React from "react";
import {IoIosArrowUp} from "react-icons/io";

function MenuBar() {
  const dropdownList = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Details",
      link: "/details",
    },
    {
      name: "Category",
      link: "/category",
    },
    {
      name: "My Favourites",
      link: "/favourites",
    },
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Log In/Sign Up",
      link: "/login",
    },
  ];
  return (
    <>
      <div className="bg-[#fefefe] w-[105px] md:w-[170px] py-2 sm:py-4 px-2 text-sm  rounded-lg group relative cursor-pointer">
        <div className=" ">
          <a
            href="#"
            className="flex items-center   justify-between font-semibold uppercase ">
            Menu
            <span className="text-[#f99f1c] group-hover:rotate-180 duration-300 transition ">
              <IoIosArrowUp size={22} />
            </span>
          </a>
          <div className="hidden group-hover:block duration-300 transition absolute  mt-2 w-full  -left-0 z-[10]">
            <ul className="w-full mt-4 bg-white rounded-xl  py-3 ">
              {dropdownList.map((item, index) => (
                <li
                  key={index}
                  className="w-full px-4 hover:bg-[#e7e9ec] hover:text-[#fd6011] font-medium text-gray-600 py-1 ">
                  <a href={item.link} className="w-full">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
