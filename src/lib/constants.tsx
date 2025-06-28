// constants.ts React from 'react';

export const TECH_STACK = [
  {
    name: 'HTML & CSS',
    level: 95,
    icon: <span className="text-xl">🎨</span>,
    color: 'from-red-400 to-pink-500',
  },
  {
    name: 'JavaScript/Typescript',
    level: 92,
    icon: <span className="text-xl">⚙️</span>,
    color: 'from-yellow-400 to-orange-400',
  },
  {
    name: 'React & Next.js',
    level: 96,
    icon: <span className="text-xl">⚛️</span>,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Backend APIs',
    level: 88,
    icon: <span className="text-xl">🔧</span>,
    color: 'from-green-400 to-emerald-400',
  },
  {
    name: 'DSA',
    level: 85,
    icon: <span className="text-xl">🚀</span>,
    color: 'from-purple-400 to-pink-300',
  },
  {
    name: 'AI-ML',
    level: 81,
    icon: <span className="text-xl">🤖</span>,
    color: 'from-red-400 to-orange-200',
  },
];

export const SOCIAL_LINKS = [
  { icon: <span className="text-xl">🌐</span>, link: '#', label: 'Github' },
  { icon: <span className="text-xl">📧</span>, link: '#', label: 'LinkedIn' },
  { icon: <span className="text-xl">🐦</span>, link: '#', label: 'Email' },
  { icon: <span className="text-xl">📁</span>, link: '#', label: 'Resume' },
];

export const CERTIFICATIONS: string[] = [
  'Responsive Web Design - freeCodeCamp',
  'JavaScript Algorithms and Data Structures - freeCodeCamp',
  'Modern React with Redux - Udemy',
  'Node.js Masterclass - Udemy',
];


export const PROJECTS = [
  {
    title: 'Nyay',
    description: 'A platform providing legal information and consultation services for citizens.',
    tech: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    icon: '⚖️',
    image: 'nyay.png',
    link: '#',
    category: 'Frontend',
  },
  {
    title: 'AI Tuition',
    description: 'An AI-powered personalized tuition platform recommending study paths using ML.',
    tech: ['Python', 'TensorFlow', 'Next.js'],
    icon: '🤖',
    image:'aitut.png',
    link: '#',
    category: 'AI/ML',
  },
  {
    title: 'Netflix Clone',
    description: 'A clone of the Netflix UI with Firebase-based user auth and TMDB API integration.',
    tech: ['React', 'Firebase', 'TailwindCSS', 'TMDB API'],
    icon: '🎬',
    image:'netflix.png',
    link: '#',
    category: 'Frontend',
  },
  {
    title: 'Gym Website',
    description: 'A responsive website for a fitness center with class bookings and trainer profiles.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    icon: '🏋️',
    image:'gym.png',
    link: '#',
    category: 'Backend',
  },
];
