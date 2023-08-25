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
        <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
          <div>
            <h2 className="h2 leading-tight text-accent">
              My Latest <br />
              Work.
            </h2>
            <p className="max-w-sm mb-16">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              totam! Aliquam non quidem similique ullam est.
            </p>
            <button className="btn btn-sm"> View all projects</button>
          </div>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src="{Img1}"
              alt=""
            />
            <div>UI/UX Design</div>
            <div>
              <span> Project Title</span>
            </div>
          </div>
        </div>
        <div>2</div>
      </div>
    </div>
  );
};

export default Work;
