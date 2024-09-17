import React from "react";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <div className="h-[60vh] md:w-[80vw] relative">
      <div className="absolute left-[5%] md:left-[10%] lg:left-[28vw]">
        <SectionHeader title="1. About Me ......."/>

        <div className="flex-column md:flex md:space-x-4">
          <div className=" md:w-3/6 text-left grey font-medium p-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            pariatur voluptatem perferendis, aspernatur dolores dicta cupiditate
            excepturi tempora repellendus quod tenetur in dolor necessitatibus
            quasi velit veritatis facilis. Modi asperiores illo molestias
            accusamus consectetur at expedita natus harum, culpa tempora
            dolorum, possimus vitae voluptatibus quaerat debitis?
          </div>
          <div className="md:w-2/6 h-20 bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
