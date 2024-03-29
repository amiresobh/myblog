import React from "react";
import dynamic from "next/dynamic";
import MenuBTN from "./MenuBTN";
import HireMe from "./HireMe/HireMe";
import FlyoutMenu from "./HireMe/FlyoutMenu";

const NoSSRLogo = dynamic(() => import("./Logo"), { ssr: false });
const Navbar = () => {
  return (
    <div className="mainnav !left-0 sm:mx-20">
      <NoSSRLogo />
      <MenuBTN />
      <FlyoutMenu />
    </div>
  );
};

export default Navbar;
