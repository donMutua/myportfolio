import React from "react";
import ProgressComponent from "../Progress/Progress";

function SkillsSection() {
  return (
    <section className=" p-5 md:pt-10 md:pb-20 bg-white">
      <h1 className="font-semibold text-2xl mb-2 text-center">Skills</h1>

      <div className="flex flex-wrap  gap-6 m-auto">
        <ProgressComponent />
        <ProgressComponent />
        <ProgressComponent />
        <ProgressComponent />
      </div>
    </section>
  );
}

export default SkillsSection;
