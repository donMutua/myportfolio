import React from "react";

function AboutSection() {
  return (
    <section className=" p-5 w-full bg-slate-300">
      <div className=" w-full p-5 md:w-2/4 md:p-0 t m-auto">
        <h1 className="font-semibold text-2xl mb-2 text-center">About</h1>
        <p className=" text-base  md:text-lg text-justify">
          <span className="font-semibold">Jambo!</span> I'm a Frontend engineer
          with a creative twist and a flair for coding hailing from Nairobi,
          Kenya. I've been tinkering around in the creative and software
          development field for over 10 years now, honing my craft in React.js,
          Node.js, and UI/UX. When it comes to projects, I believe in bringing
          both style and substance to the table. I love creating visually
          striking and user-friendly interfaces that not only look great but
          also work flawlessly. Whether it's a snazzy website or a complex web
          application, I thrive on the challenge of making something truly
          awesome. With my eagle-eye for detail and a knack for innovative
          problem-solving, I always strive to exceed expectations and inject a
          bit of creativity into every project. So, if you're searching for a
          Frontend engineer who can bring some personality and pizazz to your
          project, I'm your person! Let's collaborate and create something truly
          remarkable together.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
