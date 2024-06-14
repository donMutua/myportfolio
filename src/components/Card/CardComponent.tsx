import React from "react";
import Image from "next/image";
import { sanitize } from "dompurify";

import { API_URL, Project } from "@/lib/api";

type CardComponentProps = {
  project: Project;
};

function CardComponent({ project }: CardComponentProps) {
  const { about, thumbnail, url, githubUrl, name } = project;

  const image = thumbnail?.data.attributes.url.toString();

  const thumbnailUrl = `${API_URL}${image}`;

  console.log("thumbnailUrl", thumbnailUrl);

  return (
    <div className="flex flex-col justify-around mb-12 md:flex-row">
      <img
        src={thumbnailUrl || "/assets/stock.jpg"}
        width="400"
        height="400"
        alt="stock"
        className="rounded-lg mb-3"
        style={{ objectFit: "cover" }}
        onError={(e) => console.error("Image failed to load", e)}
      />

      <div style={{ maxWidth: "550px" }}>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p>{about}</p>
        <div className="flex gap-5 mt-6">
          {url && (
            <button
              className="bg-black text-white cursor-pointer p-3 pl-6 pr-6"
              disabled={!url}
              onClick={() => window.open(sanitize(url))}
            >
              Demo
            </button>
          )}

          {githubUrl && (
            <button
              className="border p-3 pl-6 pr-6 border-spacing-4 border-slate-900 cursor-pointer "
              disabled={!githubUrl}
              onClick={() => window.open(sanitize(githubUrl))}
            >
              Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
