import React from "react";
import * as Progress from "@radix-ui/react-progress";

function ProgressComponent() {
  return (
    <div className="flex flex-col md:items-center md:space-x-4 m-auto md:flex-row ">
      <span>React js:</span>
      <Progress.Root className="h-4 w-80 bg-gray-200 rounded-full">
        <Progress.Indicator
          className="h-4 bg-black rounded-full"
          style={{ width: "50%" }}
        />
      </Progress.Root>
      <span>50%</span>
    </div>
  );
}

export default ProgressComponent;
