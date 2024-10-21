import { SkillToolEnum } from "./components/utils";

export interface SocialMediaLink {
  github: string;
  linkedIn: string;
}

export interface SkillInterface {
  label: string;
  url: string;
}

export interface ExperienceInterface {
  company: string;
  companyImage: string;
  description: string;
  position: string;
  startDate: string;
  endDate: string;
  exp: string;
}

export interface ProjectInterface {
  title: string;
  description: string;
  tools: SkillToolEnum[];
  organization: string;
  highlight?: string;
  link?: string;
  image: string;
}
