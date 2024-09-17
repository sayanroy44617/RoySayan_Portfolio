import React from "react";

const ExperienceDetails = ({ exp }) => {
  return (
    <div className="p-3">
      <p>
        {exp.JobTitle} @ {exp.Company}
      </p>
      <p>{exp.Duration}</p>
      <ul>
        {exp.Desc.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceDetails;