import React from "react";

function ShortScreen({bannerImg}) {
  return (
    <>
      <div className="mt-[54px] my-20">
        <div className="mb-[80px] sm:hidden flex flex-col gap-7 justify-center items-center w-full ">
          <div className="w-[400px] text-black text-3xl font-semibold text-center ">
            <h1>Deliver Food To Your Door Step|</h1>
          </div>
          <p className="text-gray-500 text-md">
            Authentic Food| Quick Service,Fast Delivery
          </p>
        </div>
        {/*  */}
        <div className=" container mx-auto w-[387px]  h-[197px] z-10  bg-[#fd9460] rounded-3xl   ">
          <div className=" flex justify-center items-center">
            <img src={bannerImg} alt="" className="-mt-16 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShortScreen;
