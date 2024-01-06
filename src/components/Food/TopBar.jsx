import React from "react";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
function TopBar({first, second}) {
  return (
    <>
      <div className="flex justify-between  ">
        <h1 className="text-lg">{first}</h1>
        <div className="cursor-pointer flex items-center justify-center gap-3 px-4   ">
          <h1 className="  hidden sm:block text-[#f98044] text-lg">{second}</h1>
          <div className="flex">
            <span>
              <IoIosArrowBack size={22} />
            </span>
            <span>
              <IoIosArrowForward size={22} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
