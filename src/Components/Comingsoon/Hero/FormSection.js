import React from "react";

const FormSection = () => {
  return (
    <div>
      <div className="lmd:flex space-x-4 mx-auto mt-8 items-center justify-center">
        <input
          className="bg-transparent focus:outline-none border-b-[1px]  mt-2 text-center border-b-white"
          type="text"
          placeholder="First Name"
          name=""
          id=""
        />
        <input
          className="mt-2 focus:outline-none border-b-[1px] text-center bg-transparent"
          type="text"
          placeholder="Last Name"
          name=""
          id=""
        />
      </div>
      <div className="md:flex md:ml-16 mx-auto items-center justify-center ">
        <div>
          <input
            className="py-4 mt-12 w-[18rem] text-black focus:outline-none px-6   rounded-full"
            type="email"
            placeholder="Enter your email address"
            name=""
            id=""
          />
        </div>

        <button
          className="mt-12 px-8 md:relative right-14  w-[15rem] py-4 rounded-full outline-none bg-[#6d65c5]"
          type="submit"
        >
          JOIN OUR WAITING LIST
        </button>
      </div>
    </div>
  );
};

export default FormSection;
