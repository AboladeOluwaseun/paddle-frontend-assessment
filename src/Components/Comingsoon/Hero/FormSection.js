import React from "react";

const FormSection = () => {
  return (
    <div>
      <div className="lmd:flex mx-auto mt-8 items-center justify-center">
        <input
          className="bg-transparent focus:outline-none border-b-[1px]  mt-2 text-center border-b-white"
          type="text"
          placeholder="First Name"
          name=""
          id=""
        />
        <input
          className="mt-2 focus:outline-none text-center bg-transparent"
          type="text"
          placeholder="Last Name"
          name=""
          id=""
        />
      </div>
      <div>
        <input
          className="py-2 mt-12 text-black focus:outline-none px-6  rounded-full"
          type="email"
          placeholder="Enter your email address"
          name=""
          id=""
        />
        <button
          className="mt-8 px-6 py-2 rounded-full outline-none bg-[#6d65c5]"
          type="submit"
        >
          JOIN OUR WAITING LIST
        </button>
      </div>
    </div>
  );
};

export default FormSection;
