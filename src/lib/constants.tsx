import {SiHtml5,SiCss3,SiJavascript,SiTypescript,SiPython,SiReact,SiNextdotjs,SiMongodb,SiAndroid,SiC,SiDart,SiFigma,SiFirebase,SiGit,SiCplusplus,SiExpress,SiRuby,SiDatabricks ,SiRubyonrails,SiSocketdotio} from "react-icons/si";
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
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "Ruby", icon: <SiRuby className="text-red-600" /> },
  { name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-500" /> },
  { name: "NoSQL", icon: <SiDatabricks className="text-purple-500" /> },
  { name: "Socket.IO", icon: <SiSocketdotio className="text-black" /> }
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
    title: "Nyagrik",
    description:
      "A platform providing legal information and consultation services for citizens.",
    tech: ["React", "Next.js", "MongoDB", "TailwindCSS", "API Integration", "TypeScript"],
    icon: "⚖️",
    image: "nyagrik.png",
    link: "https://nyay-2-0.vercel.app/", 
    category: "Frontend",
  },
  {
    title: "StocKentra",
    description:
      "A smart and intuitive stock market analysis platform built to empower investors and traders with real-time market trends and AI-powered insights.",
    tech: ["React", "Next.js", "MongoDB", "TailwindCSS", "API Integration"],
    icon: "📊",
    image: "stock.png",
    link: "https://stoc-kentra.vercel.app/",
    category: "Full Stack",
  },
  {
    title: "WasteFlow",
    description:
      "WasteFlow is an AI-powered waste management platform designed to efficiently connect waste producers with the most suitable recyclers. By leveraging advanced artificial intelligence and smart matching algorithms, WasteFlow ensures that waste is handled sustainably, efficiently, and profitably, while reducing environmental impact.",
    tech: ["Next.js", "MongoDB", "OpenAI API", "TailwindCSS", "Firebase", "python", "Yolo V8", "Google Colab" ],
    icon: "♻️",
    image: "recyvio.png",
    link: "https://waste-market-place.vercel.app/",
    category: "Full Stack", "Ai-ML",
  },
   {
    title: "JALGENE",
    description:
      "JALGENE Platform is a cutting-edge tool designed to revolutionize marine biodiversity research. By leveraging advanced AI algorithms, it processes raw environmental DNA (eDNA) sequencing data to identify and classify marine species, including those from deep-sea ecosystems. This platform enables researchers to discover novel species, assess biodiversity, and monitor ecological health without relying solely on traditional reference databases.",
    tech: ["Next.js", "TypeScript", "React", "TailwindCSS", "Firebase", "API Integration", "AI-ML", "python", "AWS", ],
    icon: "🌊",
    image: "edna.png",
    link: "https://deapsea-edna.vercel.app/",
    category: "Full Stack",
  },
  {
    title: "AI Tuition",
    description:
      "An AI-powered personalized tuition platform recommending study paths using ML.",
    tech: ["Python", "Next.js", "Firebase", "TailwindCSS", "API Integration"],
    icon: "🤖",
    image: "aitut.png",
    link: "https://ai-tuition.vercel.app/", 
    category: "AI/ML",
  },
  {
    title: "3D Solar System",
    description:
      "An interactive 3D simulation of the solar system using JavaScript and WebGL.",
    tech: ["Three.js", "JavaScript", "HTML/CSS", "Texture Mapping"],
    icon: "🪐",
    image: "solar.png",
    link: "https://3-d-solar-system-simulation-chi.vercel.app/", 
    category: "Frontend",
  },
  {
    title: "GDG MAIT Platform",
    description:
      "Official community platform for Google Developer Group at MAIT. Helps users discover events, connect, and grow within the tech ecosystem.",
    tech: ["Next.js", "TypeScript", "React", "TailwindCSS", "Firebase", "API Integration"],
    icon: "🌐",
    image: "gdg.png",
    link: "https://gdg-mait.vercel.app/",
    category: "Full Stack",
  },
  {
    title: "TrendWise",
    description:
      "A full-stack SEO-optimized blog platform with trending topic fetching and AI article generation.",
    tech: ["Next.js", "MongoDB", "OpenAI API", "TailwindCSS", "Firebase"],
    icon: "📈",
    image: "trend.png",
    link: "https://trendwise-three.vercel.app/",
    category: "Full Stack",
  },
];
