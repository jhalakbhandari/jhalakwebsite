import React from "react";
import { Link } from "react-router-dom";
import { Pace, WindupChildren, Linebreaker } from "windups";

import { easings } from "react-animation";
const About = () => {
  console.log(window.innerWidth);
  const style = {
    animation: ` pop-in ${easings.easeInExpo} 500ms forwards`,
  };
  return (
    <div className=" xl:justify-start xl:pl-48 flex justify-center w-full pt-40">
      <div>
        <h1 style={style} className="text-center">
          JHALAK BHANDARI
        </h1>

        <p className="text-center">
          <WindupChildren>
            <Pace getPace={(char) => (char === " " ? 600 : 40)}>
              {"React developer | Student"}
            </Pace>
          </WindupChildren>
        </p>

        <p className="py-3">
          <Linebreaker fontStyle={"72px 'Menlo', monospace"} width={3000}>
            <WindupChildren>
              <Pace getPace={(char) => (char === " " ? 400 : 40)}>
                You will always find me learning, teaching, and yearning to
                learn a new skill. I love reading books and singing!
              </Pace>
            </WindupChildren>
          </Linebreaker>
        </p>

        <div class=" flex w-full justify-evenly">
          <Link to="/contact" className="no-underline">
            <div class=" bg-black text-white py-2 px-10 rounded-lg">
              Contact
            </div>
          </Link>

          <div class="py-2 px-10 rounded-lg bg-gray-400 text-black">Resume</div>
        </div>
      </div>
    </div>
  );
};

export default About;
