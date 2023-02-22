import Image from "next/image";
import hero from "../../../public/images/hero3.png";
import Navbar from "../NavBar/NavBar";

function HeroSection() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black w-1/2"></div>
      <div className="absolute inset-y-0 right-0 w-1/2">
        <Image src={hero} alt="Hero image" fill />
      </div>

      <nav className="absolute inset-0 text-white p-5 md:p-20  flex flex-col  justify-center z-20 ">
        <h1 className="text-3xl font-bold mb-6 opacity-90 md:text-7xl">
          React Frontend <br /> Developer
        </h1>
        <p className="text-sm font-light opacity-80 mb-6 pr-6 md:text-base">
          Hi, I'm Don Mutua, A passionate Frontend developer based in Nairobi,
          Kenya
        </p>
        <div>
          <button className="bg-white text-black p-3 hover:bg-slate-200 md:p-5">
            DOWNLOAD CV
          </button>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-5 mb">
            <p className="underline text-xs md:text-base">LinkedIn</p>{" "}
            <span className="text-xs md:text-base">/</span>{" "}
            <p className="underline text-xs md:text-base">Github</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeroSection;
