import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[60px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50">
          <Link
            to="home"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BiHomeAlt fontSize={25} />
          </Link>
          <Link
            to="about"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BiUser fontSize={25} />
          </Link>
          <Link
            to="services"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsClipboardData fontSize={25} />
          </Link>
          <Link
            to="work"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsBriefcase fontSize={25} />
          </Link>
          <Link
            to="contact"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsChatSquare fontSize={25} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
