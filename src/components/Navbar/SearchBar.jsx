import React from "react";
import {IoSearchOutline} from "react-icons/io5";

function SearchBar() {
  return (
    <>
      <div className="flex items-center bg-[#fefefe] w-[192px] md:w-[510px] py-2 sm:py-3 px-3 gap-2 rounded-lg">
        <IoSearchOutline size={23} className="text-[#f99f1c] font-bold " />
        <input
          type="text"
          placeholder="Search Audiobook"
          className="outline-none w-full text-sm sm:text-lg  placeholder:font-semibold placeholder:sm:font-normal placeholder:text-gray-400/60 placeholder:sm:text-gray-400 "

        />
      </div>
    </>
  );
}

export default SearchBar;
