export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface PortfolioItem {
  attributes: {
    about: string;
    projects: Project[];
    skills: Skill[];
  };
}

interface Project {
  id: number;
  about: string;
  url: string;
  githubUrl: string;
  stacktags?: Array<string>;
  //   thumbnail: Thumbnail;
}

interface Skill {
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
  "api/portfolios?_limit=10&_start=0&_publicationState=preview&_locale=en&populate=projects.stackTags.techstack,projects.thumbnail,projects.stackTags.techstack,projects.techstack.icon,socialmedia.icon,skills";

export const getPortfolio = async (): Promise<Portfolio> => {
  const response = await fetch(`${API_URL}/${url}`);
  const data = await response.json();
  return data.data;
};
