import React from "react";
import NameLogo from "../assets/Agustin-Enriquez.png";
import Logo from "../assets/Palpatine.png";

const Header = () => {
  return <header className="py-4">
    <div className="container mx-auto">
    <div className="flex justify-between items-center">
      <a href="#" className="flex items-center">
        <img
        className="w-16 h-20 rotate-logo"
        src={Logo}
        />
        <img 
        className="mt-6 ml-6"
        src={NameLogo}
        width={200} />
      </a>
      <button className="work-me">Work with me</button>
    </div>
    </div>
  </header>;
};

export default Header;
