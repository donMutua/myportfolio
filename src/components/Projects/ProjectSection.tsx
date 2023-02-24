import { Portfolio, PortfolioItem, Project } from "@/lib/api";
import CardComponent from "../Card/CardComponent";

function ProjectSection({ projects = [] }: { projects?: Project[] }) {
  return (
    <section id="projects" className="bg-yellow-100">
      <div className="p-5">
        <h1 className="font-semibold text-2xl mb-6 text-center">Projects</h1>

        {projects?.map((project) => (
          <CardComponent key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
