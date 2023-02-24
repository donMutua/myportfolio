import React from "react";
import * as Progress from "@radix-ui/react-progress";

type SkillProps = {
  skill: {
    language: string;
    skill: number;
  };
};

function ProgressComponent({ skill }: SkillProps) {
  const skillPercentage = skill.skill * 100;

  return (
    <div className="flex flex-col md:items-center md:space-x-4 m-auto md:flex-row ">
      <span>{skill.language}:</span>
      <Progress.Root className="h-4 w-80 bg-gray-200 rounded-full">
        <Progress.Indicator
          className="h-4 bg-black rounded-full"
          style={{ width: `${skillPercentage}%` }}
        />
      </Progress.Root>
      {/* <span>{skillPercentage}%</span> */}
    </div>
  );
}

export default ProgressComponent;
