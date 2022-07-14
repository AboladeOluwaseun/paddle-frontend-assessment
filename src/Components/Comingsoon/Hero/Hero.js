import React from "react";
import Countdown from "./Countdown";
import FormSection from "./FormSection";

const Hero = () => {
  return (
    <>
      <div className="text-center mt-16 p-6">
        <h1 className=" font-bold uppercase text-3xl">
          Something awesome is coming soon
        </h1>
        <p className="mt-8 sm:text-[1.3rem]">
          Your all-in-one affiliate marketing tracking software track, automate
          and optimize your campaigns.
        </p>
        <Countdown></Countdown>
        <FormSection></FormSection>
      </div>
    </>
  );
};

export default Hero;
