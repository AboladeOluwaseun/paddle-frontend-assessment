import React from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ isSidebarOpened }) => {
  const navMenu = [
    { navName: "ABOUT US", navRoute: "about" },
    { navName: "BLOG", navRoute: "blog" },
    { navName: "CONTACT US", navRoute: "contact" },
  ];
  const navItems = navMenu.map((navItem, index) => {
    return (
      <li className="p-3">
        <Link to={`/${navItem.navRoute}`} key={index}>
          {navItem.navName}
        </Link>
      </li>
    );
  });
  return (
    <>
      {isSidebarOpened && (
        <div className="fixed bg-black top-0 left-0 bg-lightbox opacity-70 w-[100%] h-[100%] z-[2] lmd:hidden"></div>
      )}
      {isSidebarOpened && (
        <div
          className={`fixed ease-in-out duration-500 z-[5] lmd:hidden  top-0 right-0  h-[100%] w-[60%]  block bg-white  ${
            isSidebarOpened ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="p-8 relative text-black top-20 left-16 text-[1.2rem] hover:border-b hover:border-Orange  font-semibold">
            {navItems}
          </ul>
        </div>
      )}
    </>
  );
};

export default SideMenu;
