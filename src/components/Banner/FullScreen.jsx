import React from "react";

function FullScreen({bannerImg}) {
  return (
    <>
      <div className="w-full  my-[135px] container mx-auto  bg-[#f99f1c] rounded-3xl  ">
        <div className=" w-full   ">
          <div className=" flex items-center justify-center sm:justify-between mx-12 lg:mx-24 gap-2 ">
            <div className="hidden sm:flex sm:flex-col gap-6 ">
              <div className="text-[#ffefe7] sm:text-2xl lg:text-5xl">
                <h1>Deliver Food To Your</h1>
                <h1>Door Step|</h1>
              </div>
              <p className="text-[#ebd5b4] text-md">
                Authentic Food| Quick Service,Fast Delivery
              </p>
            </div>

            <div className="">
              <img src={bannerImg} alt="" className=" w-[350px] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullScreen;
