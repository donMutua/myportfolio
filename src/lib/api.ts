import { type BlocksContent } from "@strapi/blocks-react-renderer";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface PortfolioItem {
  attributes: {
    aboutMe: {
      id?: number;
      content: BlocksContent;
    };
    highlights: {
      id?: number;
      content: BlocksContent;
    };
    projects: Project[];
    skills: Skill[];
  };
}

export interface Project {
  id: number;
  about: string;
  url: string;
  githubUrl: string;
  stacktags?: Array<string>;
  thumbnail: Thumbnail;
  name: string;
}

export interface Skill {
  id: number;
  language: string;
  skill: number;
}

interface Thumbnail {
  data: {
    attributes: {
      alternativeText: string | null;
      url: string;
    };
  };
}

export type Portfolio = PortfolioItem[];

const url =
  "api/portfolios?_limit=10&_start=0&_publicationState=preview&_locale=en&populate=projects.stackTags.techstack,projects.thumbnail,projects.stackTags.techstack,projects.techstack.icon,socialmedia.icon,skills,aboutMe,highlights";

export const getPortfolio = async (): Promise<Portfolio> => {
  const response = await fetch(`${API_URL}/${url}`);
  const data = await response.json();

  console.log("data", data);
  return data.data;
};
