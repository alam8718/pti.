import React from "react";

function Card({item}) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className=" w-[125px] md:w-[203px] h-[165px] md:h-[270px] rounded-2xl overflow-hidden shadow-md shadow-gray-800 ">
          <img
            src={item.ImageUrl}
            alt="food items"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-[#667079] text-md text-center">{item.Name}</h1>
        </div>
      </div>
    </>
  );
}

export default Card;
