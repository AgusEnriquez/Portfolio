import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 ">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div className="flex justify-content items-center flex-col">
              <h2 className="h2 leading-tight text-accent text-5xl">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-8 font-semibold ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolore, totam! Aliquam non quidem similique ullam est.
              </p>
              <button className="button-principal-me"> View all projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1 shadowWorks">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"> NOMBRE PROJECTO</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white "> Lenguajes</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 justify-between	"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1 shadowWorks">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">NOMBRE PROJECTO</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white ">Lenguajes</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1 shadowWorks">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">NOMBRE PROJECTO</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white ">Lenguajes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
