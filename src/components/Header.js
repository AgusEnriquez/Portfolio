import React from "react";
import Logo from "../assets/AGUSTIN-ENRIQUEZ.png";

const Header = () => {
  return <header className="py-4">
    <div className="container mx-auto">
    <div className="flex justify-between items-center">
      <a href="#">
        <img src={Logo}
        width={200} />
      </a>
      <button className="btn btn-sm">Work with me</button>
    </div>
    </div>
  </header>;
};

export default Header;
