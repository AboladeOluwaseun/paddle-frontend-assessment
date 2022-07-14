import React from "react";
import logo from "../../../Assets/ComingSoon/logo.png";
import menuIcon from "../../../Assets/ComingSoon/hamburger.png";
import { useState } from "react";
import SideMenu from "./SideMenu";
import cancel from "../../../Assets/ComingSoon/icon-close.svg";
import Nav from "./Nav";

const Header = () => {
  const [active, setActive] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const setMenu = () => {
    if (active) {
      setActive(false);
      setIsSidebarOpened(false);
    } else {
      setActive(true);
      setIsSidebarOpened(true);
    }
  };

  return (
    <div className="flex  justify-between items-center py-3">
      <div className="flex  relative justify-center flex-col items-center">
        <img className="w-[2.8rem] h-[2.8rem]" src={logo} alt="" />
        <p className="text-[1rem] mt-[-1rem]">METRICKS</p>
      </div>
      <Nav></Nav>
      {active && <SideMenu isSidebarOpened={isSidebarOpened}></SideMenu>}
      {active ? (
        <img
          onClick={setMenu}
          className="w-8 h-8 z-[10] cursor-pointer lmd:hidden"
          src={cancel}
          alt=""
        />
      ) : (
        <img
          onClick={setMenu}
          className="lmd:hidden w-10 h-10 cursor-pointer "
          src={menuIcon}
          alt=""
        />
      )}
    </div>
  );
};

export default Header;
