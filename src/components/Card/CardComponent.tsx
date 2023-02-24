import React from "react";
import Image from "next/image";

import stockds from "../../../public/images/stock.png";
import { API_URL, Project } from "@/lib/api";

type CardComponentProps = {
  project: Project;
};

function CardComponent({ project }: CardComponentProps) {
  // const { about, thumbnail, url, githubUrl } = project;

  // const image = thumbnail.data.attributes.url.toString();

  // const thumbnailUrl = `${API_URL}${image}`;

  return (
    <div className="flex flex-col justify-around mb-12 md:flex-row">
      <Image
        src={stockds}
        width={400}
        height={200}
        alt="stock"
        className="rounded-lg"
      />

      <div>
        <h3 className="font-semibold text-lg">Stock Portfolio Dashboard</h3>
        <p>A Tech stock Dashoboard made with Next Js, Radix Ui</p>
        <div className="flex gap-5 mt-6">
          <button className="bg-black text-white cursor-pointer p-3 pl-6 pr-6  ">
            Demo
          </button>
          <button className="border p-3 pl-6 pr-6 border-spacing-4 border-slate-900 cursor-pointer">
            Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
