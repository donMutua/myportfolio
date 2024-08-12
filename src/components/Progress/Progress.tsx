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
  const max = 100;

  if (max <= 0) {
    console.error(
      `The max value for the progress bar must be greater than 0. The current value is ${max}.`
    );
  }

  return (
    <div className="flex flex-col md:items-center md:space-x-4 m-auto md:flex-row ">
      <span>{skill?.language}:</span>
      <Progress.Root className="h-4 w-80 bg-gray-200 rounded-full" max={max}>
        <Progress.Indicator style={{ width: `${Number(skillPercentage)}%` }} />
      </Progress.Root>
    </div>
  );
}

export default ProgressComponent;

{
  /* <Progress.Indicator
className="h-4 bg-black rounded-full"
style={{ width: `${Number(skillPercentage)}%` }}
/> */
}
