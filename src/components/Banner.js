import React from "react";
import Image from "../assets/avatar.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import NameLogo from "../assets/Agustin-Enriquez.png";
import { BsArrowDownSquare } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              <img className="" src={NameLogo} />
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold upperase leading-[1]"
            >
              <span className="mr-4"> I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 font-semibold"
            >
              <p>
                Me gusta crear productos frontend sólidos y escalables con
                excelentes experiencias de usuario.
              </p>
              <p>
                Me gusta crear productos frontend sólidos y escalables con
                excelentes experiencias de usuario.
              </p>
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="button-principal-me">CONTACT ME</button>
              <div class="group relative flex">
                <button>
                  <FiGithub
                    fontSize={35}
                    className="w-8 hover:scale-125 duration-200 hover:stroke-green-400"
                    fill="none"
                  />
                </button>
                <button class="button-cv ml-6" type="button">
                  <span class="button__text">CV</span>
                  <span class="button__icon">
                    <BsArrowDownSquare 
                    fontSize={25} />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
