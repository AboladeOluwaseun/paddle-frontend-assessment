import React from "react";

const Countdown = () => {
  const countdownData = [
    { type: "Days", number: "7" },
    { type: "Hours", number: "24" },
    { type: "Minutes", number: "54" },
    { type: "Second", number: "11" },
  ];
  const displayCountdown = countdownData.map((countType) => {
    return (
      <li className="bg-white  mx-auto text-center lmd:p-6 sm:mt-6 mt-4 py-4 text-black rounded-lg ">
        <p>{countType.number}</p>
        <p>{countType.type}</p>
      </li>
    );
  });
  return (
    <ul className="mt-8 sm:text-[1.3rem] md:max-w-[35%]  lmd:flex max-w-[50%] mx-auto p-4 space-x-3 items-center justify-center">
      {displayCountdown}
    </ul>
  );
};

export default Countdown;
