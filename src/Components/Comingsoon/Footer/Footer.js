import React from "react";
import youtube from "../../../Assets/ComingSoon/youtube.png";
import facebook from "../../../Assets/ComingSoon/facebook.png";
import linkedin from "../../../Assets/ComingSoon/linkedin.png";
import instagram from "../../../Assets/ComingSoon/instagram.png";
import twitter from "../../../Assets/ComingSoon/twitter.png";
const Footer = () => {
  const logos = [youtube, facebook, linkedin, instagram, twitter];
  const logoDisplay = logos.map((logo) => {
    return <img className="w-4 h-4" src={logo} alt="" />;
  });

  return (
    <>
      <div className="mt-2 p-4 text-[0.6rem]">
        <div className=" p-2 flex space-x-2 items-center justify-center">
          {logoDisplay}
        </div>
        <div className="flex mt-2 items-center justify-center space-x-8">
          <p>Terms of services</p>
          <p>Privacy Policy</p>
        </div>
        <p className="text-center p-2 ">
          Copyright 2021 @ Peddle Technologies. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
