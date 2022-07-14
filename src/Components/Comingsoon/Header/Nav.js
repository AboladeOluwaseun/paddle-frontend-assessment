import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const nav = [
    { navName: "ABOUT US", navRoute: "about", id: "1" },
    { navName: "BLOG", navRoute: "blog", id: "2" },
    { navName: "CONTACT US", navRoute: "contact", id: "3" },
  ];
  const navItems = nav.map((navItem) => {
    return (
      <Link
        key={navItem.id}
        className="hover:bg-[#271AC1] active:bg-white active:text-black hover:px-6 hover:py-2 hover:rounded-full"
        to={`/${navItem.navRoute}`}
      >
        {navItem.navName}
      </Link>
    );
  });

  return (
    <>
      <div className="hidden lmd:flex items-center space-x-7 text-[0.8rem]">
        {navItems}
      </div>
    </>
  );
};

export default Nav;
