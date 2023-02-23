import Image from "next/image";

import cuteBoy from "../../../public/images/cuteboy.png";

function ContactMe() {
  const currentYear = new Date().getFullYear();
  return (
    <section className=" text-white pt-5">
      <div className="p-5 md:w-2/4 md:p-0 t m-auto">
        <h1 className="font-semibold text-2xl mb-2 text-center">
          Let's Create Something Great Together! - Hire Me
        </h1>
        <div className=" mb-10 text-center">
          <Image
            src={cuteBoy}
            width={200}
            height={300}
            alt="boy"
            className="rounded-lg m-auto mt-4 mb-4"
          />
          <h3 className="text-semibold text-lg mt-7">
            don.technologist@gmail.com | +254 734 977 088
          </h3>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {currentYear} My Website. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}

export default ContactMe;
