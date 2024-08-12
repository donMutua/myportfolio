import React from "react";
import * as Progress from "@radix-ui/react-progress";

type SkillProps = {
  skill: {
    language: string;
    skill: number;
  };
};

function ProgressComponent({ skill }: SkillProps) {
  const skillPercentage = skill ? skill.skill * 100 : 0;

  console.log(typeof skillPercentage, skillPercentage);

  return (
    <div className="flex flex-col md:items-center md:space-x-4 m-auto md:flex-row ">
      <p>Progress</p>
    </div>
  );
}

export default ProgressComponent;
