import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

function AboutSection({ about }: { about?: BlocksContent }) {
  return (
    <section id="about" className=" p-5 w-full bg-slate-300">
      <div className=" w-full p-5 md:w-2/4 md:p-0 t m-auto">
        <h1 className="font-semibold text-2xl mb-2 text-center">About</h1>

        {about ? (
          <BlocksRenderer content={about} />
        ) : (
          <div>No content available</div>
        )}
      </div>
    </section>
  );
}

export default AboutSection;
