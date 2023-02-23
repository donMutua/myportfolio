import { Portfolio, PortfolioItem } from "@/lib/api";
import Image from "next/image";
import CardComponent from "../Card/CardComponent";

function ProjectSection({ projects }) {
  return (
    <section id="projects" className="bg-yellow-100">
      <div className="p-5">
        <h1 className="font-semibold text-2xl mb-6 text-center">Projects</h1>

        {projects.map((project) => (
          <CardComponent project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
