import React from "react";
import {useForm} from "react-hook-form";
import {MdOutlineClose} from "react-icons/md";
import {useGlobalContext} from "../../Context";

function AddItem() {
  const {
    register,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {food, setFood, closeModal} = useGlobalContext();

  return (
    <>
      <div className="bg-black/40 w-full h-screen flex  justify-center items-center ">
        <div className=" relative flex justify-center items-center  h-[700px] w-[500px]  ">
          {/* close button  */}
          <div className="absolute top-7 right-2">
            <button
              onClick={() => closeModal()}
              className="w-[40px] h-[40px] bg-[#ec631f] rounded-full flex justify-center items-center hover:rotate-90 duration-300 ">
              <MdOutlineClose size={30} className="text-white" />
            </button>
          </div>

          {/* form part  */}
          <div className="bg-[#EEEFF0] border-2 shadow-2xl flex justify-center items-center  w-[370px] h-[550px]  rounded-3xl">
            <form
              onSubmit={handleSubmit((data) => {
                const combine = [...food, {Id: food.length + 1, ...data}];
                setFood(combine);
                reset();
              })}
              className="flex flex-col gap-4 w-full mx-6">
              {/*  */}
              <div className="relative  ">
                <input
                  {...register("Name", {
                    required: "Name is required",
                    minLength: {
                      value: 4,
                      message: "Name should be atleast 4 characters long",
                    },
                    maxLength: {
                      value: 40,
                      message: "Name should be less than 40 characters ",
                    },
                  })}
                  type="text"
                  id="Name"
                  name="Name"
                  className="peer w-full bg-[#EEEFF0]  py-3 px-4 rounded-xl   focus:outline-none border-2 border-purple-500 placeholder:font-medium placeholder-transparent "
                  placeholder=""
                />
                <label
                  htmlFor="Name"
                  className=" absolute -top-3.5 left-[19px] text-md  text-gray-600 peer-placeholder-shown:top-4 duration-300  ">
                  <span className="bg-[#EEEFF0] ">Set Name</span>
                </label>
                <span className="pl-2 text-red-600">
                  {errors.Name?.message}
                </span>
              </div>
              <div className="relative  ">
                <input
                  {...register("Price", {
                    required: "Price is required!",
                    pattern: {
                      value: /^[0-9]+(\.[0-9]+)?$/,
                      message: "Please enter a valid numeric value!",
                    },
                  })}
                  type="text"
                  id="Price"
                  name="Price"
                  className="peer w-full bg-[#EEEFF0]  py-3 px-4 rounded-xl   focus:outline-none border-2 border-purple-500 placeholder:font-medium placeholder-transparent "
                  placeholder=""
                />
                <label
                  htmlFor="Price"
                  className=" absolute -top-3.5 left-[19px] text-md  text-gray-600 peer-placeholder-shown:top-4 duration-300  ">
                  <span className="bg-[#EEEFF0] ">Set Price</span>
                </label>
                <span className="pl-2 text-red-600">
                  {errors.Price?.message}
                </span>
              </div>
              <div className="relative  ">
                <input
                  {...register("ImageUrl", {
                    required: "Image source link required",
                    pattern: {
                      value: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: "Please enter a valid link!!",
                    },
                  })}
                  type="text"
                  id="ImageUrl"
                  name="ImageUrl"
                  className="peer w-full bg-[#EEEFF0]  py-3 px-4 rounded-xl   focus:outline-none border-2 border-purple-500 placeholder:font-medium placeholder-transparent "
                  placeholder="Your Name"
                />
                <label
                  htmlFor="ImageUrl"
                  className=" absolute -top-3.5 left-[19px] text-md  text-gray-600 peer-placeholder-shown:top-4 duration-300  ">
                  <span className="bg-[#EEEFF0] ">Image Source Link</span>
                </label>
                <span className="pl-2 text-red-600">
                  {errors.ImageUrl?.message}
                </span>
              </div>
              {/* popular and recommended checkbox  */}
              <div className="flex gap-8 justify-center  mt-5 text-lg">
                <label htmlFor="IsPopular" className="flex items-center gap-2 ">
                  <input
                    type="checkbox"
                    name="IsPopular"
                    {...register("IsPopular")}
                  />
                  Popular
                </label>
                <label
                  htmlFor="IsRecommended"
                  className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="IsRecommended"
                    {...register("IsRecommended")}
                  />
                  Recommended
                </label>
              </div>
              {/* submit button  */}
              <button
                type="submit"
                className="mt-10 px-4 py-2 bg-[#fb681e] rounded-lg text-white font-bold hover:bg-[#f7580e] duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddItem;
