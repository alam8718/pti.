import React from "react";
import Icons from "./Icons";
import SubscribeForm from "./SubscribeForm";
import fotterImg from "../../images/image2.png";

function Footer() {
  return (
    <>
      <div className="  mt-28 bg-[#f99f1c] w-full h-[435px] ">
        <div className="  flex flex-col items-center justify-center ">
          <div className="flex items-center justify-center sm:justify-around container mx-auto ">
            <div className=" sm:w-[50%] ">
              {/* subscribe part */}
              <div className="my-10">
                <SubscribeForm />
              </div>

              <div className="flex   flex-col-reverse items-center sm:flex-row  ">
                <div className="w-auto text-center sm:text-start flex flex-col gap-6 ">
                  <h1 className="text-4xl font-bold">
                    pti<span className="text-[#fc6011]">.</span>
                  </h1>
                  <p className=" font-bold">
                    Copyright&copy;Trip.All Right Reserved
                  </p>
                </div>

                {/* social icons  */}
                <div className="my-6 sm:my-12 w-[40%] flex flex-col items-end">
                  <Icons />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="hidden sm:block">
              <img src={fotterImg} alt="fotter iamge" className="w-[300px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
