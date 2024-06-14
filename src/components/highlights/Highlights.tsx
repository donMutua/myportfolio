import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

function Highlights({ highlights }: { highlights?: BlocksContent }) {
  return (
    <section id="highlights" className=" p-5 w-full bg-slate-200 ">
      <div className=" w-full p-5 md:w-2/4 md:p-0 t m-auto">
        <h1 className="font-semibold text-2xl mb-2 ">
          Professional Highlights
        </h1>

        {highlights ? (
          <BlocksRenderer content={highlights} />
        ) : (
          <div>No content available</div>
        )}
      </div>
    </section>
  );
}

export default Highlights;
