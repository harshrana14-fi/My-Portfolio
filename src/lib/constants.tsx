import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiAndroid,
  SiC,
  SiDart,
  SiFigma,
  SiFirebase,
  SiGit,
  SiCplusplus,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export const TECH_STACK = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-200" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Android", icon: <SiAndroid className="text-green-600" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "C", icon: <SiC className="text-blue-300" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-300" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
];

export const SOCIAL_LINKS = [
  { icon: <span className="text-xl">🌐</span>, link: "#", label: "Github" },
  { icon: <span className="text-xl">📧</span>, link: "#", label: "LinkedIn" },
  { icon: <span className="text-xl">🐦</span>, link: "#", label: "Email" },
  { icon: <span className="text-xl">📁</span>, link: "#", label: "Resume" },
];

export const CERTIFICATIONS: string[] = [
  "Responsive Web Design - freeCodeCamp",
  "JavaScript Algorithms and Data Structures - freeCodeCamp",
  "Modern React with Redux - Udemy",
  "Node.js Masterclass - Udemy",
];

export const PROJECTS = [
  {
    title: "Nyay",
    description:
      "A platform providing legal information and consultation services for citizens.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    icon: "⚖️",
    image: "nyay.png",
    link: "#",
    category: "Frontend",
  },
  {
    title: "TrendWise",
    description:
      "A full-stack SEO-optimized blog platform with trending topic fetching and AI article generation.",
    tech: ["Next.js", "MongoDB", "OpenAI API", "TailwindCSS"],
    icon: "📈",
    image: "wise.png",
    link: "#",
    category: "Full Stack",
  },

  {
    title: "AI Tuition",
    description:
      "An AI-powered personalized tuition platform recommending study paths using ML.",
    tech: ["Python", "TensorFlow", "Next.js"],
    icon: "🤖",
    image: "aitut.png",
    link: "#",
    category: "AI/ML",
  },
  {
    title: "3D Solar System",
    description:
      "An interactive 3D simulation of the solar system using JavaScript and WebGL.",
    tech: ["Three.js", "JavaScript", "HTML/CSS"],
    icon: "🪐",
    image: "solar.png",
    link: "#",
    category: "Frontend",
  },

  {
    title: "Gym Website",
    description:
      "A responsive website for a fitness center with class bookings and trainer profiles.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icon: "🏋️",
    image: "gym.png",
    link: "#",
    category: "Backend",
  },
];
