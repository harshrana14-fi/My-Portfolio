"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Filter,
  Monitor,
  Layers,
  Brain,
  Code,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { PROJECTS } from '@/lib/constants';


const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("recent");
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const categories = ["All", "Frontend", "Full Stack", "AI/ML"];

  const filteredProjects = PROJECTS.filter(project => {
    return activeFilter === "All" || project.category === activeFilter;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.title.localeCompare(b.title);
      case "category":
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Monitor className="w-5 h-5" />;
      case "Full Stack":
        return <Layers className="w-5 h-5" />;
      case "AI/ML":
        return <Brain className="w-5 h-5" />;
      default:
        return <Filter className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "from-blue-400 to-cyan-500";
      case "Full Stack":
        return "from-purple-400 to-pink-500";
      case "AI/ML":
        return "from-green-400 to-emerald-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  const handleViewProject = (projectLink: string | URL | undefined) => {
    if (projectLink) {
      window.open(projectLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
   <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies and modern development practices
          </p>
        </div>


        {/* Controls */}
        <div className="mb-12 space-y-6">
          {/* Filter and Sort Controls */}
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 border-transparent text-white shadow-lg shadow-cyan-500/25'
                  : 'border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-white bg-gray-800/50 backdrop-blur-sm'
              }`}
                >
                  {getCategoryIcon(category)}
                  <span className="font-medium text-sm">{category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image on Hover */}
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}
              
              {/* Content */}
             <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{project.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <div
                        className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(
                          project.category
                        )} text-white text-sm font-medium mt-2`}
                      >
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
                 <p className="text-gray-300 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-400">
                      Technologies Used
                    </h4>
                    <span className="text-xs text-gray-500">
                      {project.tech.length} technologies
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/60 backdrop-blur-sm text-gray-300 rounded-full text-sm border border-gray-700/50 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-auto">
                  <button
                    onClick={() => handleViewProject(project.link)}
                    className="flex-1 group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="flex items-center justify-center space-x-2 z-10 relative">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </button>
                  
                  <button className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-cyan-400">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate on your next project. I'm always excited to work on innovative solutions 
                and bring creative ideas to life with cutting-edge technology.
              </p>
              
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="flex items-center space-x-2 z-10 relative">
                  <Code className="w-5 h-5" />
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;