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
      <div className="bg-white text-center mt-4 py-4 text-black rounded-lg ">
        <p>{countType.number}</p>
        <p>{countType.type}</p>
      </div>
    );
  });
  return (
    <div className="mt-8  lmd:flex max-w-[50%] mx-auto p-4 space-x-3 items-center justify-center">
      {displayCountdown}
    </div>
  );
};

export default Countdown;
