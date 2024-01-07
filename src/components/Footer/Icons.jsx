import React from "react";
import {FaGoogle, FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

function Icons() {
  return (
    <>
      <div className="flex   gap-4">
        <div className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-[#fc6011] text-white sm:bg-[#feddba] sm:text-[#fc6011]">
          <FaGoogle size={18} />
        </div>
        <div className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-[#fc6011] text-white sm:bg-[#feddba] sm:text-[#fc6011]">
          <FaTwitter size={18} />
        </div>
        <div className="flex justify-center items-center  w-[35px] h-[35px] rounded-full bg-[#fc6011] text-white sm:bg-[#feddba] sm:text-[#fc6011]">
          <FaInstagram size={18} />
        </div>
      </div>
    </>
  );
}

export default Icons;
