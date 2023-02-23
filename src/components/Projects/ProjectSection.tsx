import Image from "next/image";
import CardComponent from "../Card/CardComponent";

function ProjectSection() {
  return (
    <section className="bg-yellow-200">
      <div className="p-5">
        <h1 className="font-semibold text-2xl mb-6 text-center">Projects</h1>

        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </section>
  );
}

export default ProjectSection;
