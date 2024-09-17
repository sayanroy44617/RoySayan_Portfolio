import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { experience } from "../utils/Experience";
import ExperienceDetails from "./ExperienceDetails";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(
   experience[0]);



  return (
    <div className="h-[50vh] md:w-[80vw] relative">
      <div className="absolute left-[30vw]">
        <SectionHeader title="2. Experience ......" />

        <div className="flex">
        <ul>
            {experience.map((exp, idx) => (
              <li key={idx} className="m-2 p-2" onClick={() => setSelectedExp(exp)}>
                {exp.Company}
              </li>
            ))}
          </ul>

          <ExperienceDetails exp={selectedExp}/>
        </div>
      </div>
    </div>
  );
};

export default Experience;
