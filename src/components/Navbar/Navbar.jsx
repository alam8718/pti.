import React from "react";

import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";

import {RiUserLine} from "react-icons/ri";
import Banner from "../Banner/Banner";

function Navbar() {
  return (
    <>
      <div className="  ">
        <div className="flex justify-around lg:justify-between px-10 md:px-0  items-center  mt-7 mb-5 ">
          <div>
            <h1 className="font-bold text-3xl ">pti.</h1>
          </div>
          {/* search bar and menu select */}
          <div className="flex gap-2  items-center px-4">
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
