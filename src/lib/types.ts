import { JSX } from "react";

export interface TechSkill {
  name: string;
  level: number;
  icon: () => JSX.Element; // Function that returns a JSX element
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  category: string;
}

export interface SocialLink {
  icon: () => JSX.Element;
  link: string;
  label: string;
}
