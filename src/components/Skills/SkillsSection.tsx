import React from "react";
import ProgressComponent from "../Progress/Progress";

function SkillsSection({ skills }) {
  return (
    <section id="skills" className=" p-5 md:pt-10 md:pb-20 bg-white">
      <h1 className="font-semibold text-2xl mb-2 text-center">Skills</h1>

      <div className="flex flex-wrap gap-6 m-auto">
        {skills.map((skill) => (
          <ProgressComponent key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
