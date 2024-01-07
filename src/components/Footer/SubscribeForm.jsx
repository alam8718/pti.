import React from "react";
import {useForm} from "react-hook-form";
import {IoIosArrowRoundForward} from "react-icons/io";
function SubscribeForm() {
  const {register, handleSubmit} = useForm();

  return (
    <>
      <div>
        <div className="bg-white w-[355px] sm:w-[400px] lg:w-[500px] py-3 sm:py-2 rounded-lg sm:rounded-2xl flex  ">
          <form
            action=""
            className="w-full mx-5 flex justify-between gap-6 sm:gap-12"
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}>
            <input
              {...register("email")}
              className="outline-none placeholder:font-bold placeholder:text-gray-400/70 placeholder:text-xs"
              type="email"
              placeholder="Enter your Email"
            />
            <button
              type="submit"
              className="flex items-center font-bold text-[#fc6011] sm:bg-[#fc6011] sm:px-4 sm:rounded-xl sm:text-white">
              Subscribe <IoIosArrowRoundForward size={30} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SubscribeForm;
