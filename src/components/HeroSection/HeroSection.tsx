import Image from "next/image";
import hero from "../../../public/images/hero3.png";

const linkedInUrl = "https://www.linkedin.com/in/idrawdesigns/";
const githubUrl = "https://github.com/donMutua";
const cvUrl =
  "https://docs.google.com/document/d/1Rw0buZmIq-HAWkbB-TgDV_diz0xBc5NhWw9gxiXYnSI/edit?usp=sharing";

function HeroSection() {
  return (
    <div className="  md:relative md:h-screen">
      <div className="md:absolute inset-0 bg-black w-1/2"></div>
      <div className="hidden absolute inset-y-0 right-0 w-1/2 md:block">
        <Image src={hero} alt="Hero image" fill />
      </div>

      <nav className="md:absolute inset-0 text-center text-white p-5 md:p-20  md:flex flex-col md:text-left  justify-center z-20 ">
        <h1 className=" font-semibold mb-2 opacity-90 md:text-7xl">
          Donald <br /> Mutua
        </h1>

        {/* <h3 className="text-2xl font-semibold mb-6">Front Developer</h3> */}
        <p className="text-sm font-regular opacity-80 mb-6 pr-6 md:text-base">
          Senior Software Engineer | UI/UX Designer | CI/CD
        </p>
        <div>
          <button
            className="bg-white text-black p-3 hover:bg-slate-200 md:p-5 cursor-pointer"
            onClick={() => window.open(cvUrl, "_blank")}
          >
            DOWNLOAD CV
          </button>
        </div>

        <div className="flex justify-center gap-5 mt-4 md:justify-start">
          <p
            className="underline text-xs md:text-base cursor-pointer"
            onClick={() => window.open(linkedInUrl, "_blank")}
          >
            LinkedIn
          </p>{" "}
          <span className="text-xs md:text-base cursor-pointer">/</span>{" "}
          <p
            className="underline text-xs md:text-base cursor-pointer"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            Github
          </p>
        </div>
      </nav>
    </div>
  );
}

export default HeroSection;
