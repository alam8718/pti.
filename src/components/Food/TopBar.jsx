import React from "react";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
function TopBar({first, second, handleNext, handlePrev}) {
  return (
    <>
      <div className="flex justify-between px-4 ">
        <h1 className="text-lg font-semibold">{first}</h1>
        <div className="cursor-pointer flex items-center justify-center gap-3 px-2   ">
          <h1 className="  hidden sm:block text-[#f98044] text-lg">{second}</h1>
          <div className="flex ">
            <button
              className="hidden sm:block hover:text-gray-400 duration-300"
              onClick={handlePrev}>
              <IoIosArrowBack size={22} />
            </button>
            <button
              className="hover:text-gray-400 duration-300"
              onClick={handleNext}>
              <IoIosArrowForward size={22} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
