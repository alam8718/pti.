import React from "react";

import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";

import {RiUserLine} from "react-icons/ri";

function Navbar() {
  return (
    <>
      <div className="container mx-auto  sm:px-32  ">
        <div className="flex justify-evenly  sm:gap-4   md:gap-16 lg:gap-24 mt-7 mb-5 ">
          <div>
            <h1 className="font-bold text-3xl ">pti.</h1>
          </div>
          {/* search bar and menu select */}
          <div className="flex gap-2  items-center">
            <SearchBar />
            <MenuBar />
          </div>
          {/* profile */}
          <div className="hidden sm:block">
            <a
              href="/profile"
              className="flex justify-center items-center w-[45px] h-[45px] bg-[#fd6011] rounded-full text-white  ">
              <RiUserLine size={25} />
            </a>
          </div>
        </div>
      </div>
      <div className="sm:hidden w-full h-[1px] bg-black/5 shadow-sm"></div>
    </>
  );
}

export default Navbar;
